import { CheckCircle, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const courses = [
    {
      id: 1,
      name: 'Cloud Computing Fundamentals',
      icon: '☁️',
      duration: '6 Weeks',
      level: 'Beginner',
      students: 450,
      price: '₹8,999',
      description: 'Master cloud computing basics, architecture, and deployment models',
      topics: [
        'Cloud Models (IaaS, PaaS, SaaS)',
        'Cloud Architecture',
        'Security & Compliance',
        'Cost Optimization',
      ],
    },
    {
      id: 2,
      name: 'DevOps Mastery',
      icon: '♾️',
      duration: '8 Weeks',
      level: 'Intermediate',
      students: 380,
      price: '₹12,999',
      description: 'Learn CI/CD pipelines, automation, and deployment strategies',
      topics: [
        'Git & Version Control',
        'Jenkins & CI/CD',
        'Infrastructure as Code',
        'Monitoring & Logging',
      ],
    },
    {
      id: 3,
      name: 'Kubernetes & Container Orchestration',
      icon: '⌈',
      duration: '8 Weeks',
      level: 'Intermediate',
      students: 320,
      price: '₹13,999',
      description: 'Master container orchestration and microservices architecture',
      topics: [
        'Docker Fundamentals',
        'Kubernetes Core Concepts',
        'Deployments & Services',
        'Helm & Package Management',
      ],
    },
    {
      id: 4,
      name: 'AWS Solutions Architect',
      icon: '◆',
      duration: '10 Weeks',
      level: 'Advanced',
      students: 520,
      price: '₹15,999',
      description: 'Prepare for AWS Solutions Architect certification',
      topics: [
        'EC2, S3, RDS',
        'VPC & Networking',
        'IAM & Security',
        'Auto-scaling & Load Balancing',
      ],
    },
    {
      id: 5,
      name: 'Microsoft Azure Fundamentals',
      icon: 'Ⓐ',
      duration: '6 Weeks',
      level: 'Beginner',
      students: 290,
      price: '₹9,999',
      description: 'Complete Azure cloud platform training and certification prep',
      topics: [
        'Azure Services Overview',
        'Virtual Machines & App Services',
        'Azure Storage & Databases',
        'Azure DevOps',
      ],
    },
    {
      id: 6,
      name: 'Linux Administration Pro',
      icon: '🐧',
      duration: '6 Weeks',
      level: 'Beginner',
      students: 410,
      price: '₹7,999',
      description: 'Master Linux system administration and command line',
      topics: [
        'Linux Fundamentals',
        'User & Permission Management',
        'Package Management',
        'Networking & Troubleshooting',
      ],
    },
    {
      id: 7,
      name: 'Python for DevOps & Automation',
      icon: '🐍',
      duration: '7 Weeks',
      level: 'Intermediate',
      students: 350,
      price: '₹10,999',
      description: 'Learn Python scripting for DevOps and infrastructure automation',
      topics: [
        'Python Fundamentals',
        'Automation Scripts',
        'API Integration',
        'Web Scraping & Tools',
      ],
    },
    {
      id: 8,
      name: 'AI Tools & Automation',
      icon: '🤖',
      duration: '5 Weeks',
      level: 'Beginner',
      students: 280,
      price: '₹8,999',
      description: 'Explore AI tools, ChatGPT integration, and automation workflows',
      topics: [
        'AI Fundamentals',
        'ChatGPT & LLMs',
        'Prompt Engineering',
        'Workflow Automation',
      ],
    },
  ];

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 text-center">
        <p className="text-5xl mb-3">{course.icon}</p>
        <h3 className="text-xl font-bold text-slate-900">{course.name}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{course.students} students</span>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <Award className="w-4 h-4" />
            <span>{course.level}</span>
          </div>
          <div className="text-blue-600 font-bold text-lg">{course.price}</div>
        </div>

        <div className="mb-6 pb-6 border-b">
          <p className="text-xs font-semibold text-gray-500 mb-3">TOPICS COVERED</p>
          <ul className="space-y-2">
            {course.topics.map((topic, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/demo"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-slate-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive training programs designed for all skill levels
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              8+ Specializations Available
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Choose from our diverse range of courses or combine multiple specializations to create your custom learning path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Special Programs */}
          <div className="bg-white rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Special Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Intensive Bootcamp</h4>
                <p className="text-gray-600 mb-4">
                  4-week intensive program covering multiple technologies. Perfect for those ready to commit full-time.
                </p>
                <a href="https://wa.me/918002604589" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </a>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-slate-900 mb-3">Corporate Training</h4>
                <p className="text-gray-600 mb-4">
                  Customized training programs for teams. Flexible schedule and on-site delivery available.
                </p>
                <a href="https://wa.me/918002604589" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700">
                  Get Proposal →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Course to Choose?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free demo class to understand our teaching methodology and get personalized course recommendations.
          </p>
          <Link
            to="/demo"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Book Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
