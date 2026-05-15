import { Helmet } from "react-helmet-async";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlight = [
  {
    icon: Rocket,
    title: "Performance",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Staying ahead with the latest technologies and best practices",
  },
]
export const About = () => {
  return (
    <section id="About" className="py-3 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5 font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bulding the future, {" "}
              <span className="font-serif italic font-normal text-white">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-mute-foreground animate-fade-in animate-delay-200">
              <p>
                I'm a passionate creator shaping digital
                products that merge design and technology. What began as curiosity about how
                the web works has grown into a multidisciplinary expertise spanning modern
                frontend frameworks, backend systems, and visual design principles.
              </p>
              <p>
                I specialize in React, Next.js, and TypeScript, while also embracing the art
                of web and graphic design. From sleek landing pages and intuitive interfaces
                to scalable enterprise applications, I craft solutions that balance technical
                excellence with aesthetics and user delight. My approach is full-stack at
                heart—bridging design sensibility with robust engineering.
              </p>
              <p>
                Beyond coding, I explore new technologies, experiment with creative design
                tools, contribute to open-source projects, and share knowledge with the
                developer and design communities. For me, building is as much about beauty
                and usability as it is about performance and scalability.
              </p>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to craft digital experiences that are visually striking,
                  technically sound, and deeply engaging — products that users love to
                  interact with and developers love to evolve."
                </p>
              </div>
            </div>
          </div>

          {/* Right column - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((items, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <items.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg text-semibold mb-2">{items.title}</h3>
                <p className="text-sm text-mute-foreground">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
};