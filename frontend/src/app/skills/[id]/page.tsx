import { notFound } from "next/navigation";
import { getSkillById, getRelatedSkills, getAllSkills } from "@/lib/skills";
import SkillDetailClient from "./skill-detail-client";

// 为静态导出生成所有可能的参数
export function generateStaticParams() {
  const skills = getAllSkills();
  return skills.map((skill) => ({
    id: skill.id,
  }));
}

interface PageProps {
  params: { id: string };
}

export default function SkillDetailPage({ params }: PageProps) {
  const skill = getSkillById(params.id);

  if (!skill) {
    notFound();
  }

  const relatedSkills = getRelatedSkills(params.id, 3);

  return <SkillDetailClient skill={skill} relatedSkills={relatedSkills} />;
}
