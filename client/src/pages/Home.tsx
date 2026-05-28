import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Zap, Brain, MapPin, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Home Page - TripMind AI Landing Page
 * Design: Vibrant Gradient Maximalism
 * - Hero section with gradient background and animated visuals
 * - Feature highlights with icons
 * - Testimonials section
 * - Statistics section
 * - Call-to-action sections
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Smart algorithms that understand group dynamics and create perfect itineraries for everyone.',
    },
    {
      icon: Users,
      title: 'Group Optimization',
      description: 'Balance interests, budgets, and accessibility needs for families, friends, couples, and teams.',
    },
    {
      icon: MapPin,
      title: 'Smart Destinations',
      description: 'Discover hidden gems and popular spots tailored to your group\'s preferences and travel style.',
    },
    {
      icon: DollarSign,
      title: 'Budget Management',
      description: 'Track expenses, split costs fairly, and stay within budget with intelligent recommendations.',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Weather alerts, price changes, and activity recommendations updated in real-time.',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Plan trips anywhere in the world with local insights and cultural recommendations.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Family Planner',
      content: 'TripMind AI made planning our family vacation so easy! It considered everyone\'s interests and accessibility needs.',
      avatar: '👩‍👧‍👦',
    },
    {
      name: 'Marcus Chen',
      role: 'Adventure Enthusiast',
      content: 'The AI understood exactly what we wanted. Our group trip was perfectly balanced between adventure and relaxation.',
      avatar: '🧗',
    },
    {
      name: 'Emma Williams',
      role: 'Budget Traveler',
      content: 'Saved so much money with the smart budget recommendations. Best travel planning tool ever!',
      avatar: '💰',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Happy Travelers' },
    { number: '150+', label: 'Destinations' },
    { number: '10M+', label: 'Plans Created' },
    { number: '4.9★', label: 'User Rating' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-blue-50/50 dark:from-purple-950/20 dark:via-slate-950 dark:to-blue-950/20">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-blob"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Plan Trips That Actually Fit Everyone
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
              AI-powered group travel planning that balances everyone's interests, budgets, and needs. Create perfect itineraries in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                className="btn-gradient"
                onClick={() => window.location.href = '/planner'}
              >
                Start Planning <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-purple-300 dark:border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-2xl px-8 py-3 font-semibold transition-all duration-300"
                onClick={() => alert('Demo video coming soon!')}
              >
                Watch Demo
              </Button>
            </div>

            {/* Hero Image */}
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663694202501/CVtGckD3cMmSVRagDLKmmh/travel-planning-abstract-53egoJV9LSfVLxBDguKDoA.webp"
                alt="Travel Planning Dashboard"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white/50 dark:bg-white/5 border-y border-purple-200/50 dark:border-purple-500/20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Powerful Features for Every Traveler
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to plan the perfect group trip, from AI recommendations to budget tracking.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="glass-card hover-lift"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/60">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-20 md:py-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            See what our users have to say about their TripMind AI experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="gradient-card hover-lift"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-foreground/70">"{testimonial.content}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10 dark:from-purple-600/20 dark:via-pink-500/20 dark:to-blue-500/20"></div>
        
        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Ready to Plan Your Perfect Trip?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Join thousands of travelers using TripMind AI to create unforgettable group experiences.
            </p>
            <Button 
              className="btn-gradient"
              onClick={() => window.location.href = '/planner'}
            >
              Start Planning Now <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
