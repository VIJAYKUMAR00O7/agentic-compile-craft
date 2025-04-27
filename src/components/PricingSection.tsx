
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Essential features for individual developers",
    features: [
      "Basic code analysis",
      "Performance suggestions",
      "VS Code integration",
      "Community support"
    ],
    cta: "Download Now",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "Advanced features for professional developers",
    features: [
      "All Free features",
      "Advanced AI optimization",
      "Custom compiler rules",
      "Priority updates",
      "Email support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for development teams",
    features: [
      "All Pro features",
      "Team management",
      "Custom integrations",
      "On-premise deployment",
      "SLA & dedicated support",
      "Training & onboarding"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that's right for you and start optimizing your code today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`flex ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
              <Card className={`w-full border ${plan.popular ? 'border-primary' : 'border-border'} flex flex-col`}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    {plan.price}
                    {plan.period && <span className="ml-1 text-2xl font-medium text-muted-foreground">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground mb-5">{plan.description}</CardDescription>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
