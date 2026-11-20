import { COMMON } from "./common";
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
import type { FAQItem, FAQSectionContent } from "@/types/faq";

// faq
export const FAQS: FAQItem[] = [
  {
    id: "faq-pricing",
    num: "01",
    category: "Project & scope",
    icon: FolderOpenIcon,
    question: "How do you scope and price a project?",
    answer:
      "We scope each project around its requirements, dependencies and review process. Before work begins, the proposal sets out the agreed deliverables, commercial terms and delivery plan.",
    highlights: [
      { text: "Clear Milestones", icon: CircleCheckIcon },
      { text: "Transparent Pricing", icon: CalendarIcon },
      { text: "Detailed Proposal", icon: FileTextIcon },
    ],
  },
  {
    id: "faq-timeline",
    num: "02",
    category: "Delivery & timeline",
    icon: ClockIcon,
    question: "How long does a typical build take from kickoff to launch?",
    answer:
      "Timing depends on scope, content readiness, integrations and review cycles. After discovery, we provide a phased delivery plan with milestones and an agreed preview cadence.",
    highlights: [
      { text: "Scoped Timeline", icon: ZapIcon },
      { text: "Agreed Previews", icon: RefreshCwIcon },
      { text: "Phased Delivery", icon: ActivityIcon },
    ],
  },
  {
    id: "faq-ownership",
    num: "03",
    category: "Code & project delivery",
    icon: CodeIcon,
    question: "Will our team receive the code and project deliverables?",
    answer:
      "The project agreement defines the repositories, documentation, design files and other deliverables included in handover. Ownership and usage rights account for third-party and open-source licence terms.",
    highlights: [
      { text: "Defined Handover", icon: ShieldCheckIcon },
      { text: "Agreed Source Files", icon: CodeIcon },
      { text: "Licence Clarity", icon: LockOpenIcon },
    ],
  },
  {
    id: "faq-support",
    num: "04",
    category: "Support & maintenance",
    icon: WrenchIcon,
    question: "What happens after launch? Do you provide ongoing maintenance?",
    answer:
      "Launch assistance, defect coverage and ongoing maintenance are defined in the project agreement or a separate support plan, including coverage, response expectations and included work.",
    highlights: [
      { text: "Agreed Launch Support", icon: MedalIcon },
      { text: "Optional Monitoring", icon: ActivityIcon },
      { text: COMMON.labels.guaranteedSla, icon: ThumbsUpIcon },
    ],
  },
  {
    id: "faq-kickoff",
    num: "05",
    category: "Team & collaboration",
    icon: UsersIcon,
    question: "How closely can we get started, and what does onboarding look like?",
    answer:
      "Send your brief through 'Start a project'. We review the requirements and follow up to arrange discovery where there is a fit; the next steps and any proposal depend on the project's scope.",
    highlights: [
      { text: "Brief Review", icon: TimerIcon },
      { text: "Direct Follow-up", icon: UserCheckIcon },
      { text: "Scoped Next Steps", icon: MapIcon },
    ],
  },
];

export const FAQ_SECTION_CONTENT: FAQSectionContent = {
  eyebrow: "FAQ",
  titleLine1: "Clear answers.",
  titleLine2: "",
  highlightedText: "Confident next steps.",
  description: "Honest answers to common questions founders and teams ask about our software engineering process, pricing, project handover, and timelines.",
};

// faq
export const FAQ_CONTACT_CARD_COPY = {
  characterAlt: "Technical Lead with laptop",
  stillHaveA: "Still have a",
  question: "question?",
  weReHereToHelp: "We're here to help",
  canTFindYourAnswer: "Can't find your answer?",
  talkToOurTeamAndGet: "Have a specific project in mind or need custom architecture advice? Talk directly with our engineering team to evaluate technical feasibility.",
  highlights: [
    "Technical feasibility & architecture assessment",
    "Sprint milestones & transparent project quote",
  ],
  responseTime: "Direct engineering response",
  faqTechnicalConsultation: "FAQ - Technical Consultation",
  talkToOurTeam: "Talk to our team",
  text100: "100%",
  honestAnswers: "Honest Answers",
  direct: COMMON.labels.direct,
  projectReview: "Engineer Review",
  zero: COMMON.labels.zero,
  salesPressure: "Sales Pressure",
} as const;
