import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, LayoutGrid, MessageSquare, Palette } from "lucide-react";

const components = [
  {
    id: "button",
    name: "Button",
    description: "多种样式的按钮组件，支持不同变体和尺寸",
    icon: Zap,
    category: "基础组件",
  },
  {
    id: "card",
    name: "Card",
    description: "卡片容器组件，支持悬停效果和链接",
    icon: LayoutGrid,
    category: "布局组件",
  },
  {
    id: "modal",
    name: "Modal",
    description: "模态对话框组件，支持动画和遮罩",
    icon: MessageSquare,
    category: "反馈组件",
  },
  {
    id: "theme",
    name: "Theme",
    description: "共鸣者主题切换系统，支持多种配色",
    icon: Palette,
    category: "主题组件",
  },
];

export default function LabPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gradient">组件实验室</h1>
        <p className="text-gray-400 mb-8">探索可复用的 UI 组件和设计模式</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component) => (
            <Card key={component.id} href={`/lab/${component.id}`}>
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-4">
                  <component.icon className="w-8 h-8 text-wuthering-accent" />
                  <Badge variant="secondary">{component.category}</Badge>
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">{component.name}</h2>
                <p className="text-gray-400">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
