import { useEffect, useState } from "react"
import { Sun, Moon, X, Menu, Globe } from "lucide-react"
import { cn } from "../lib/utils"
import i18n from "../i18n"
import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState(localStorage.getItem("language") || "pt-BR")

  const navItems = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)

    // tema
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      localStorage.setItem("theme", "light")
    }

    // idioma
    i18n.changeLanguage(language)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)
    }
  }

  const toggleLanguage = () => {
    const newLang = language === "pt-BR" ? "en-US" : "pt-BR"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
    i18n.changeLanguage(newLang)
  }

  return (
    <nav className={cn(
      "fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">DerickBessa</span> Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="text-foreground font-bold text-glow hover:text-primary transition-colors duration-300">
              {item.name}
            </a>
          ))}


          {/* idioma */}
          <button onClick={toggleLanguage} className="p-2 rounded-full flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300">
            <Globe className="h-5 w-5" />
            {language === "pt-BR" ? "PT-BR" : "EN"}
          </button>
        </div>

        {/* mobile menu toggle */}
        <button onClick={() => setIsMenuOpen(prev => !prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* mobile menu overlay */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}

            {/* tema */}
            <button onClick={toggleTheme} className="p-2 mt-4 rounded-full transition-colors duration-300 focus:outline-none">
              {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}
            </button>

            {/* idioma */}
            <button onClick={toggleLanguage} className="p-2 mt-4 rounded-full flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300">
              <Globe className="h-5 w-5" />
              {language === "pt-BR" ? "PT-BR" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}