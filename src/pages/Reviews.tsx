import { useState, useEffect } from 'react';
import { getReviews, submitReview } from '../lib/supabase';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  course: string;
  rating: number;
  review: string;
  created_at: string;
}

const StarRating = ({ rating, onChange }: { rating: number; onChange: (r: number) => void }) => (
  <div className="flex gap-2">
    {[1, 2, 3, 4, 5].map(star => (
      <button
        key={star}
        type="button"
        onClick={() => onChange(star)}
        className="transition-colors"
      >
        <Star
          className={`w-6 h-6 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      </button>
    ))}
  </div>
);

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    rating: 0,
    review: '',
  });

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

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const { data } = await getReviews();
      if (data) setReviews(data);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      setMessage('Please select a rating');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const { error } = await submitReview(formData);

      if (error) {
        setMessage('Failed to submit review. Please try again.');
      } else {
        setMessage('Thank you! Your review has been submitted.');
        setFormData({ name: '', course: '', rating: 0, review: '' });
        loadReviews();
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Reviews</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            See what our students have to say about their learning journey
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Stats */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Overall Rating</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-5xl font-bold text-blue-600 mb-2">4.8</p>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">Based on {reviews.length} reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Review Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Share Your Experience</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Your Name *
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

                    {/* Course */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Course Attended *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select a course</option>
                        {courses.map(course => (
                          <option key={course} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                      Your Rating *
                    </label>
                    <StarRating rating={formData.rating} onChange={(r) => setFormData(prev => ({ ...prev, rating: r }))} />
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Review *
                    </label>
                    <textarea
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Share your experience with us..."
                    />
                  </div>

                  {/* Message */}
                  {message && (
                    <div className={`p-4 rounded-lg text-sm font-semibold ${
                      message.includes('Thank you') || message.includes('successfully')
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {message}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Review'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Latest Reviews</h3>
            {loading ? (
              <p className="text-center text-gray-600">Loading reviews...</p>
            ) : reviews.length === 0 ? (
              <p className="text-center text-gray-600">No reviews yet. Be the first to share your experience!</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map(review => (
                  <div key={review.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{review.course}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{review.review}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
