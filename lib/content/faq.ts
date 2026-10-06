import { ActivityIcon } from "@animateicons/react/lucide/activity-icon";
import { MedalIcon } from "@animateicons/react/lucide/medal-icon";
import { CalendarIcon } from "@animateicons/react/lucide/calendar-icon";
import { CircleCheckIcon } from "@animateicons/react/lucide/circle-check-icon";
import { ClockIcon } from "@animateicons/react/lucide/clock-icon";
import { CodeIcon } from "@animateicons/react/lucide/code-icon";
import { FileTextIcon } from "@animateicons/react/lucide/file-text-icon";
import { FolderOpenIcon } from "@animateicons/react/lucide/folder-open-icon";
import { MapIcon } from "@animateicons/react/lucide/map-icon";
import { RefreshCwIcon } from "@animateicons/react/lucide/refresh-cw-icon";
import { ShieldCheckIcon } from "@animateicons/react/lucide/shield-check-icon";
import { ThumbsUpIcon } from "@animateicons/react/lucide/thumbs-up-icon";
import { TimerIcon } from "@animateicons/react/lucide/timer-icon";
import { LockOpenIcon } from "@animateicons/react/lucide/lock-open-icon";
import { UserCheckIcon } from "@animateicons/react/lucide/user-check-icon";
import { UsersIcon } from "@animateicons/react/lucide/users-icon";
import { WrenchIcon } from "@animateicons/react/lucide/wrench-icon";
import { ZapIcon } from "@animateicons/react/lucide/zap-icon";
import { FAQItem } from "@/types/faq";

export const FAQS: FAQItem[] = [
  {
    id: "faq-pricing",
    num: "01",
    category: "PROJECT & SCOPE",
    icon: FolderOpenIcon,
    question: "How do you scope and price a project?",
    answer:
      "We scope every project individually based on your technical complexity, deliverable milestones, and dedicated team or part-time model. You'll receive a clear, transparent quote and timeline before we begin, along with a detailed proposal.",
    highlights: [
      { text: "Clear Milestones", icon: CircleCheckIcon },
      { text: "Transparent Pricing", icon: CalendarIcon },
      { text: "Detailed Proposal", icon: FileTextIcon },
    ],
  },
  {
    id: "faq-timeline",
    num: "02",
    category: "DELIVERY & TIMELINE",
    icon: ClockIcon,
    question: "How long does a typical build take from kickoff to launch?",
    answer:
      "A focused, production-ready MVP typically ships in 6–10 weeks. Comprehensive platforms or complex multi-tenant systems take 3–5 months. We set realistic sprint roadmaps during discovery and ship testable preview builds every single week so you see continuous progress.",
    highlights: [
      { text: "6–10 Week MVP", icon: ZapIcon },
      { text: "Weekly Previews", icon: RefreshCwIcon },
      { text: "Agile Sprints", icon: ActivityIcon },
    ],
  },
  {
    id: "faq-ownership",
    num: "03",
    category: "CODE & IP OWNERSHIP",
    icon: CodeIcon,
    question: "Will we own 100% of the code and intellectual property?",
    answer:
      "Absolutely. Every line of clean code, architecture diagram, design system token, cloud infrastructure script, and asset belongs entirely to your company upon milestone completion. We retain zero rights, zero royalties, and zero proprietary lock-in.",
    highlights: [
      { text: "100% Ownership", icon: ShieldCheckIcon },
      { text: "Full Source Code", icon: CodeIcon },
      { text: "No Vendor Lock-in", icon: LockOpenIcon },
    ],
  },
  {
    id: "faq-support",
    num: "04",
    category: "SUPPORT & MAINTENANCE",
    icon: WrenchIcon,
    question: "What happens after launch? Do you provide ongoing maintenance?",
    answer:
      "Every project includes a 30-day post-launch warranty with dedicated bug fixing and telemetry monitoring at zero extra cost. Following that, we offer flexible retainers for continuous feature iterations, DevOps scaling, and guaranteed SLA response times.",
    highlights: [
      { text: "30-Day Warranty", icon: MedalIcon },
      { text: "Proactive Monitoring", icon: ActivityIcon },
      { text: "Guaranteed SLA", icon: ThumbsUpIcon },
    ],
  },
  {
    id: "faq-kickoff",
    num: "05",
    category: "TEAM & COLLABORATION",
    icon: UsersIcon,
    question: "How closely can we get started, and what does onboarding look like?",
    answer:
      "Click 'Start a project' or brief us with your vision. Within 48 hours, our technical architects schedule a discovery call to understand your business goals, evaluate feasibility, and deliver a comprehensive technical roadmap and proposal.",
    highlights: [
      { text: "48-Hour Kickoff", icon: TimerIcon },
      { text: "Expert Architects", icon: UserCheckIcon },
      { text: "Technical Roadmap", icon: MapIcon },
    ],
  },
];

import { FAQSectionContent } from "@/types/faq";

export const FAQ_SECTION_CONTENT: FAQSectionContent = {
  eyebrow: "FAQ",
  titleLine1: "Frequently Asked",
  titleLine2: "",
  highlightedText: "Questions.",
  description: "Honest answers to common questions founders and teams ask before building with us.",
};
