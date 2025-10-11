import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  "Salesforce", "Zendesk", "HubSpot", "Twilio", "Amazon Connect", 
  "Microsoft Teams", "Slack", "ServiceNow", "Genesys", "Five9"
];

const Integration = () => {
  return (
    <section id="integration" className="py-24 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seamless Integration With
            <br />
            <span className="gradient-text">Your Existing Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with your favorite tools and platforms in minutes. Our agents work within your systems, not against them.
          </p>
          
          <div className="glass-card p-8 rounded-2xl border border-border/50 mb-12">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-muted/50 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Trusted by 350+ enterprises worldwide
            </p>
            <Button size="lg" className="glow-effect-cyan group">
              View All Integrations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
