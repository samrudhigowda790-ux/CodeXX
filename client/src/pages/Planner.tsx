import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Users, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Smart Trip Planner Page - Multi-step form for trip planning
 * Design: Vibrant Gradient Maximalism
 * - Step-by-step form with smooth transitions
 * - Progress indicator
 * - AI-powered recommendations
 */

type FormData = {
  travelers: number;
  ageGroups: string[];
  hasKids: boolean;
  hasSeniors: boolean;
  accessibility: string[];
  destination: string;
  startDate: string;
  endDate: string;
  budget: string;
  travelStyle: string[];
  foodInterests: string[];
  indoorOutdoor: string;
  adventureLevel: string;
  travelPace: string;
};

export default function Planner() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    travelers: 2,
    ageGroups: [],
    hasKids: false,
    hasSeniors: false,
    accessibility: [],
    destination: '',
    startDate: '',
    endDate: '',
    budget: 'moderate',
    travelStyle: [],
    foodInterests: [],
    indoorOutdoor: 'balanced',
    adventureLevel: 'moderate',
    travelPace: 'moderate',
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Trip Plan:', formData);
    alert('Trip plan submitted! Redirecting to results...');
    window.location.href = '/results';
  };

  const travelStyles = ['Luxury', 'Budget', 'Adventure', 'Relaxation', 'Family-friendly', 'Cultural'];
  const foodInterests = ['Local Cuisine', 'Fine Dining', 'Street Food', 'Vegetarian', 'Vegan', 'Seafood'];
  const accessibilityOptions = ['Wheelchair Access', 'Mobility Aid Support', 'Hearing Assistance', 'Visual Assistance', 'Dietary Restrictions'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-blue-50/50 dark:from-purple-950/20 dark:via-slate-950 dark:to-blue-950/20">
      <Header />

      <section className="container py-12 md:py-20">
        {/* Progress Indicator */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    s <= step
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}
                  animate={s === step ? { scale: 1.1 } : { scale: 1 }}
                >
                  {s}
                </motion.div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                      s < step
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {step === 1 && 'Who\'s Traveling?'}
              {step === 2 && 'Trip Details'}
              {step === 3 && 'Your Preferences'}
            </h1>
            <p className="text-lg text-foreground/60">
              {step === 1 && 'Tell us about your travel group'}
              {step === 2 && 'Where, when, and how much?'}
              {step === 3 && 'Fine-tune your perfect trip'}
            </p>
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8"
          >
            {/* Step 1: Traveler Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Number of Travelers</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        onClick={() => setFormData({ ...formData, travelers: num })}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          formData.travelers === num
                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {num}{num === 6 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Travel Group Type</label>
                  <div className="space-y-2">
                    {[
                      { label: 'Family with Kids', value: 'family' },
                      { label: 'Couples', value: 'couples' },
                      { label: 'Friends', value: 'friends' },
                      { label: 'Solo Traveler', value: 'solo' },
                      { label: 'Mixed Group', value: 'mixed' },
                      { label: 'Corporate Group', value: 'corporate' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.ageGroups.includes(option.value)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                ageGroups: [...formData.ageGroups, option.value],
                              });
                            } else {
                              setFormData({
                                ...formData,
                                ageGroups: formData.ageGroups.filter((v) => v !== option.value),
                              });
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasKids}
                      onChange={(e) => setFormData({ ...formData, hasKids: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span>Traveling with Kids</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasSeniors}
                      onChange={(e) => setFormData({ ...formData, hasSeniors: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span>Traveling with Seniors</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Accessibility Needs</label>
                  <div className="space-y-2">
                    {accessibilityOptions.map((option) => (
                      <label key={option} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.accessibility.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                accessibility: [...formData.accessibility, option],
                              });
                            } else {
                              setFormData({
                                ...formData,
                                accessibility: formData.accessibility.filter((v) => v !== option),
                              });
                            }
                          }}
                          className="w-4 h-4"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Trip Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Destination</label>
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Budget Range</label>
                  <div className="space-y-2">
                    {[
                      { label: 'Budget ($)', value: 'budget' },
                      { label: 'Moderate ($$)', value: 'moderate' },
                      { label: 'Premium ($$$)', value: 'premium' },
                      { label: 'Luxury ($$$$)', value: 'luxury' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          checked={formData.budget === option.value}
                          onChange={() => setFormData({ ...formData, budget: option.value })}
                          className="w-4 h-4"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Travel Style</label>
                  <div className="grid grid-cols-2 gap-2">
                    {travelStyles.map((style) => (
                      <button
                        key={style}
                        onClick={() => {
                          if (formData.travelStyle.includes(style)) {
                            setFormData({
                              ...formData,
                              travelStyle: formData.travelStyle.filter((s) => s !== style),
                            });
                          } else {
                            setFormData({
                              ...formData,
                              travelStyle: [...formData.travelStyle, style],
                            });
                          }
                        }}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          formData.travelStyle.includes(style)
                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-3">Food Interests</label>
                  <div className="grid grid-cols-2 gap-2">
                    {foodInterests.map((interest) => (
                      <button
                        key={interest}
                        onClick={() => {
                          if (formData.foodInterests.includes(interest)) {
                            setFormData({
                              ...formData,
                              foodInterests: formData.foodInterests.filter((f) => f !== interest),
                            });
                          } else {
                            setFormData({
                              ...formData,
                              foodInterests: [...formData.foodInterests, interest],
                            });
                          }
                        }}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          formData.foodInterests.includes(interest)
                            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Indoor/Outdoor Preference</label>
                  <div className="space-y-2">
                    {[
                      { label: 'Indoor Activities', value: 'indoor' },
                      { label: 'Outdoor Adventures', value: 'outdoor' },
                      { label: 'Balanced Mix', value: 'balanced' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                        <input
                          type="radio"
                          name="indoorOutdoor"
                          checked={formData.indoorOutdoor === option.value}
                          onChange={() => setFormData({ ...formData, indoorOutdoor: option.value })}
                          className="w-4 h-4"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Adventure Level</label>
                  <div className="space-y-2">
                    {[
                      { label: 'Relaxed', value: 'relaxed' },
                      { label: 'Moderate', value: 'moderate' },
                      { label: 'Adventurous', value: 'adventurous' },
                      { label: 'Extreme', value: 'extreme' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                        <input
                          type="radio"
                          name="adventureLevel"
                          checked={formData.adventureLevel === option.value}
                          onChange={() => setFormData({ ...formData, adventureLevel: option.value })}
                          className="w-4 h-4"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Travel Pace</label>
                  <div className="space-y-2">
                    {[
                      { label: 'Relaxed (slow pace)', value: 'relaxed' },
                      { label: 'Moderate (balanced)', value: 'moderate' },
                      { label: 'Fast-paced (action-packed)', value: 'fast' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer">
                        <input
                          type="radio"
                          name="travelPace"
                          checked={formData.travelPace === option.value}
                          onChange={() => setFormData({ ...formData, travelPace: option.value })}
                          className="w-4 h-4"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 justify-between">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={step === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {step < 3 ? (
              <Button
                className="btn-gradient flex items-center gap-2"
                onClick={handleNext}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                className="btn-gradient flex items-center gap-2"
                onClick={handleSubmit}
              >
                Generate Itinerary
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
