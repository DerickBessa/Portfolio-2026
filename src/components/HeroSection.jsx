import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const html = document.documentElement;

    const updateMode = () => {
      setIsLightMode(!html.classList.contains("dark"));
    };

    updateMode();

    const observer = new MutationObserver(updateMode);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-4">
        {isLightMode && (
          <div className="bg-card text-foreground border border-border px-4 py-2 rounded-md font-medium text-sm opacity-80 animate-fade-in transition-opacity duration-500">
            {t("hero.lightModeMessage")}
          </div>
        )}

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{t("hero.greeting")}</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              {t("hero.firstName")}
            </span>
            <span className="text-gradient ml-1 opacity-0 animate-fade-in-delay-2">
              {" "}
              {t("hero.lastName")}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {t("hero.description")}
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {t("hero.viewWorkButton")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">{t("hero.scroll")}</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};