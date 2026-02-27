import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-25 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              AI Engineer & Fullstack Developer
            </h3>

            <p className="text-muted-foreground">
              With over 1 year of experience in Artificial Intelligence and fullstack development,
              I specialize in building scalable applications and intelligent systems using modern technologies.
              I work across both areas independently and combine them when needed to build innovative solutions.
            </p>

            <p className="text-muted-foreground">
              I'm driven by curiosity and a constant desire to improve.
              I actively explore new technologies and approaches to keep evolving
              in AI and modern software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                <a href="#contact" className="cosmic-button">
                    Get In Touch
                </a>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center mb-4">
                    {/* Botão para CV PT-BR */}
                    <a 
                        href="https://cv-resumes.vercel.app/BR/resume-ptbr.html" 
                        target="_blank" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                        Check CV (PT-BR)
                    </a>

                    {/* Botão para CV English */}
                    <a 
                        href="https://cv-resumes.vercel.app/english/resume.html" 
                        target="_blank" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                        Check CV (EN)
                    </a>
                </div>
            </div>
          </div>
         <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">
                            AI & Fullstack Development
                        </h4>
                        <p className="text-muted-foreground">
                            Transforming data and computer vision into
                            fully integrated, end-to-end solutions.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">
                            UI/UX Design
                        </h4>
                        <p className="text-muted-foreground">
                            Designing simple and intuitive interfaces
                            that make complex systems easy to use.
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                     <div className="text-left">
                        <h4 className="font-semibold text-lg">
                            Modern Tech Stack
                        </h4>
                        <p className="text-muted-foreground">
                            Always adopting modern technologies and best practices
                            to deliver high-quality and future-proof solutions.
                        </p>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};