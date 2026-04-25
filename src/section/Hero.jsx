import { Button } from "@/components/Button"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Github, Linkedin, Twitter, Download } from "lucide-react";

const skills = [
  "React",
  "HTML",
  "Next.js",
  "Photoshop",
  "PostgreSQL",
  "AWS",
  "Redis",
  "Docker",
  "Vercel",
  "TailwindCSS",
  "Prisma",
  "Jest",
  "Figma",
  "Mongodb",
  "Git",
  "Canva",
  "Typescript",
]
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/orange_grid.jpg"
          alt="hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* Orange dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#ff7200",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20
                }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          {/* left - text-content */}
          <div className="space-y-8 text-center items-center align-center md:text-start ">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React specialist • Graphic Designer
              </span>
            </div>

            {/* headling */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7x1 font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic text-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-mute-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi I'm Saviour Mwini — a software engineer & graphic designer specializing in
                React, Next.js, and Typescript. I build scalable, performant
                Web applications that users love.
              </p>
            </div>

            {/* ctas */}
            <div className="flex flex-row gap-2 md:gap-4 animate-fade-in animation-delay-300 items-center justify-center md:items-start md:justify-start ">
              <Button size="lg" className="text-sm md:text-xl">
                <a href="#Contact" className="flex flex-row items-center md:gap-2">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <AnimatedBorderButton>
                <span className="flex flex-row text-sm md:text-xl px-2 items-center md:gap-2">
                  <a href="./doc/CV_Saviour_dev.pdf" download="CV-Saviour_software_enginer.pdf" className="flex flex-row text-sm md:text-xl items-center">
                    <Download className="w-6 h-5 text-[0.5rem]" />
                    Download CV
                  </a>

                </span>
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 text-center align-center">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "https://linkedin.com/in/saviour/|78", target: "_blank", rel: "noopener noreferrer" },
                { icon: Twitter, href: "https://x.com/NewtonMwi82427", target: "_blank", rel: "noopener noreferrer" },
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right - profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile - image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse"/>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img src="/profile-photo.png" alt="profile image" className="w-full aspect-4/5 rounded-2xl" />

                {/* flaoting badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-duration-500">
                  <div className="text-2xl font-bold text-primary">+5</div>
                  <div className="text-x5 text-mute-foreground">Months Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-mute-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-mute-foreground/50 hover:text-mute-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
      animate-fade-in animate-delay-800">
        <a
          href="#About" className="flex flex-col items-center gap-2 text-mute-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};