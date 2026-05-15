import { Helmet } from "react-helmet-async";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#About", label: "About" },
  { href: "#Projects", label: "Projects" },
  { href: "#Experience", label: "Experiences" },
  { href: "#Testimonials", label: "Testimonials" },
]


export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
    <nav className="container mx-auto px-6 flex items-center justify-between">
      <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
        <img src="./logo.png" alt="logo" className="w-25 h-8 rounded-full" />
      </a>

      {/* Desktop nav */}

      <div className="hidden md:flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="px-4 py-2 text-sm text-mute-foreground hover:text-foreground rounded-full hover:bg-surface">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* cta button */}
      <div className="hidden md:block">
        <a href="#Contact">
          <Button size="sm">Contact Me</Button>
        </a>
      </div>

      {/* mobile menu button  */}
      <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen((prev) => !prev)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>

    {/* mobile menu */}
    {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in flex absolute right-0 w-[70%] ">
      <div className="container mx-auto px-6 py-6 flex flex-col justify-center items-center">
        {navLinks.map((link, index) => (
          <a
            href={link.href}
            key={index}
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-mute-foreground hover:text-foreground py-2 text-start">
            {link.label}
          </a>
        ))}
        <a href="#Contact">
          <Button onClick={() => setMobileMenuOpen(false)}>
            contact Me
          </Button>
        </a>
      </div>
    </div>
    )}
  </header >;
};