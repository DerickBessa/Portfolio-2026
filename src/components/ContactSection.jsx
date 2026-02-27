import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {``

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project or idea in mind? Feel free to reach out! I’m always open to discussing new opportunities.
        </p>

        <div className=" md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

           <div className="flex flex-col items-center space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                    <h4 className="font-medium">Email</h4>
                    <a
                        href="mailto:derickbesssa12@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        derickbesssa12@gmail.com
                    </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/20">
                    <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                    <h4 className="font-medium">Phone</h4>
                    <a
                        href="https://wa.me/5585987588044?text=Hi%21%20I%20liked%20your%20portfolio%20and%20I%27m%20curious%20to%20learn%20more%20about%20your%20work%21"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        +55 (85) 9-8758-8044
                    </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-primary/20">
                    <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                    <h4 className="font-medium">Location</h4>
                    <span className="text-muted-foreground">Fortaleza, CE, Brazil</span>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/derickbessa/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-6 w-6 text-primary hover:text-secondary-foreground transition-colors"/>
                </a>
                <a href="https://www.instagram.com/_dbessa/" target="_blank" rel="noreferrer">
                  <Instagram className="h-6 w-6 text-primary hover:text-secondary-foreground transition-colors"/>
                </a>
              </div>
            </div>
          </div>

          {/* Send a Message Form */}
        </div>
      </div>
    </section>
  );
};