import { useState } from 'react';
import { submitDemoBooking } from '../lib/supabase';

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    preferred_date: '',
    preferred_time: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const courses = [
    'Cloud Computing Fundamentals',
    'DevOps Mastery',
    'Kubernetes & Container Orchestration',
    'AWS Solutions Architect',
    'Microsoft Azure Fundamentals',
    'Linux Administration Pro',
    'Python for DevOps & Automation',
    'AI Tools & Automation',
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { error } = await submitDemoBooking(formData);

      if (error) {
        setMessage('Failed to book demo. Please try again.');
      } else {
        setMessage('Demo booked successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          preferred_date: '',
          preferred_time: '',
        });
      }
    } catch (err) {
      setMessage('Error booking demo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Free Demo Class</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Experience our teaching methodology with a complimentary 1-hour demo session
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Select Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Choose a course</option>
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferred_date"
                  value={formData.preferred_date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Preferred Time *
                </label>
                <select
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select time slot</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              {message && (
                <div className={`p-4 rounded-lg text-sm font-semibold ${
                  message.includes('successfully')
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
              >
                {loading ? 'Booking...' : 'Book Demo Class'}
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              We will contact you shortly to confirm your demo class booking
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl mb-3">🎯</p>
              <h3 className="font-bold text-slate-900 mb-2">1 Hour Session</h3>
              <p className="text-gray-600 text-sm">Comprehensive introduction to the course</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-3">👨‍🏫</p>
              <h3 className="font-bold text-slate-900 mb-2">Expert Trainer</h3>
              <p className="text-gray-600 text-sm">Learn from industry professionals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl mb-3">💯</p>
              <h3 className="font-bold text-slate-900 mb-2">Completely Free</h3>
              <p className="text-gray-600 text-sm">No hidden charges or commitments</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-green-50 py-12 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-4">Need quick assistance?</p>
          <a
            href="https://wa.me/918002604589"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
