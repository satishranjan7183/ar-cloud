import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Industry Certifications',
      description: 'Prepare for AWS, Azure, Kubernetes, and DevOps certifications',
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Live Projects',
      description: 'Work on real-world projects with industry experts',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Placement Assistance',
      description: 'Interview preparation and job placement support',
    },
  ];

  const courses = [
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'DevOps', icon: '♾️' },
    { name: 'Kubernetes', icon: '⌈' },
    { name: 'Azure', icon: 'Ⓐ' },
    { name: 'AWS', icon: '◆' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Python', icon: '🐍' },
    { name: 'AI Tools', icon: '🤖' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-slate-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Learn Cloud • Build Skills • Grow Career
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Master Cloud Computing, DevOps, Kubernetes, and AI with hands-on training from industry experts. Get certified, build real projects, and land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/demo"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Book Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/image.png"
                alt="AR CLOUD Logo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Why Choose AR CLOUD?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Our Specializations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-md transition-all text-center"
              >
                <div className="text-3xl mb-3">{course.icon}</div>
                <p className="font-semibold text-slate-900">{course.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully advanced their careers with AR CLOUD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Free Demo
            </Link>
            <a
              href="https://wa.me/918002604589"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">5000+</p>
              <p className="text-gray-600 font-semibold">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-gray-600 font-semibold">Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-gray-600 font-semibold">Expert Trainers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">8+</p>
              <p className="text-gray-600 font-semibold">Specializations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
