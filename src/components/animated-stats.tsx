
'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Users, Building, Zap, HardHat, Award } from 'lucide-react';

const iconMap = {
  Users,
  Building,
  Zap,
  HardHat,
  Award,
};

type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: keyof typeof iconMap;
};

type AnimatedStatsProps = {
  stats: Stat[];
  className?: string;
  variant?: 'light' | 'dark';
};

function useCountUp(end: number, duration: number, start = 0, trigger: boolean) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + (end - start) * easeOutProgress;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, start, trigger]);

  return count;
}

function AnimatedStat({ stat, variant = 'light', trigger }: { stat: Stat; variant?: 'light' | 'dark'; trigger: boolean }) {
  const count = useCountUp(stat.value, 2000, 0, trigger);
  const displayValue = Math.round(count);
  const Icon = stat.icon ? iconMap[stat.icon] : null;
  const isDark = variant === 'dark';

  return (
    <Card className={cn(
      "text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50",
      isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-card"
    )}>
      <CardHeader className="items-center pb-2">
        {Icon && <Icon className={cn("h-10 w-10", isDark ? "text-green-400" : "text-primary")} />}
      </CardHeader>
      <CardContent>
        <p className={cn(
          "font-headline text-5xl font-bold tracking-tighter",
          isDark ? "text-white" : "text-primary"
        )}>
          {stat.prefix}{displayValue}{stat.suffix}
        </p>
        <p className={cn("mt-2 text-sm font-normal", isDark ? "text-slate-300" : "text-muted-foreground")}>
          {stat.label}
        </p>
      </CardContent>
    </Card>
  );
}

export function AnimatedStats({ stats, className, variant = 'light' }: AnimatedStatsProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Don't disconnect, so it can re-trigger if needed or simply stay in view
        }
      },
      { 
        threshold: 0.05, // Lower threshold for better mobile support
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 gap-8 md:grid-cols-4", className)}
    >
      {stats.map((stat) => (
        <AnimatedStat key={stat.label} stat={stat} variant={variant} trigger={isInView} />
      ))}
    </div>
  );
}
