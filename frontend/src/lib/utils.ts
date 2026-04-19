import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 Tailwind CSS 类名
 * @param inputs - 类名数组
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 格式化日期为中文格式
 * @param date - 日期字符串
 * @returns 格式化后的日期字符串，如果无效则返回原始字符串
 */
export function formatDate(date: string): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    console.warn(`Invalid date string: ${date}`);
    return date;
  }
  return d.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * 检查字符串是否为有效日期
 * @param date - 待检查的字符串
 * @returns 是否为有效日期
 */
export function isValidDate(date: string): boolean {
  const d = new Date(date);
  return !isNaN(d.getTime());
}
