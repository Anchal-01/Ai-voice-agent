import { Card, CardContent } from "@/components/ui/card";
import { Shield, Globe, Workflow, TrendingUp } from "lucide-react";

const Technology = () => {
  return (
    <section id="technology" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for
                <span className="gradient-text"> Enterprise Scale</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our AI voice agents integrate seamlessly into your existing tech stack, replacing legacy IVRs and connecting with your CRM, helpdesk, and communication platforms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">10M+</div>
                  <div className="text-sm text-muted-foreground">Calls Handled</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold mb-2">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">
                    SOC 2 Type II certified with end-to-end encryption
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-border/50 mt-8">
                <CardContent className="p-6">
                  <Globe className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="font-bold mb-2">Global Coverage</h3>
                  <p className="text-sm text-muted-foreground">
                    25+ languages with cultural adaptation
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <Workflow className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold mb-2">Easy Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect via API in minutes, not months
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-border/50 mt-8">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary-glow mb-4" />
                  <h3 className="font-bold mb-2">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    AI that improves with every interaction
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
