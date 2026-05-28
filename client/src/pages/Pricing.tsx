import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Pricing Page - Subscription plans
 * Design: Vibrant Gradient Maximalism
 * - Three pricing tiers
 * - Feature comparison
 * - Highlighted "Most Popular" plan
 */

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for solo travelers and small groups',
      features: [
        'Up to 5 trips per year',
        'Basic itinerary planning',
        'Up to 4 travelers',
        'Email support',
        'Standard recommendations',
        'Basic budget tracking',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for frequent travelers and families',
      features: [
        'Unlimited trips',
        'Advanced AI planning',
        'Up to 10 travelers',
        'Priority email support',
        'Personalized recommendations',
        'Advanced budget tracking',
        'Expense splitting',
        'Collaborative planning',
        'Mobile app access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Family',
      price: '$19.99',
      period: '/month',
      description: 'For families and large groups',
      features: [
        'Everything in Pro',
        'Up to 20 travelers',
        'Phone & email support',
        'Group voting system',
        'Advanced accessibility options',
        'Weather alerts',
        'Real-time collaboration',
        'Priority booking assistance',
        'Custom itinerary templates',
        'Family calendar sync',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! You can cancel your subscription at any time without any penalties or hidden fees.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, Pro and Family plans come with a 14-day free trial. No credit card required.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay for your convenience.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan anytime, and we\'ll prorate your billing accordingly.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-blue-50/50 dark:from-purple-950/20 dark:via-slate-950 dark:to-blue-950/20">
      <Header />

      <section className="container py-12 md:py-20">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-foreground/60">
            Choose the perfect plan for your travel needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 glass-card border-2 border-purple-400 dark:border-purple-500 shadow-2xl'
                  : 'glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 text-center font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.highlighted ? 'pt-16' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-foreground/60 ml-2">{plan.period}</span>
                </div>

                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? 'btn-gradient'
                      : 'border-2 border-purple-300 dark:border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-2xl px-8 py-3 font-semibold transition-all duration-300'
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold gradient-text mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="max-w-2xl mx-auto text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Start Planning?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Join thousands of travelers using TripMind AI to create perfect group trips.
          </p>
          <Button className="btn-gradient flex items-center gap-2 mx-auto">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
