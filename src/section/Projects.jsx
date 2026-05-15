import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Analytics dashboard",
    description: "A comprehensive financial analytics platform...",
    image: "/project/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    category: "web",
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution...",
    image: "/project/project2.png",
    tags: ["NextJS", "PostgreSQL", "Stripe"],
    category: "web",
    link: "#",
    github: "#"
  },
  {
    title: "Landing page UI/UX",
    description: "clean visual yet sleek and modern-animated",
    image: "/project/project3.png",
    tags: ["React", "OpenAI"],
    category: "uiux",
    link: "#",
    github: "#"
  },
  {
    title: "Brand Identity Design",
    description: "Modern brand logo that in it sell tells the story of the brand ",
    image: "./project/graphic/20260312_181942.png",
    tags: ["Pixellab", "Illustrator"],
    category: "graphic",
    link: "#",
    github: "#"
  },
  {
    title: "E-learning course platform UI",
    description: "Clean and modern platform for accessing learning resources.",
    image: "./project/course.png",
    tags: ["Figma", "UX Research"],
    category: "uiux", // 👈 IMPORTANT
    link: "#",
    github: "#"
  },

  {
    title: "Business flyers",
    description: "A business flyer that communicate the services of a business.",
    image: "./project/graphic/cwpc-flyer2 copy.jpg",
    tags: ["Photoshop", "pixellab, Canva"],
    category: "graphic", // 👈 IMPORTANT
    link: "#",
    github: "#"
  },
  {
    title: "Event flyers",
    description: "A clean and sleek birthday flyer crafted with photoshop",
    image: "./project/graphic/sheldon-1.jpg",
    tags: ["Photoshop", "pixellab, Canva"],
    category: "graphic", // 👈 IMPORTANT
    link: "#",
    github: "#"
  },

  {
    title: "Portfolio Website",
    description: "Personal portfolio built with modern stack.",
    image: "./project/project5.png",
    tags: ["NextJS", "Tailwind"],
    category: "web", // 👈 IMPORTANT
    link: "#",
    github: "#"
  }
];

const filters = [
  { label: "All", value: "all" },
  { label: "UI/UX", value: "uiux" },
  { label: "Graphic Design", value: "graphic" },
  { label: "Web Design", value: "web" }
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="Projects"
      className="relative py-32 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-semi-bold tracking-widest text-primary">
            Featured Work
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`
                px-6 py-3 rounded-lg text-sm uppercase tracking-wide
                transition-all duration-300
                ${activeFilter === filter.value
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card/80 text-white/80 border hover:border-primary hover:text-primary"}
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    className="p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-mute-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>

                <p
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                  className={`cursor-pointer ${expandedIndex === idx ? "" : "line-clamp-3"
                    }`}
                >
                  {project.description}
                  <span className="text-primary ml-2 text-sm">
                    {expandedIndex === idx ? "Show less" : "Read more"}
                  </span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-mute-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <AnimatedBorderButton>
            View all projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};