import { useState, useEffect } from "react";
import NovuLogo from "./NovuLogo";

const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#precos" },
  { label: "Como funciona", href: "#como-funciona" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["funcionalidades", "precos", "como-funciona"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(247,247,247,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <NovuLogo />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-ui text-[0.9rem] transition-colors duration-200"
              style={{
                color: activeSection === link.href.slice(1) ? "#05487F" : "#384145",
                fontWeight: activeSection === link.href.slice(1) ? 600 : 400,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="font-ui text-[0.9rem] font-semibold px-[22px] py-[10px] rounded-full transition-all duration-200 hover:opacity-90"
            style={{ background: "#05487F", color: "#fff" }}
          >
            Testar grátis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="w-5 h-0.5 rounded-full" style={{ background: "#262626" }} />
          <span className="w-5 h-0.5 rounded-full" style={{ background: "#262626" }} />
          <span className="w-3.5 h-0.5 rounded-full" style={{ background: "#262626" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(247,247,247,0.98)", backdropFilter: "blur(12px)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-ui text-[0.95rem]"
              style={{ color: "#384145" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="font-ui text-[0.95rem] font-semibold px-[22px] py-[10px] rounded-full text-center"
            style={{ background: "#05487F", color: "#fff" }}
          >
            Começar grátis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
