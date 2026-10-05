import { AnimatedIcon } from "../animated-icon";

export function AnimatedArrowRight({ className, size = 16 }: { className?: string; size?: number }) {
  return <AnimatedIcon name="arrow-right" size={size} className={className} />;
}

export function AnimatedSend({ className, size = 16 }: { className?: string; size?: number }) {
  return <AnimatedIcon name="send" size={size} className={className} />;
}

export function AnimatedMail({ className, size = 16 }: { className?: string; size?: number }) {
  return <AnimatedIcon name="mail" size={size} className={className} />;
}

export function AnimatedMessageSquare({ className, size = 16 }: { className?: string; size?: number }) {
  return <AnimatedIcon name="message-square" size={size} className={className} />;
}

export function AnimatedX({ className, size = 16 }: { className?: string; size?: number }) {
  return <AnimatedIcon name="x" size={size} className={className} />;
}
