import { Card, CardContent } from "@/components/ui/card";
import { Phone, ShoppingCart, Calendar, Headphones } from "lucide-react";

const useCases = [
  {
    icon: Phone,
    title: "Customer Support",
    description: "Handle inquiries, troubleshoot issues, and resolve customer concerns with empathy and accuracy.",
    stats: "85% reduction in wait times",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Lead Qualification",
    description: "Engage prospects, qualify leads, and schedule appointments with natural conversation flow.",
    stats: "3x increase in conversion rates",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Manage calendars, book appointments, and send reminders across multiple time zones.",
    stats: "90% booking accuracy",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Provide step-by-step troubleshooting and escalate complex issues to human experts seamlessly.",
    stats: "70% first-call resolution",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Use Cases</span>
            <br />
            Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From healthcare to finance, transform your operations with AI voice agents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="glass-card border-border/50 hover:border-secondary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform">
                  <useCase.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {useCase.description}
                </p>
                <div className="text-sm font-semibold text-secondary">
                  {useCase.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
