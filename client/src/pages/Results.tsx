import { motion } from 'framer-motion';
import { Download, Share2, MapPin, Clock, DollarSign, Users, Utensils, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * AI Generated Results Page - Shows itinerary and recommendations
 * Design: Vibrant Gradient Maximalism
 * - Timeline view of activities
 * - Hotel and transport recommendations
 * - Budget breakdown
 * - Interactive cards
 */

export default function Results() {
  const itinerary = [
    {
      day: 1,
      title: 'Arrival & City Exploration',
      activities: [
        { time: '2:00 PM', activity: 'Arrive at airport', icon: '✈️' },
        { time: '4:00 PM', activity: 'Check into hotel', icon: '🏨' },
        { time: '6:00 PM', activity: 'Welcome dinner at local restaurant', icon: '🍽️' },
      ],
    },
    {
      day: 2,
      title: 'Cultural Immersion',
      activities: [
        { time: '9:00 AM', activity: 'Guided city tour (kid-friendly)', icon: '🏛️' },
        { time: '1:00 PM', activity: 'Lunch at traditional market', icon: '🥘' },
        { time: '3:00 PM', activity: 'Museum visit (accessible)', icon: '🎨' },
        { time: '7:00 PM', activity: 'Evening stroll & dinner', icon: '🌅' },
      ],
    },
    {
      day: 3,
      title: 'Adventure Day',
      activities: [
        { time: '8:00 AM', activity: 'Hiking excursion (moderate level)', icon: '🥾' },
        { time: '1:00 PM', activity: 'Picnic lunch with scenic views', icon: '🧺' },
        { time: '5:00 PM', activity: 'Return & relax at spa', icon: '💆' },
        { time: '8:00 PM', activity: 'Special dinner celebration', icon: '🎉' },
      ],
    },
  ];

  const hotels = [
    {
      name: 'Grand Plaza Hotel',
      rating: 4.8,
      price: '$120/night',
      features: ['Wheelchair accessible', 'Family rooms', 'Restaurant', 'Pool'],
      image: '🏨',
    },
    {
      name: 'Boutique Garden Inn',
      rating: 4.6,
      price: '$95/night',
      features: ['Quiet location', 'Breakfast included', 'Garden', 'Free parking'],
      image: '🏩',
    },
    {
      name: 'Budget Comfort Hotel',
      rating: 4.4,
      price: '$65/night',
      features: ['Central location', 'Budget-friendly', 'Clean rooms', 'WiFi'],
      image: '🏪',
    },
  ];

  const budget = [
    { category: 'Accommodation', amount: '$840', percentage: 35 },
    { category: 'Food & Dining', amount: '$480', percentage: 20 },
    { category: 'Activities', amount: '$600', percentage: 25 },
    { category: 'Transport', amount: '$240', percentage: 10 },
    { category: 'Miscellaneous', amount: '$240', percentage: 10 },
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
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Your Perfect Trip Awaits
          </h1>
          <p className="text-xl text-foreground/60 mb-6">
            AI-optimized 3-day itinerary for 4 travelers • Paris, France • June 15-18, 2024
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-gradient flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Itinerary
            </Button>
            <Button
              variant="outline"
              className="border-2 border-purple-300 dark:border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-2xl px-8 py-3 font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share with Group
            </Button>
          </div>
        </motion.div>

        {/* Itinerary Timeline */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Your 3-Day Itinerary</h2>
          <div className="space-y-8">
            {itinerary.map((day, dayIndex) => (
              <motion.div key={dayIndex} variants={itemVariants} className="glass-card p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {day.day}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{day.title}</h3>
                    <p className="text-foreground/60">Day {day.day}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {day.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-start gap-4 p-3 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors">
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold">{activity.activity}</div>
                        <div className="text-sm text-foreground/60">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hotel Recommendations */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Recommended Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <motion.div key={index} variants={itemVariants} className="gradient-card hover-lift">
                <div className="text-5xl mb-4">{hotel.image}</div>
                <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold">{hotel.rating}</span>
                  <span className="text-foreground/60">({Math.floor(Math.random() * 500 + 100)} reviews)</span>
                </div>
                <div className="text-2xl font-bold gradient-text mb-4">{hotel.price}</div>
                <ul className="space-y-2 mb-4">
                  {hotel.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-gradient text-sm">Book Now</Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Budget Breakdown */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Budget Breakdown</h2>
          <motion.div variants={itemVariants} className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Budget List */}
              <div className="space-y-4">
                {budget.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50/50 dark:hover:bg-purple-900/10 transition-colors">
                    <span className="font-semibold">{item.category}</span>
                    <span className="font-bold text-purple-600">{item.amount}</span>
                  </div>
                ))}
                <div className="border-t border-purple-200 dark:border-purple-500/20 pt-4 flex items-center justify-between">
                  <span className="font-bold text-lg">Total Budget</span>
                  <span className="text-2xl font-bold gradient-text">$2,400</span>
                </div>
              </div>

              {/* Budget Chart */}
              <div className="flex flex-col justify-center">
                <div className="space-y-3">
                  {budget.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold">{item.category}</span>
                        <span className="text-sm text-foreground/60">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Activity Recommendations */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Activity Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🎭', title: 'Theater Show', desc: 'Evening performance (family-friendly)', rating: 4.7 },
              { icon: '🍷', title: 'Wine Tasting', desc: 'Local vineyard tour with lunch', rating: 4.9 },
              { icon: '🚴', title: 'Bike Tour', desc: 'Scenic city cycling (moderate pace)', rating: 4.6 },
              { icon: '🏛️', title: 'Art Museum', desc: 'World-class collection (accessible)', rating: 4.8 },
            ].map((activity, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card p-6 hover-lift">
                <div className="text-4xl mb-3">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-foreground/60 mb-4">{activity.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-semibold">{activity.rating}</span>
                  </div>
                  <Button variant="outline" className="text-sm">Add to Plan</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Book Your Trip?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Share this itinerary with your group and start booking accommodations and activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gradient">Start Booking</Button>
            <Button variant="outline" className="border-2 border-purple-300 dark:border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-2xl px-8 py-3 font-semibold transition-all duration-300">
              Customize Itinerary
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
