import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header Component - Navigation bar for TripMind AI
 * Design: Vibrant Gradient Maximalism
 * - Clean, minimal header with gradient accent
 * - Responsive mobile menu
 * - Smooth transitions
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Planner', href: '/planner' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-white/10 backdrop-blur-md border-b border-purple-200/50 dark:border-purple-500/20">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl hover:opacity-80 transition-opacity">
          <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="gradient-text">TripMind</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 hover:text-foreground hover:text-purple-600 transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            className="btn-gradient"
            onClick={() => window.location.href = '/planner'}
          >
            Start Planning
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-200/50 dark:border-purple-500/20 bg-white/95 dark:bg-white/5 backdrop-blur-md">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/70 hover:text-purple-600 transition-colors py-2 block" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button 
              className="btn-gradient w-full mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/planner';
              }}
            >
              Start Planning
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
