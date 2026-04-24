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

function useCountUp(end: number, duration: number, start = 0) {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + (end - start) * easeOutProgress;
      setCount(currentCount > end ? end : currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, start, totalFrames, frameRate]);

  return count;
}

function AnimatedStat({ stat, variant = 'light' }: { stat: Stat; variant?: 'light' | 'dark' }) {
  const count = useCountUp(stat.value, 2000);
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

function PlaceholderStatCard({ stat, variant = 'light' }: { stat: Stat; variant?: 'light' | 'dark' }) {
    const Icon = stat.icon ? iconMap[stat.icon] : null;
    const isDark = variant === 'dark';
    return (
        <Card className={cn("text-center", isDark ? "bg-white/5 border-white/10 text-white" : "bg-card")}>
            <CardHeader className="items-center pb-2">
                {Icon && <Icon className={cn("h-10 w-10", isDark ? "text-green-400" : "text-primary")} />}
            </CardHeader>
            <CardContent>
                 <p className={cn("font-headline text-5xl font-bold tracking-tighter", isDark ? "text-white" : "text-primary")}>
                    {stat.prefix || ''}0{stat.suffix || ''}
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
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("grid grid-cols-2 gap-8 md:grid-cols-4", className)}
    >
      {stats.map((stat) => (
        isInView ? <AnimatedStat key={stat.label} stat={stat} variant={variant} /> : <PlaceholderStatCard key={stat.label} stat={stat} variant={variant} />
      ))}
    </div>
  );
}
