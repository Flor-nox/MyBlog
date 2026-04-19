import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ResonatorProvider } from "@/components/theme/resonator-provider";
import { ResonatorBackground } from "@/components/effects/resonator-background";
import { Navbar } from "@/components/layout/navbar";
import { SpiritGuide } from "@/components/theme/spirit-guide";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});
const firaCode = Fira_Code({ 
  subsets: ["latin"], 
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "花夜扁舟 | Flornox - Java & Agent Developer",
  description: "花夜扁舟（Flornox）的个人技术博客，分享 Java、Agent 开发和 AI 辅助编程的技术要点与难点",
  keywords: ["Java", "Agent", "AI", "编程", "技术博客", "花夜扁舟", "Flornox", "鸣潮", "共鸣者"],
  authors: [{ name: "花夜扁舟" }],
  creator: "花夜扁舟",
  publisher: "花夜扁舟",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "花夜扁舟的技术博客",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@flornox",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ResonatorProvider>
          {/* 共鸣者主题背景 */}
          <ResonatorBackground />
          
          {/* 主内容 */}
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 py-8 relative z-10 flex-1">
              {children}
            </main>
            
            {/* 页脚 */}
            <Footer />
            
            {/* 导航精灵 */}
            <SpiritGuide />
            
            {/* 返回顶部按钮 */}
            <BackToTop />
          </div>
        </ResonatorProvider>
      </body>
    </html>
  );
}
