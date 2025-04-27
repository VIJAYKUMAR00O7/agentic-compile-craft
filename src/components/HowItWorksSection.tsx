
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Install the Extension",
    description: "Add AgentCompile to VS Code with a single click from the marketplace."
  },
  {
    number: "02",
    title: "Code as Usual",
    description: "Continue your regular development workflow without interruption."
  },
  {
    number: "03",
    title: "Receive Smart Suggestions",
    description: "Get real-time optimization recommendations as you code."
  },
  {
    number: "04",
    title: "Apply Compiler Optimizations",
    description: "Implement suggested changes with a single click or customize as needed."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-muted/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered compiler extension seamlessly integrates into your development workflow
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute hidden md:block left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
                  <span className="inline-block text-5xl font-bold code-gradient mb-2">{step.number}</span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="w-full md:w-1/2">
                  <Card className="bg-card border border-border overflow-hidden shadow-lg">
                    <CardContent className="p-0">
                      <div className="bg-muted p-4 h-48 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl mb-2 text-primary opacity-70">→</div>
                          <p className="text-muted-foreground text-sm">{step.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
