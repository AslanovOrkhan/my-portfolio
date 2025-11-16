import SkillCard from '../../components/skillCard';
import FeatureCard from '../../components/featureCard';
import PortfolioCard from '../../components/portfolioCard';
import ContactCard from '../../components/contactCard';
import ContactForm from '../../components/contactForm';
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaSass, FaCode, FaPalette, FaDatabase, FaCloud, FaCog } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0a0a0a] min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p className="text-gray-400 text-sm tracking-[0.3em] uppercase">WELCOME TO MY WORLD</p>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Jone Lee</span>
                <br />
                <span className="text-gray-300">a Developer.</span>
              </h1>
              
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
              </p>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">FIND WITH ME</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 flex items-center justify-center rounded-lg transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 flex items-center justify-center rounded-lg transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 flex items-center justify-center rounded-lg transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 flex items-center justify-center rounded-lg transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop" 
                alt="Profile" 
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0f0f0f] py-20" id="about">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop" 
                  alt="About Me" 
                  className="w-full max-w-lg mx-auto rounded-2xl"
                />
                {/* Decorative corner element */}
                <div className="absolute top-0 left-0 w-24 h-24">
                  <svg viewBox="0 0 100 100" className="text-amber-500">
                    <path d="M0,0 L0,50 Q0,0 50,0 L100,0" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <p className="text-[#ff014f] text-sm tracking-[0.3em] uppercase font-semibold">VISIT MY PORTFOLIO & HIRE ME</p>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white">About Me</h2>
              
              <p className="text-gray-400 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit, et necessitatibus adipisci labore sit veritatis vero tempore sequi at sed facere dolore. Quae obcaecati eius quasi doloribus illum minus fugit.
              </p>

              <p className="text-gray-400 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos saepe ipsa cupiditate accusantium voluptatibus quidem nam, reprehenderit,
              </p>

              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-block text-[#ff014f] hover:text-white font-semibold uppercase tracking-wider text-sm transition-colors"
                >
                  DOWNLOAD MY CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#0a0a0a] py-20" id="skills">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#ff014f] text-sm tracking-[0.3em] uppercase font-semibold mb-4">VISIT MY SKILL & HIRE ME</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">My Skill</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
            <SkillCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
            <SkillCard icon={<FaSass className="text-pink-500" />} name="SCSS" />
            <SkillCard icon={<SiTailwindcss className="text-cyan-400" />} name="Tailwind CSS" />
            
            <SkillCard icon={<FaBootstrap className="text-purple-600" />} name="Bootstrap" />
            <SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" />
            <SkillCard icon={<FaReact className="text-cyan-400" />} name="React" />
            <SkillCard icon={<SiTypescript className="text-blue-600" />} name="TypeScript" />
            
            <SkillCard icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
            <SkillCard icon={<SiNextdotjs className="text-white" />} name="Next.js" />
            <SkillCard icon={<SiExpress className="text-gray-400" />} name="Express.js" />
            <SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
            
            <SkillCard icon={<SiMysql className="text-blue-500" />} name="MySQL" />
            <SkillCard icon={<SiPostgresql className="text-blue-600" />} name="PostgreSQL" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0f0f0f] py-20" id="features">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#ff014f] text-sm tracking-[0.3em] uppercase font-semibold mb-4">FEATURES</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">What I Do</h2>
          </div>

          {/* Features Slider */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            <SwiperSlide>
              <FeatureCard
                icon={<FaCode />}
                title="Web Development"
                description="Frontend və Backend development, React, TypeScript və modern web texnologiyaları ilə responsive interfeys və güclü API-lar yaradıram. Full Stack həllər təqdim edirəm."
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <FeatureCard
                icon={<FaPalette />}
                title="UI/UX Design"
                description="İstifadəçi dostu və cəlbedici interfeyslər dizayn edirəm. Bütün cihazlarda mükəmməl görünən responsive dizaynlar yaradıram və istifadəçi təcrübəsini optimallaşdırıram."
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <FeatureCard
                icon={<FaDatabase />}
                title="Database & Backend"
                description="MongoDB, MySQL, PostgreSQL ilə effektiv verilənlər bazası strukturları qururam. RESTful və GraphQL API-lar inkişaf etdirərək güclü backend sistemlər hazırlayıram."
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <FeatureCard
                icon={<FaCloud />}
                title="DevOps & Deployment"
                description="AWS, Vercel, Heroku kimi platformalarda deploy edirəm. CI/CD prosesləri qurub avtomatlaşdırılmış test və deployment həlləri təqdim edirəm."
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <FeatureCard
                icon={<FaCog />}
                title="Other Services"
                description="Performance optimallaşdırma, SEO, kod keyfiyyətinin yaxşılaşdırılması, məsləhətləşmə xidmətləri və texniki dəstək göstərirəm. Layihələri tam dövrüdə idarə edirəm."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#0a0a0a] py-20" id="portfolio">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#ff014f] text-sm tracking-[0.3em] uppercase font-semibold mb-4">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">My Portfolio</h2>
          </div>

          {/* Portfolio Slider */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            <SwiperSlide>
              <PortfolioCard
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                category="WEB DEVELOPMENT"
                title="E-Commerce Platform"
                description="Tam funksional e-commerce platforması React, Node.js və MongoDB ilə hazırlanıb. İstifadəçi autentifikasiyası, məhsul idarəetməsi və ödəniş inteqrasiyası."
                technologies={["React", "Node.js", "MongoDB", "Stripe"]}
                demoLink="https://demo.com"
                githubLink="https://github.com/username/project"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <PortfolioCard
                image="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                category="MOBILE APP"
                title="Fitness Tracking App"
                description="React Native ilə hazırlanmış mobil fitness tətbiqi. İdman proqramları, qida trackeri və progress analitikası."
                technologies={["React Native", "Firebase", "Redux"]}
                demoLink="https://demo.com"
                githubLink="https://github.com/username/project"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <PortfolioCard
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                category="FULL STACK"
                title="Task Management System"
                description="Komanda üçün task management sistemi. Real-time yeniləmələr, rol əsaslı icazələr və analitika dashboard."
                technologies={["Next.js", "TypeScript", "PostgreSQL"]}
                demoLink="https://demo.com"
                githubLink="https://github.com/username/project"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <PortfolioCard
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                category="DATA VISUALIZATION"
                title="Analytics Dashboard"
                description="Business analytics dashboard real-time data visualization ilə. Interactive charts və reports."
                technologies={["React", "D3.js", "Express.js"]}
                demoLink="https://demo.com"
                githubLink="https://github.com/username/project"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <PortfolioCard
                image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop"
                category="WEB APP"
                title="Social Media Platform"
                description="Sosial media platforması real-time messaging, post sharing və user profiles ilə."
                technologies={["Vue.js", "Socket.io", "MongoDB"]}
                demoLink="https://demo.com"
                githubLink="https://github.com/username/project"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <PortfolioCard
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                category="API DEVELOPMENT"
                title="RESTful API Service"
                description="Scalable RESTful API mikroservis arxitekturası ilə. Authentication, rate limiting və documentation."
                technologies={["Node.js", "Express", "MySQL", "Docker"]}
                demoLink="https://demo.com"
                githubLink="https://github.com/username/project"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0f0f0f] py-20" id="contact">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#ff014f] text-sm tracking-[0.3em] uppercase font-semibold mb-4">CONTACT</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Contact With Me</h2>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactCard
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
              name="Nevine Acotanza"
              position="Chief Operating Officer"
              description="I am available for freelance work. Connect with me via and call in to my account"
              phone="+01234567890"
              email="admin@example.com"
            />
            <div className="bg-[#212121] rounded-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
