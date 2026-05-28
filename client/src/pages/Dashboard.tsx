import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, DollarSign, Edit2, Share2, Trash2, Plus, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Dashboard Page - User's saved trips and recommendations
 * Design: Vibrant Gradient Maximalism
 * - Saved trips list
 * - Upcoming trips
 * - Budget tracker
 * - AI recommendations
 */

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingTrips = [
    {
      id: 1,
      name: 'Paris Summer Getaway',
      destination: 'Paris, France',
      dates: 'June 15-22, 2024',
      travelers: 4,
      budget: '$2,400',
      spent: '$1,200',
      image: '🗼',
      status: 'booked',
    },
    {
      id: 2,
      name: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      dates: 'August 1-10, 2024',
      travelers: 3,
      budget: '$3,000',
      spent: '$500',
      image: '🗾',
      status: 'planning',
    },
  ];

  const savedTrips = [
    {
      id: 3,
      name: 'Bali Relaxation',
      destination: 'Bali, Indonesia',
      dates: 'Not scheduled',
      travelers: 2,
      budget: '$1,800',
      image: '🏝️',
      saved: '2 weeks ago',
    },
    {
      id: 4,
      name: 'New York City',
      destination: 'New York, USA',
      dates: 'Not scheduled',
      travelers: 5,
      budget: '$2,200',
      image: '🗽',
      saved: '1 month ago',
    },
    {
      id: 5,
      name: 'Barcelona Beach',
      destination: 'Barcelona, Spain',
      dates: 'Not scheduled',
      travelers: 3,
      budget: '$1,600',
      image: '🏖️',
      saved: '3 weeks ago',
    },
  ];

  const recommendations = [
    {
      title: 'Best Time to Visit Tokyo',
      description: 'Spring (March-May) offers perfect weather and cherry blossoms. Book flights 2 months in advance for better prices.',
      icon: '📅',
    },
    {
      title: 'Save on Paris Accommodation',
      description: 'Consider staying in the Marais district. It\'s cheaper than central areas but still walkable to major attractions.',
      icon: '💰',
    },
    {
      title: 'Group Discount Alert',
      description: 'Your Bali trip group is eligible for a 15% discount on hotel bookings through our partner network.',
      icon: '🎉',
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
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            My Trips
          </h1>
          <p className="text-xl text-foreground/60 mb-6">
            Manage your saved trips, upcoming adventures, and get personalized recommendations.
          </p>
          <Button className="btn-gradient flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Plan New Trip
          </Button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex gap-4 border-b border-purple-200 dark:border-purple-500/20">
            {[
              { id: 'upcoming', label: 'Upcoming Trips', count: 2 },
              { id: 'saved', label: 'Saved Trips', count: 3 },
              { id: 'recommendations', label: 'Recommendations', count: 3 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold border-b-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                    : 'border-transparent text-foreground/60 hover:text-foreground'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Trips */}
        {activeTab === 'upcoming' && (
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              {upcomingTrips.map((trip) => (
                <motion.div
                  key={trip.id}
                  variants={itemVariants}
                  className="glass-card p-6 hover-lift"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="md:w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-300 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl">{trip.image}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{trip.name}</h3>
                          <div className="flex items-center gap-2 text-foreground/60 mb-3">
                            <MapPin className="w-4 h-4" />
                            {trip.destination}
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          trip.status === 'booked'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        }`}>
                          {trip.status === 'booked' ? '✓ Booked' : '📋 Planning'}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-foreground/60">Dates</div>
                          <div className="font-semibold flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {trip.dates}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-foreground/60">Travelers</div>
                          <div className="font-semibold flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {trip.travelers}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-foreground/60">Budget</div>
                          <div className="font-semibold flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {trip.budget}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-foreground/60">Spent</div>
                          <div className="font-semibold text-purple-600">{trip.spent}</div>
                        </div>
                      </div>

                      {/* Budget Progress */}
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-foreground/60">Budget Progress</span>
                          <span className="font-semibold">50% spent</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button variant="outline" className="flex items-center gap-2">
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Share2 className="w-4 h-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Saved Trips */}
        {activeTab === 'saved' && (
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedTrips.map((trip) => (
                <motion.div
                  key={trip.id}
                  variants={itemVariants}
                  className="gradient-card hover-lift overflow-hidden group"
                >
                  <div className="h-40 bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center mb-4 relative">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {trip.image}
                    </div>
                    <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/90 dark:hover:bg-white/20 transition-all">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{trip.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {trip.destination}
                  </p>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Travelers:</span>
                      <span className="font-semibold">{trip.travelers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Budget:</span>
                      <span className="font-semibold">{trip.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Saved:</span>
                      <span className="font-semibold">{trip.saved}</span>
                    </div>
                  </div>

                  <Button className="w-full btn-gradient text-sm">Continue Planning</Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommendations */}
        {activeTab === 'recommendations' && (
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 hover-lift flex gap-4"
                >
                  <div className="text-4xl flex-shrink-0">{rec.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{rec.title}</h3>
                    <p className="text-foreground/70">{rec.description}</p>
                  </div>
                  <Button variant="outline" className="flex-shrink-0">Learn More</Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Weather Alerts */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">Travel Alerts</h2>
          <div className="glass-card p-6 flex gap-4 border-l-4 border-blue-500">
            <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold mb-2">Weather Update for Paris Trip</h3>
              <p className="text-foreground/70">
                Sunny weather expected for your June 15-22 trip! Perfect for outdoor activities. Consider booking outdoor tours in advance.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
