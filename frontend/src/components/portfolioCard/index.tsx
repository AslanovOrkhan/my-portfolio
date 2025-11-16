import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface PortfolioCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

const PortfolioCard = ({ 
  image, 
  category, 
  title, 
  description, 
  technologies,
  demoLink,
  githubLink 
}: PortfolioCardProps) => {
  return (
    <div className="bg-[#212121] rounded-2xl overflow-hidden transition-all duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {demoLink && (
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#ff014f] hover:bg-[#ff014f]/80 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#ff014f] hover:bg-[#ff014f]/80 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category & Technologies */}
        <div className="flex items-center justify-between">
          <span className="text-[#ff014f] text-xs uppercase tracking-wider font-semibold">{category}</span>
          <div className="flex gap-2 flex-wrap justify-end">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="text-xs text-gray-400 bg-[#1a1a1a] px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white group-hover:text-[#ff014f] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}

export default PortfolioCard
