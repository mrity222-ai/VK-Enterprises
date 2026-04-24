
import { cn } from "@/lib/utils";

export function WindoreLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
      aria-label="Windore Logo"
    >
      <path
        d="M10 80 L30 20 L50 60 L70 20 L90 80"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VKEcoFlowLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
      aria-label="VK Enterprises Logo"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M50 10 A40 40 0 0 1 50 90 A20 20 0 0 1 50 50"
        fill="url(#grad1)"
      />
      <path
        d="M50 10 A40 40 0 0 0 50 90 A20 20 0 0 0 50 50"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
