import { CONTACT_STEPS } from "@/lib/content/contact";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { FileCheckIcon } from "@animateicons/react/lucide/file-check-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactProcess() {
  return (
    <Card className="flex flex-col gap-6 bg-transparent border-none shadow-none p-0 text-left">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="outline" size="lg">
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
            Expectations
          </Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl">What Happens Next?</CardTitle>
        <CardDescription>
          A clear execution framework from intake to launch.
        </CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        {CONTACT_STEPS.map((step) => (
          <div key={step.number} className="flex items-start gap-4 group">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
              {step.number}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-foreground font-satoshi">
                  {step.title}
                </h4>
                <Badge variant="default" size="sm" className="font-mono">
                  {step.time}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex-col items-start gap-4 pt-6">
        <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">
          Enterprise Commitments
        </span>
        <div className="flex flex-col gap-2 w-full text-xs text-muted-foreground">
          <div className="flex items-start gap-2">
            <ShieldCheckIcon size={16} className="text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">NDA Ready:</strong> Complete confidentiality.</span>
          </div>
          <div className="flex items-start gap-2">
            <FileCheckIcon size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <span><strong className="text-foreground">IP Transfer:</strong> Full repository ownership.</span>
          </div>
          <div className="flex items-start gap-2">
            <CodeIcon size={16} className="text-primary/80 shrink-0 mt-0.5" />
            <span><strong className="text-foreground">No Lock-in:</strong> Clean, maintainable code.</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
