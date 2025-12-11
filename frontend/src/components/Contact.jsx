// frontend/src/components/Contact.jsx

import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';
import { usePersonalInfo } from '../hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import { ErrorMessage } from './ErrorBoundary';

const Contact = () => {
  const { data: personalInfo, loading, error } = usePersonalInfo();
  // No contact form — contact via email or phone using the links below.

  if (loading) return <LoadingSpinner size="lg" message="Loading contact information..." />;
  if (error) return <ErrorMessage error={error} />;
  if (!personalInfo) return <ErrorMessage error="No contact information available" />;

  const contactMethods = [
    // ... (This part of your code is perfect, no changes needed)
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-emerald-600'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin,
      color: 'text-blue-700'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'View Repositories',
      href: personalInfo.github,
      color: 'text-slate-700'
    }
  ];

  return (
    // ... (The rest of your JSX is also perfect, no changes needed)
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 mb-4 transition-colors duration-300">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Open to research opportunities, internships, and collaborations in data science and AI/ML
          </p>
        </div>

        <div className="space-y-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors duration-300 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Contact Information</h3>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-5 bg-white/60 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition transform hover:-translate-y-0.5 duration-200 group"
                  >
                    <div className={`${method.color} group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <div className="font-medium text-slate-800 dark:text-white transition-colors duration-300">{method.label}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-xl border border-slate-100 dark:border-slate-700 bg-slate-900 text-white transition-colors duration-300 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Available For</h3>
              <div className="space-y-3">
                {[
                  'Research Collaborations',
                  'Internships',
                  'AI/ML Project Discussions',
                  'Academic Partnerships',
                  'Student Jobs (Werkstudent)'
                ].map((opportunity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">{opportunity}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;