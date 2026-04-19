import fs from "fs";
import path from "path";
import matter from "gray-matter";

// content 目录现在在项目根目录
const postsDirectory = path.join(process.cwd(), "../content/posts");

export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
}

/**
 * 获取所有文章列表
 * @returns 文章数组，按日期降序排列
 */
export function getAllPosts(): Post[] {
  try {
    // 确保目录存在
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory not found: ${postsDirectory}`);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        try {
          const id = fileName.replace(/\.md$/, "");
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          return {
            id,
            title: data.title || "",
            date: data.date || "",
            category: data.category || "",
            tags: data.tags || [],
            excerpt: data.excerpt || "",
            content,
          };
        } catch (error) {
          console.error(`Failed to parse post: ${fileName}`, error);
          return null;
        }
      })
      .filter((post): post is Post => post !== null);

    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Failed to load posts:", error);
    return [];
  }
}

/**
 * 根据 ID 获取单篇文章
 * @param id - 文章 ID
 * @returns 文章对象，如果不存在则返回 null
 */
export function getPostById(id: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title || "",
      date: data.date || "",
      category: data.category || "",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      content,
    };
  } catch (error) {
    console.error(`Failed to load post: ${id}`, error);
    return null;
  }
}
