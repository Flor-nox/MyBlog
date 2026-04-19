import { getAllPosts } from "@/lib/posts";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gradient">所有文章</h1>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} href={`/posts/${post.id}`}>
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-3">
                  <Badge>{post.category}</Badge>
                </div>
                <h2 className="text-xl font-bold mb-2 text-white hover:text-wuthering-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
