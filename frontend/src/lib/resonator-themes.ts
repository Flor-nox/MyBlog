// 共鸣者主题系统 - Resonator Theme System
// 千咲(湮灭-黑)、爱弥斯(热熔-红紫)、菲比(衍射-黄蓝)、绯雪(冷凝-银蓝)

export type ResonatorType = "chisaki" | "amethyst" | "phoebe" | "feixue";

export interface ResonatorTheme {
  id: ResonatorType;
  name: string;
  nameEn: string;
  title: string;
  description: string;
  element: string;
  elementType: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
    glow: string;
    background: string;
    card: string;
    text: string;
    textMuted: string;
  };
  images: {
    full: string;
    icon: string;
    avatar: string;
  };
  spirit: {
    name: string;
    emoji: string;
    greeting: string;
    phrases: string[];
  };
}

export const resonatorThemes: Record<ResonatorType, ResonatorTheme> = {
  chisaki: {
    id: "chisaki",
    name: "千咲",
    nameEn: "Chisaki",
    title: "湮灭",
    description: "我会…… 切开这个死局。",
    element: "湮灭",
    elementType: "湮灭系",
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6",
      accent: "#a78bfa",
      gradient: "from-indigo-500 via-purple-500 to-violet-400",
      glow: "shadow-indigo-500/50",
      background: "bg-gradient-to-br from-black via-gray-900 to-slate-950",
      card: "bg-indigo-900/20 border-indigo-500/40",
      text: "text-white",
      textMuted: "text-indigo-200",
    },
    images: {
      full: "/images/qianxiao-full.png",
      icon: "/images/qianxiao-icon.png",
      avatar: "/images/qianxiao-avatar.png",
    },
    spirit: {
      name: "千咲",
      emoji: "🌑",
      greeting: "我会…… 切开这个死局。",
      phrases: [
        "虚无之中，万物归寂",
        "在黑暗中寻找光明",
        "万物终将归于虚无",
        "寂灭之中，自有生机",
      ],
    },
  },
  amethyst: {
    id: "amethyst",
    name: "爱弥斯",
    nameEn: "Amethyst",
    title: "热熔",
    description: "但愿我会让你感到骄傲，但愿我没有让你失望。",
    element: "热熔",
    elementType: "热熔系",
    colors: {
      primary: "#f97316",
      secondary: "#dc2626",
      accent: "#fbbf24",
      gradient: "from-orange-500 via-red-500 to-yellow-400",
      glow: "shadow-orange-500/50",
      background: "bg-gradient-to-br from-red-950 via-purple-950 to-orange-950",
      card: "bg-orange-900/20 border-orange-500/40",
      text: "text-white",
      textMuted: "text-orange-200",
    },
    images: {
      full: "/images/aimisi-full.png",
      icon: "/images/aimisi-icon.png",
      avatar: "/images/aimisi-avatar.png",
    },
    spirit: {
      name: "爱弥斯",
      emoji: "🔥",
      greeting: "但愿我会让你感到骄傲，但愿我没有让你失望。",
      phrases: [
        "热情如火，智慧如紫",
        "红与紫的交织，是力量的象征",
        "燃烧吧，心中的火焰",
        "炽热之心，永不熄灭",
      ],
    },
  },
  phoebe: {
    id: "phoebe",
    name: "菲比",
    nameEn: "Phoebe",
    title: "衍射",
    description: "岁主在上，愿你的旅途永远有爱与光明垂耀。",
    element: "衍射",
    elementType: "衍射系",
    colors: {
      primary: "#fbbf24",
      secondary: "#3b82f6",
      accent: "#60a5fa",
      gradient: "from-yellow-400 via-blue-500 to-cyan-400",
      glow: "shadow-yellow-500/50",
      background: "bg-gradient-to-br from-yellow-950/50 via-blue-950 to-slate-950",
      card: "bg-yellow-900/20 border-yellow-500/40",
      text: "text-white",
      textMuted: "text-yellow-200",
    },
    images: {
      full: "/images/feibi-full.png",
      icon: "/images/feibi-icon.png",
      avatar: "/images/feibi-avatar.png",
    },
    spirit: {
      name: "菲比",
      emoji: "✨",
      greeting: "岁主在上，愿你的旅途永远有爱与光明垂耀。",
      phrases: [
        "愿你的每一个愿望，都能如星光般实现",
        "黄与蓝的交织，是智慧的颜色",
        "星星之火，可以燎原",
        "智慧如光，无处不在",
      ],
    },
  },
  feixue: {
    id: "feixue",
    name: "绯雪",
    nameEn: "Feixue",
    title: "冷凝",
    description: "灼樱花散，求尽我身。",
    element: "冷凝",
    elementType: "冷凝系",
    colors: {
      primary: "#e2e8f0",
      secondary: "#3b82f6",
      accent: "#06b6d4",
      gradient: "from-slate-200 via-blue-500 to-cyan-400",
      glow: "shadow-blue-500/50",
      background: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950",
      card: "bg-blue-900/20 border-blue-400/40",
      text: "text-white",
      textMuted: "text-blue-200",
    },
    images: {
      full: "/images/feixue-full.png",
      icon: "/images/feixue-icon.png",
      avatar: "/images/feixue-avatar.png",
    },
    spirit: {
      name: "绯雪",
      emoji: "❄️",
      greeting: "灼樱花散，求尽我身。",
      phrases: [
        "深空联合的大义的确是正确",
        "但我更能理解你想要拯救某人的这份心情",
        "银与蓝的交织，是纯净的誓言",
        "霜华满天，守护之心不灭",
      ],
    },
  },
};

export const defaultResonator: ResonatorType = "phoebe";

/**
 * 有效的共鸣者类型列表
 */
const validResonators: ResonatorType[] = ["chisaki", "amethyst", "phoebe", "feixue"];

/**
 * 验证是否为有效的共鸣者类型
 * @param type - 待验证的类型
 * @returns 是否为有效类型
 */
export function isValidResonatorType(type: string): type is ResonatorType {
  return validResonators.includes(type as ResonatorType);
}

/**
 * 获取指定共鸣者的主题配置
 * @param type - 共鸣者类型
 * @returns 共鸣者主题配置，如果类型无效则返回默认主题
 */
export function getResonatorTheme(type: ResonatorType): ResonatorTheme {
  if (!isValidResonatorType(type)) {
    console.warn(`Invalid resonator type: ${type}, falling back to default: ${defaultResonator}`);
    return resonatorThemes[defaultResonator];
  }
  return resonatorThemes[type];
}

/**
 * 获取所有共鸣者主题配置
 * @returns 所有共鸣者主题配置数组
 */
export function getAllResonators(): ResonatorTheme[] {
  return Object.values(resonatorThemes);
}
