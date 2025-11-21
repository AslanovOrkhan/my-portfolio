import SkillCard from "../../components/skillCard";
import FeatureCard from "../../components/featureCard";
import PortfolioCard from "../../components/portfolioCard";
import ContactCard from "../../components/contactCard";
import ContactForm from "../../components/contactForm";
import Typewriter from "../../components/Typewriter";
import ScrollToTop from "../../components/ScrollToTop";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaCode,
  FaPalette,
  FaDatabase,
  FaCloud,
  FaCog,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import coffeeShop from "../../assets/Cafena-Coffee-Shop.png";
import hookahRestaurant from "../../assets/HUKA (2).png";
import blogPlatform from "../../assets/blog.png";
import gameImage from "../../assets/game.png";
import weatherApp from "../../assets/weatherApp.png";
import calendarApp from "../../assets/calendar.png";
import playerApp from "../../assets/musicPlayer.png";
import todolist from "../../assets/ToDoList.png";
import type { PortfolioItem } from "../../types/portfolio";
// Portfolio items array
const portfolioItems: PortfolioItem[] = [
  {
    image: coffeeShop,
    category: "WEB DEVELOPMENT",
    title: "Coffee Shop Website",
    description:
      "A modern coffee shop website showcasing menu, location, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://cafena-coffee-shop.vercel.app/",
    githubLink: "https://github.com/AslanovOrkhan/cafena-coffee-shop.git",
  },
  {
    image: hookahRestaurant,
    category: "WEB DEVELOPMENT",
    title: "Hookah Lounge Website",
    description:
      "A modern hookah restaurant website showcasing menu, location, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://huka-bar.vercel.app/",
    githubLink: "https://github.com/AslanovOrkhan/Hookah-Restaurant.git",
  },
  {
    image: blogPlatform,
    category: "WEB DEVELOPMENT",
    title: "Blog Platform",
    description:
      "Blog platform with user authentication, post creation, and commenting features.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://chipper-macaron-99446a.netlify.app/#",
    githubLink: "https://github.com/AslanovOrkhan/Blog-Website.git",
  },
  {
    image: gameImage,
    category: "WEB DEVELOPMENT",
    title: "Weather App",
    description:
      "An interactive weather app providing real-time weather updates, forecasts, and location-based weather information. Features a clean interface and responsive design for seamless user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://enchanting-zabaione-696ede.netlify.app/",
    githubLink: "https://github.com/AslanovOrkhan/weather-app-js.git",
  },
  {
    image: weatherApp,
    category: "WEB DEVELOPMENT",
    title: "tic-tac-toe Game",
    description:
      "An interactive tic-tac-toe game built with JavaScript, allowing two players to compete on a classic 3x3 grid. The game features a clean interface, real-time win detection, and highlights the winning combination. Perfect for practicing logic and having fun with friends.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://tic-tac-toe-game-eta-seven.vercel.app/",
    githubLink: "https://github.com/AslanovOrkhan/tic-tac-toe-game.git",
  },
  {
    image: calendarApp,
    category: "WEB DEVELOPMENT",
    title: "Calendar App",
    description:
      "Calendar application that allows users to view, add, and manage events seamlessly. Features a clean interface with month, week, and day views, along with event reminders and notifications to keep users organized and on schedule.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://js-calendar-iota.vercel.app/",
    githubLink: "https://github.com/AslanovOrkhan/Js-Calendar.git",
  },
  {
    image: playerApp,
    category: "WEB DEVELOPMENT",
    title: "Music Player",
    description:
      "A sleek music player application that allows users to play, pause, and skip tracks from their music library. Features a user-friendly interface with playlist management, volume control, and track progress visualization for an enhanced listening experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://javascript-music-player-five.vercel.app/",
    githubLink: "https://github.com/AslanovOrkhan/Javascript-Music-Player.git",
  },
  {
    image: todolist,
    category: "WEB DEVELOPMENT",
    title: "To-Do List App",
    description:
      "A simple and intuitive to-do list application that helps users organize their tasks effectively. Features include adding, editing, and deleting tasks, as well as marking them as complete. The app provides a clean interface and responsive design for easy task management on any device.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://js-to-do-list-eight.vercel.app/",
    githubLink: "https://github.com/AslanovOrkhan/JS-ToDo-List.git",
  }
];
const Home = () => {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");
    const servicesSection = document.getElementById("services");
    const portfolioSection = document.getElementById("portfolio");
    const contactSection = document.getElementById("contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about" && entry.isIntersecting) {
            setIsAboutVisible(true);
          }
          if (entry.target.id === "skills" && entry.isIntersecting) {
            setIsSkillsVisible(true);
          }
          if (entry.target.id === "services" && entry.isIntersecting) {
            setIsServicesVisible(true);
          }
          if (entry.target.id === "portfolio" && entry.isIntersecting) {
            setIsPortfolioVisible(true);
          }
          if (entry.target.id === "contact" && entry.isIntersecting) {
            setIsContactVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutSection) {
      observer.observe(aboutSection);
    }
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    if (servicesSection) {
      observer.observe(servicesSection);
    }
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
      if (portfolioSection) {
        observer.unobserve(portfolioSection);
      }
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-[#0a0a0a]  flex items-center w-full min-h-[95vh]  overflow-hidden lg:py-0 py-12 lg:px-16 px-3"
        id="home"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="text-[#c4cfde] text-sm tracking-[0.3em] uppercase">
              WELCOME TO MY WORLD
            </p>

            <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line">
              <Typewriter
                texts={[
                  { text: "Hi, I'm ", className: "" },
                  {
                    text: "Orkhan Aslanov",
                    className:
                      "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
                  },
                  { text: "\na ", className: "text-gray-300" },
                  { text: "Frontend Developer.", className: "text-gray-300" },
                ]}
                delay={80}
              />
            </h1>

            <p className="text-[#c4cfde] text-base">
              I am a frontend developer focused on building web applications. I
              create responsive and modern interfaces using HTML, CSS, SCSS, and
              Tailwind CSS. With JavaScript and TypeScript, I develop functional
              and user-friendly experiences. I build component-based
              applications using React.js and Next.js. I also work with Node.js
              and Express.js for backend integration. I have experience with
              both MongoDB and MySQL databases. I use Git for version control
              and work well in team environments. I am eager to learn new
              technologies and constantly improve my skills.
            </p>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-[#c4cfde] text-sm mb-4 uppercase tracking-wider">
                FIND WITH ME
              </p>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/orkhanaslanov"
                  className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center rounded-lg group"
                  whileHover={{
                    background:
                      "linear-gradient(to right, rgb(34, 211, 238), rgb(52, 211, 153))",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ color: "#ffffff" }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </motion.svg>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/AslanovOrkhan"
                  className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center rounded-lg group"
                  whileHover={{
                    background:
                      "linear-gradient(to right, rgb(34, 211, 238), rgb(52, 211, 153))",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ color: "#ffffff" }}
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </motion.svg>
                </motion.a>

                {/* YouTube */}
                <motion.a
                  href="https://www.youtube.com/@TheCodeFather97"
                  className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center rounded-lg group"
                  whileHover={{
                    background:
                      "linear-gradient(to right, rgb(34, 211, 238), rgb(52, 211, 153))",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ color: "#ffffff" }}
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </motion.svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/orkhan__1997/"
                  className="w-14 h-14 bg-[#1a1a1a] flex items-center justify-center rounded-lg group"
                  whileHover={{
                    background:
                      "linear-gradient(to right, rgb(34, 211, 238), rgb(52, 211, 153))",
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ color: "#ffffff" }}
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative lg:w-[40rem] w-full">
            <img
              src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-businessman-with-portfolio-worker-character-png-image_11578894.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0F0F0F] py-20 lg:px-16 px-3" id="about">
        <div className="container mx-auto lg:px-6 px-0">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <p className="text-[#c4cfde] text-sm tracking-[0.3em] uppercase">
                VISIT MY PORTFOLIO & HIRE ME
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                {isAboutVisible ? (
                  <Typewriter
                    texts={[
                      {
                        text: "About Me",
                        className:
                          "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
                      },
                    ]}
                    delay={100}
                  />
                ) : (
                  <span className="opacity-0">About Me</span>
                )}
              </h2>

              <p className="text-[#c4cfde] text-base leading-relaxed">
                I am a frontend developer focused on building web applications.
                I create responsive and modern interfaces using HTML, CSS, SCSS,
                and Tailwind CSS. With JavaScript and TypeScript, I develop
                functional and user-friendly experiences. I build
                component-based applications using React.js and Next.js.
              </p>

              <p className="text-[#c4cfde] text-base leading-relaxed">
                I also work with Node.js and Express.js for backend integration.
                I have experience with both MongoDB and MySQL databases. I use
                Git for version control and work well in team environments.
              </p>

              <div className="pt-4">
                <a
                  href="/cv.pdf"
                  download
                  className="relative inline-block px-8 py-4 font-semibold uppercase tracking-wider text-sm z-10 before:content-[''] before:absolute before:w-full before:h-full before:rounded-md before:top-0 before:left-0 before:bg-gradient-to-br before:from-[#212428] before:to-[#16181c] before:-z-10"
                >
                  <span className="relative z-20 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    DOWNLOAD MY CV
                  </span>
                </a>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="lg:px-6 px-0 order-2 lg:order-1">
              <div className="shadow-[0_0_10px_rgba(156,163,175,0.6)] bg-[#212428] rounded-xl lg:p-12 p-6">
                <div className="bg-black rounded-xl">
                  <img
                    src="https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-businessman-with-portfolio-worker-character-png-image_11578894.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#0a0a0a] py-20" id="skills">
        <div className="container mx-auto lg:px-6 px-3">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#c4cfde] text-sm tracking-[0.3em] uppercase mb-4">
              VISIT MY SKILL & HIRE ME
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {isSkillsVisible ? (
                <Typewriter
                  texts={[
                    {
                      text: "My Skills",
                      className:
                        "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
                    },
                  ]}
                  delay={100}
                />
              ) : (
                <span className="opacity-0">My Skills</span>
              )}
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-3">
            <SkillCard
              icon={<FaHtml5 className="text-orange-500" />}
              name="HTML"
            />
            <SkillCard
              icon={<FaCss3Alt className="text-blue-500" />}
              name="CSS"
            />
            <SkillCard
              icon={<FaSass className="text-pink-500" />}
              name="SCSS"
            />
            <SkillCard
              icon={<SiTailwindcss className="text-cyan-400" />}
              name="Tailwind CSS"
            />

            <SkillCard
              icon={<FaBootstrap className="text-purple-600" />}
              name="Bootstrap"
            />
            <SkillCard
              icon={<SiJavascript className="text-yellow-400" />}
              name="JavaScript"
            />
            <SkillCard
              icon={<FaReact className="text-cyan-400" />}
              name="React"
            />
            <SkillCard
              icon={<SiTypescript className="text-blue-600" />}
              name="TypeScript"
            />

            <SkillCard
              icon={<FaNodeJs className="text-green-500" />}
              name="Node.js"
            />
            <SkillCard
              icon={<SiNextdotjs className="text-white" />}
              name="Next.js"
            />
            <SkillCard
              icon={<SiExpress className="text-gray-400" />}
              name="Express.js"
            />
            <SkillCard
              icon={<SiMongodb className="text-green-500" />}
              name="MongoDB"
            />

            <SkillCard
              icon={<SiMysql className="text-blue-500" />}
              name="MySQL"
            />
            <SkillCard
              icon={<SiPostgresql className="text-blue-600" />}
              name="PostgreSQL"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0f0f0f] py-20" id="service">
        <div className="container mx-auto lg:px-6 px-3">
          {/* Section Header */}
          <div className="text-center mb-16" id="services">
            <p className="text-[#c4cfde] text-sm tracking-[0.3em] uppercase mb-4">
              FEATURES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {isServicesVisible ? (
                <Typewriter
                  texts={[
                    {
                      text: "What I Do",
                      className:
                        "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
                    },
                  ]}
                  delay={100}
                />
              ) : (
                <span className="opacity-0">What I Do</span>
              )}
            </h2>
          </div>

          {/* Features Slider */}
          <Swiper
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
            <SwiperSlide className="h-auto">
              <FeatureCard
                icon={<FaCode />}
                title="Web Development"
                description="Frontend and Backend development with React, TypeScript and modern web technologies. I create responsive interfaces and powerful APIs."
              />
            </SwiperSlide>

            <SwiperSlide className="h-auto">
              <FeatureCard
                icon={<FaPalette />}
                title="UI/UX Design"
                description="I design user-friendly and attractive interfaces. I create responsive designs that look perfect on all devices and optimize user experience."
              />
            </SwiperSlide>

            <SwiperSlide className="h-auto">
              <FeatureCard
                icon={<FaDatabase />}
                title="Database & Backend"
                description="I build efficient database structures with MongoDB, MySQL, PostgreSQL. I develop RESTful and GraphQL APIs to create powerful backend systems."
              />
            </SwiperSlide>

            <SwiperSlide className="h-auto">
              <FeatureCard
                icon={<FaCloud />}
                title="DevOps & Deployment"
                description="I deploy on platforms like AWS, Vercel, Heroku. I set up CI/CD processes and provide automated testing and deployment solutions."
              />
            </SwiperSlide>

            <SwiperSlide className="h-auto">
              <FeatureCard
                icon={<FaCog />}
                title="Other Services"
                description="Performance optimization, SEO, code quality improvement, consulting services and technical support. I manage projects throughout the full lifecycle."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#0a0a0a] py-20" id="portfolio">
        <div className="container mx-auto lg:px-6 px-3">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#c4cfde] text-sm tracking-[0.3em] uppercase mb-4">
              VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {isPortfolioVisible ? (
                <Typewriter
                  texts={[
                    {
                      text: "My Portfolio",
                      className:
                        "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
                    },
                  ]}
                  delay={100}
                />
              ) : (
                <span className="opacity-0">My Portfolio</span>
              )}
            </h2>
          </div>

          {/* Portfolio Slider */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {portfolioItems.map((item, idx) => (
              <SwiperSlide key={idx}>
                <PortfolioCard
                  image={item.image}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  technologies={item.technologies}
                  demoLink={item.demoLink}
                  githubLink={item.githubLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#0f0f0f] py-20" id="contact">
        <div className="container mx-auto lg:px-20 px-3">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#c4cfde] text-sm tracking-[0.3em] uppercase mb-4">
              CONTACT
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {isContactVisible ? (
                <Typewriter
                  texts={[
                    {
                      text: "Contact With Me",
                      className:
                        "bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent",
                    },
                  ]}
                  delay={100}
                />
              ) : (
                <span className="opacity-0">Contact With Me</span>
              )}
            </h2>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactCard
              image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop"
              name="Nevine Acotanza"
              position="Chief Operating Officer"
              description="I am available for freelance work. Connect with me via and call in to my account"
              phone="+01234567890"
              email="admin@example.com"
            />
            <div className="bg-[#212121] rounded-lg lg:p-8 px-3 py-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
};

export default Home;
