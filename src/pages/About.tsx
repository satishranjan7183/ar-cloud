import { CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Excellence', description: 'We maintain highest standards in training quality' },
    { title: 'Innovation', description: 'Always updated with latest technologies' },
    { title: 'Practical Focus', description: 'Hands-on learning with real-world projects' },
    { title: 'Student Success', description: 'Your growth is our success' },
  ];

  const team = [
    { name: 'Cloud Architects', expertise: '10+ years DevOps & Cloud experience' },
    { name: 'Kubernetes Experts', expertise: 'Container orchestration specialists' },
    { name: 'AWS Certified', expertise: 'Amazon Web Services experts' },
    { name: 'Python Developers', expertise: 'Full-stack Python development' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AR CLOUD</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Building skilled professionals ready for the cloud-first future
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AR CLOUD IT Trainings was founded with a mission to bridge the gap between industry demands and educational outcomes in cloud computing and DevOps.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We recognized that traditional training methods were not equipping professionals with practical, real-world skills needed in today's digital transformation journey.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are the trusted partner for thousands of professionals seeking to master cloud technologies, DevOps practices, and AI tools.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Tagline</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">
                Learn Cloud<br/>
                Build Skills<br/>
                Grow Career
              </p>
              <p className="text-gray-600">
                This represents our commitment to comprehensive professional development that transforms careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Expert Faculty
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
            Complete Learning Ecosystem
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl mb-4">📚</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Updated curriculum aligned with industry standards and latest technologies
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl mb-4">🧪</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hands-on Labs</h3>
              <p className="text-gray-600">
                Practical labs with real infrastructure setup and live project work
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-4xl mb-4">🎯</p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Career Support</h3>
              <p className="text-gray-600">
                Interview prep, resume building, and placement assistance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
