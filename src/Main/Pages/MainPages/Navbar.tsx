import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Carousel: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileNavOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition duration-500 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
      style={{ height: "60px" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        <h1 className="text-white text-xl font-bold cursor-pointer">
          <button
            onClick={() => scrollToSection("hero")}
            className={`${
              activeItem === "HyperHive" ? "text-green-500" : "text-white"
            }`}
          >
            HyperHive
          </button>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["hero", "about", "services", "portfolio", "team", "contact"].map(
            (id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm transition hover:text-green-500 ${
                  activeItem === id ? "text-green-500" : "text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            )
          )}
          <Link
            to="/HyperHive/blog"
            className={`text-sm transition hover:text-green-500 ${
              activeItem === "blog" ? "text-green-500" : "text-white"
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
            {isMobileNavOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileNavOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-black text-white shadow-lg z-40">
          <ul className="flex flex-col space-y-4 p-6">
            {["hero", "about", "services", "portfolio", "team", "contact"].map(
              (id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left ${
                      activeItem === id ? "text-green-500" : "text-white"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              )
            )}
            <li>
              <Link
                to="/HyperHive/blog"
                onClick={() => setActiveItem("blog")}
                className={`block w-full text-left ${
                  activeItem === "blog" ? "text-green-500" : "text-white"
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Carousel;
