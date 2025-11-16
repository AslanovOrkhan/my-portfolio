interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-[#212121] rounded-2xl p-8 hover:bg-[#2a2a2a] transition-all duration-300 group h-full">
      <div className="flex flex-col items-start gap-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#ff014f]/10 flex items-center justify-center text-3xl text-[#ff014f] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
