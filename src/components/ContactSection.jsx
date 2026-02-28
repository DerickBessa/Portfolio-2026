import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title")} <span className="text-primary">{t("contact.highlight")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.description")}
        </p>

        <div className="md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">{t("contact.infoTitle")}</h3>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Email */}
              <div className="flex-1 flex items-center space-x-4 p-6 border border-text-secondary-foreground rounded-lg group hover:shadow-md transition-all duration-300">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center w-full">
                  <h4 className="font-medium">{t("contact.emailLabel")}</h4>
                  <a
                    href="mailto:derickbesssa12@gmail.com"
                    className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300 block"
                  >
                    derickbesssa12@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex-1 flex items-center space-x-4 p-6 border border-text-secondary-foreground rounded-lg group hover:shadow-md transition-all duration-300">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center w-full">
                  <h4 className="font-medium">{t("contact.phoneLabel")}</h4>
                  <a
                    href="https://wa.me/5585987588044?text=Hi%21%20I%20liked%20your%20portfolio%20and%20I%27m%20curious%20to%20learn%20more%20about%20your%20work%21"
                    className="text-muted-foreground hover:text-primary hover:underline transition-all duration-300 block"
                  >
                    +55 (85) 9-8758-8044
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex-1 flex items-center space-x-4 p-6 border border-text-secondary-foreground rounded-lg group hover:shadow-md transition-all duration-300">
                <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center w-full">
                  <h4 className="font-medium">{t("contact.locationLabel")}</h4>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 block cursor-default">
                    {t("contact.locationValue")}
                  </span>
                </div>
              </div>
            </div>


            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">{t("contact.socialTitle")}</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/derickbessa/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-6 w-6 text-primary hover:text-secondary-foreground transition-colors"/>
                </a>
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                <a href="https://www.instagram.com/_dbessa/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-6 w-6 text-primary hover:text-secondary-foreground transition-colors"/>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};