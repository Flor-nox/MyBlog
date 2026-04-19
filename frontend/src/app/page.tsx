import { Hero } from "@/components/sections/hero";
import { LatestPosts } from "@/components/sections/latest-posts";
import { ComponentShowcase } from "@/components/sections/component-showcase";
import { SkillLibrary } from "@/components/sections/skill-library";

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-20 pb-20 relative">
      <Hero />
      <LatestPosts />
      <ComponentShowcase />
      <SkillLibrary />
    </div>
  );
}
