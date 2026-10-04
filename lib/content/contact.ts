export interface ContactStep {
  number: string;
  title: string;
  time: string;
  description: string;
}

export const CONTACT_STEPS: ContactStep[] = [
  {
    number: "01",
    title: "Scoping & Review",
    time: "24 Hours",
    description: "We review your requirements to evaluate feasibility.",
  },
  {
    number: "02",
    title: "Roadmap Session",
    time: "30-Min Call",
    description: "Direct alignment on milestones with an architect.",
  },
  {
    number: "03",
    title: "Proposal",
    time: "48 Hours",
    description: "Receive a statement of work with exact deliverables.",
  },
];


export const CONTACT_SECTION_CONTENT = {
  badge: "Technical Scoping Engine",
  titleLine1: "Start a Technical",
  titleLine2: "Conversation.",
  description: "Tell us about your product goals, architectural constraints, or target timeline. Receive a structured technical assessment within 24 hours.",
};
