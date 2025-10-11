import { Mic, Brain, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "Advanced Speech-to-Text",
    description: "Handles accents, noise, and interruptions with precision. Reliably captures names, numbers, dates, and critical information optimized for real-world conversations.",
    gradient: "from-primary to-primary-glow",
  },
  {
    icon: Brain,
    title: "Intelligent Understanding",
    description: "Interprets emotions, disfluencies, and context with accurate voice and turn detection. Extract meaningful information even in challenging acoustic conditions.",
    gradient: "from-secondary to-secondary-glow",
  },
  {
    icon: MessageSquare,
    title: "Natural Text-to-Speech",
    description: "Human-like tone, flow, and emphasis that correctly pronounces acronyms and branded terms. Fine-tuned to eliminate overtalk and interruptions.",
    gradient: "from-primary-glow to-secondary",
  },
  {
    icon: Zap,
    title: "Task-Specific AI",
    description: "Purpose-built LLMs for specific tasks ensuring accurate execution. Reinforcement learning for better outcomes and complex multi-step reasoning.",
    gradient: "from-secondary-glow to-accent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Voice Technology That
            <span className="gradient-text"> Sets Us Apart</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on cutting-edge AI that understands context, emotion, and intent
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                  <feature.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
