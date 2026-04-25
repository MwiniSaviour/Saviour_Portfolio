import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
const services = [
  {
    label: "Software Engineer",
    href: "#webdevelopment"
  },
  {
    label: "Graphic Design",
    href: "#graphic"
  },
  {
    label: "UI/UX Design",
    href: "#ui/ux"
  },
]

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between relative pt-36 pb-10 overflow-hidden ">
      <div className="container flex flex-col md:flex-row mx-auto px-6 relative z-10 gap-10 justify-between items-center">
        <div className="absolute top-1/2 left-1/2 w-200 h-200 rounded-full blur-3xl
                    bg-primary/5 -translate-x-1/2 -translate-y-1/2 z-10"/>
        <div className="flex flex-row animate-fade-in animation-duration-300">
          <p className="text-sm text-mute-foreground animate-fade-in animation-duration-400">
            <span className="text-5xl md:text-3xl lg:text-4xl lg:tracking-wide font-bold text-primary tracking-widest ">QUANTLAB <br /></span>
            Driving business growth through creative <br /> digital innovation.
          </p>
        </div>

        <div className="flex flex-col py-5 text-center md:py-2">
          <h1>services</h1>
          <div className="flex flex-row gap-2 text-mute-foreground bg-card rounded-2xl px-2 md:px-1 lg:px-2 py-2 items-center justify-center">
            {services.map((items, idx) => (
              <a key={idx}
                href={items.href}
                className="bg-secondary p-2 text-sm rounded-2xl hover:text-secondary-foreground transiton-all">
                {items.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-5 justify-center item-center">
          <AnimatedBorderButton><span className="text-sm">Wants to talk? contact me via WhatsApp!</span></AnimatedBorderButton>
          <Button size="sm">
            <a
              href="https://wa.me/233552703858?text=Hello!%20thank%20you%20for%20contacting%20Saviour%20-%20a%20software%20engineer%20and%20a%20graphic%20designer.%20How%20may%20I%20help%20you?"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Me
            </a>
          </Button>
        </div>
      </div>

      <span className="text-mute-foreground/50 pt-10">
        &copy; {new Date().getFullYear()} QuantLab — All rights reserved.
      </span>
    </footer>
  );
};  