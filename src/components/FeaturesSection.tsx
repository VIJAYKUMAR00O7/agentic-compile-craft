
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Book, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Smart Code Analysis",
    description: "Our AI analyzes your code in real-time, understanding semantics beyond syntax to provide intelligent optimizations.",
    icon: <Search className="h-10 w-10 text-primary" />,
  },
  {
    title: "Automatic Performance Tuning",
    description: "Identifies bottlenecks and suggests performance improvements with one-click implementation.",
    icon: <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: "Context-Aware Recommendations",
    description: "Suggests compiler optimizations based on your specific project requirements and coding patterns.",
    icon: <Book className="h-10 w-10 text-primary" />,
  },
  {
    title: "Cross-Platform Support",
    description: "Works seamlessly across different compilers and languages including C++, Rust, Go, and more.",
    icon: <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: "Intelligent Error Prevention",
    description: "Predicts potential runtime errors and suggests fixes before compilation, saving debugging time.",
    icon: <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>,
  },
  {
    title: "Seamless VS Code Integration",
    description: "Integrates directly into your development workflow with minimal setup and configuration required.",
    icon: <svg className="h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Supercharge Your Compiler</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our extension brings the power of AI to your compiler, making it smarter, faster, and more intuitive.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
