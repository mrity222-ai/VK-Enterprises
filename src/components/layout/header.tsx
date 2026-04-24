'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:tracking-wide',
          'pb-1 bg-gradient-to-r from-primary to-primary bg-no-repeat bg-left-bottom bg-[length:0%_1px]',
          'hover:bg-[length:100%_1px]',
          isActive && 'text-primary font-semibold bg-[length:100%_1px]'
        )}
      >
        {label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          'text-base font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground/80'
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isMounted && isScrolled ? 'border-b border-border bg-background/80 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/team/logo.png" alt="VK Enterprises Logo" width={40} height={40} priority />
          <span className={cn(
            "font-headline text-xl font-bold text-foreground"
            )}>
            VK Enterprises
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn('text-foreground')}
              >
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full bg-background sm:w-[320px]">
               <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <Link
                  href="/"
                  className="mb-8 flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image src="/team/logo.png" alt="VK Enterprises Logo" width={40} height={40} />
                  <span className="font-headline text-lg font-bold">
                    VK Enterprises
                  </span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <MobileNavLink key={item.href} {...item} />
                  ))}
                  <div className="mt-6 flex flex-col gap-4">
                    <Button asChild>
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact us</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
