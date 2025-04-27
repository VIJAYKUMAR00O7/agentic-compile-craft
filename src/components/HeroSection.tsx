
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-grid">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      
      {/* Animated gradient blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="glow">Agentic Intelligence</span> for Your <span className="code-gradient">Compiler</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enhance your VS Code with AI-powered compilation capabilities that understand your code, optimize performance, and fix errors before they happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground">
              Download Extension
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>

          {/* Code preview */}
          <div className="mt-12 text-left bg-secondary p-4 rounded-lg shadow-lg border border-border font-mono relative overflow-hidden">
            <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2">compiler-suggestion.ts</span>
            </div>
            <div className="overflow-hidden">
              <pre className="text-xs md:text-sm text-muted-foreground">
                <code>
                  <span className="text-blue-400">function</span> <span className="text-green-400">calculateTotal</span>(<span className="text-yellow-400">items: Array&lt;Item&gt;</span>) {"{"}
                  <br/>
                  {"  "}
                  <span className="relative px-1 highlight-gradient animate-pulse">{"//"} <span className="text-accent">AgentCompile: This loop can be optimized with reduce()</span></span>
                  <br/>
                  {"  "}<span className="text-blue-400">let</span> total = <span className="text-purple-400">0</span>;
                  <br/>
                  {"  "}<span className="text-blue-400">for</span> (<span className="text-blue-400">let</span> i = <span className="text-purple-400">0</span>; i {"<"} items.length; i++) {"{"}
                  <br/>
                  {"    "}total += items[i].price * items[i].quantity;
                  <br/>
                  {"  "}
                  {"}"}
                  <br/>
                  {"  "}<span className="text-blue-400">return</span> total;
                  <br/>
                  {"}"}
                </code>
              </pre>
            </div>
            <div className="absolute bottom-4 right-4 bg-primary rounded-full h-8 w-8 flex items-center justify-center shadow-lg animate-glow">
              <svg className="h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M12 8v-2"></path>
                <path d="M12 18v-2"></path>
                <path d="M8 12h-2"></path>
                <path d="M18 12h-2"></path>
              </svg>
            </div>
          </div>

          {/* Tech tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">VS Code</span>
            <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">TypeScript</span>
            <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">LLVM</span>
            <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">AI-powered</span>
            <span className="px-3 py-1 bg-secondary text-xs rounded-full text-muted-foreground">Optimizing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
