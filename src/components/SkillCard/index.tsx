import type { SkillCardProps } from "../../types/skillCard"
const SkillCard = ({ icon, name }: SkillCardProps) => {
  return (
    <div className="bg-[#1a1a1a] hover:bg-[#212121] rounded-xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 group cursor-pointer">
      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{name}</h3>
    </div>
  )
}

export default SkillCard