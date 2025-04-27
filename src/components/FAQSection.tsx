
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does AgentCompile work with my existing codebase?",
    answer: "AgentCompile seamlessly integrates with your existing codebase by analyzing your code in real-time. It doesn't require any code changes to start working - simply install the VS Code extension and it will begin providing optimization suggestions based on your specific code patterns and project structure."
  },
  {
    question: "What programming languages are supported?",
    answer: "Currently, AgentCompile supports C, C++, Rust, Go, and TypeScript/JavaScript. We're actively working on adding support for Python, Java, and C# in the near future. Our roadmap includes plans to support most major programming languages by the end of the year."
  },
  {
    question: "Is my code data kept private and secure?",
    answer: "Absolutely. We take security and privacy very seriously. AgentCompile processes your code locally on your machine whenever possible. When cloud processing is needed for advanced features, we use encrypted connections and never store your full source code. You can also configure privacy settings to control what data is sent to our servers."
  },
  {
    question: "Can AgentCompile work with custom compilers?",
    answer: "Yes, AgentCompile is designed to work with a wide range of compilers, including custom ones. The Pro and Enterprise plans include features for configuring custom compiler rules and integrations. If you have specific requirements, please contact our support team."
  },
  {
    question: "How often do you release updates?",
    answer: "We release feature updates monthly and bug fixes as needed. Pro and Enterprise subscribers receive priority access to new features and updates. Our roadmap is publicly available, and we welcome feature requests from our community."
  },
  {
    question: "Do you offer educational discounts?",
    answer: "Yes, we offer significant discounts for educational institutions, teachers, and students. Please contact us with your educational email address for verification to receive your discount code."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about AgentCompile
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
