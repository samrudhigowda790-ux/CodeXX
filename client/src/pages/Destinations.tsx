import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Cloud, Utensils, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Destination Explorer Page - Browse and discover destinations
 * Design: Vibrant Gradient Maximalism
 * - Searchable destination cards
 * - Weather information
 * - Local highlights
 * - Best travel seasons
 */

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const destinations = [
    {
      name: 'Paris, France',
      category: 'cultural',
      weather: '72°F, Sunny',
      season: 'Spring/Fall',
      food: 'French Cuisine',
      vibe: 'Romantic & Cultural',
      image: '🗼',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Café Culture'],
      bestFor: ['Couples', 'Culture Enthusiasts'],
    },
    {
      name: 'Tokyo, Japan',
      category: 'adventure',
      weather: '68°F, Clear',
      season: 'Spring/Autumn',
      food: 'Japanese Cuisine',
      vibe: 'Modern & Traditional',
      image: '🗾',
      highlights: ['Temples', 'Street Food', 'Tech District'],
      bestFor: ['Families', 'Adventure Seekers'],
    },
    {
      name: 'Bali, Indonesia',
      category: 'relaxation',
      weather: '84°F, Tropical',
      season: 'Dry Season',
      food: 'Southeast Asian',
      vibe: 'Tropical Paradise',
      image: '🏝️',
      highlights: ['Beaches', 'Rice Terraces', 'Temples'],
      bestFor: ['Couples', 'Solo Travelers'],
    },
    {
      name: 'New York, USA',
      category: 'adventure',
      weather: '65°F, Partly Cloudy',
      season: 'Fall/Spring',
      food: 'International',
      vibe: 'Energetic & Diverse',
      image: '🗽',
      highlights: ['Broadway', 'Central Park', 'Museums'],
      bestFor: ['Families', 'Groups'],
    },
    {
      name: 'Barcelona, Spain',
      category: 'cultural',
      weather: '75°F, Sunny',
      season: 'Spring/Fall',
      food: 'Spanish Cuisine',
      vibe: 'Artistic & Vibrant',
      image: '🏖️',
      highlights: ['Sagrada Familia', 'Beach Life', 'Tapas'],
      bestFor: ['Families', 'Culture Enthusiasts'],
    },
    {
      name: 'Dubai, UAE',
      category: 'luxury',
      weather: '95°F, Sunny',
      season: 'Winter',
      food: 'Middle Eastern',
      vibe: 'Modern & Luxurious',
      image: '🏜️',
      highlights: ['Burj Khalifa', 'Desert Safari', 'Shopping'],
      bestFor: ['Luxury Travelers', 'Families'],
    },
    {
      name: 'Amsterdam, Netherlands',
      category: 'cultural',
      weather: '62°F, Cloudy',
      season: 'Spring/Summer',
      food: 'Dutch Cuisine',
      vibe: 'Charming & Relaxed',
      image: '🚲',
      highlights: ['Canals', 'Museums', 'Cycling'],
      bestFor: ['Couples', 'Groups'],
    },
    {
      name: 'Costa Rica',
      category: 'adventure',
      weather: '78°F, Humid',
      season: 'Dry Season',
      food: 'Latin American',
      vibe: 'Nature & Adventure',
      image: '🌴',
      highlights: ['Rainforests', 'Zip-lining', 'Wildlife'],
      bestFor: ['Adventure Seekers', 'Families'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Destinations' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'relaxation', label: 'Relaxation' },
    { id: 'luxury', label: 'Luxury' },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-foreground/60">
            Discover the perfect destination for your group trip with AI-powered recommendations.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border border-purple-200 dark:border-purple-500/30 bg-white dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="gradient-card hover-lift overflow-hidden group cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-40 bg-gradient-to-br from-purple-400 to-pink-300 flex items-center justify-center overflow-hidden mb-4">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {dest.image}
                </div>
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Cloud className="w-4 h-4 text-blue-500" />
                    <span>{dest.weather}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    <span>Best: {dest.season}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Utensils className="w-4 h-4 text-orange-500" />
                    <span>{dest.food}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground/70 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground/70 mb-2">Best For:</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.bestFor.map((group, i) => (
                      <span key={i} className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-full">
                        {group}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full btn-gradient text-sm">Plan Trip</Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-foreground/60">
              No destinations found. Try a different search.
            </p>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
}
