import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

/**
 * Footer Component - TripMind AI
 * Design: Vibrant Gradient Maximalism
 * - Clean, organized footer with multiple sections
 * - Social links and contact information
 * - Gradient accent line
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Security', href: '#' },
        { label: 'Roadmap', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'License', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-white dark:bg-white/5 border-t border-purple-200/50 dark:border-purple-500/20 mt-20">
      {/* Gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"></div>

      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg">
                <span className="text-white font-bold">✨</span>
              </div>
              <span className="font-bold text-lg gradient-text">TripMind</span>
            </Link>
            <p className="text-sm text-foreground/60 mb-4">
              Intelligent group travel planning powered by AI. Plan trips that fit everyone.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/20 text-foreground/60 hover:text-purple-600 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-200 dark:via-purple-500/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} TripMind AI. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60">
            Made with <span className="text-pink-500">❤️</span> for travelers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
