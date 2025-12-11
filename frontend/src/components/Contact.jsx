// frontend/src/components/Contact.jsx

import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';
import { usePersonalInfo } from '../hooks/usePortfolioData';
import { contactApi, isFormspreeConfigured } from '../services/api'; // This is correct
import LoadingSpinner from './LoadingSpinner';
import { ErrorMessage } from './ErrorBoundary';

const Contact = () => {
  const { data: personalInfo, loading, error } = usePersonalInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (!isFormspreeConfigured) {
        // Defensive: don't attempt to submit if endpoint is missing.
        throw new Error('Formspree endpoint not configured. Set REACT_APP_FORMSPREE_ENDPOINT in your environment (see README).');
      }

      // Pass the formData directly to the API function (Formspree)
      const response = await contactApi.submitContactForm(formData);

      toast({
        title: "Message Sent! 🎉",
        description: response.message || "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Contact form submission error:', error);

      // Prefer thrown or response messages
      const errorMessage = error?.response?.data?.detail || error?.message || "Failed to send message. Please try again later.";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400 mb-4 transition-colors duration-300">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 transition-colors duration-300">
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
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-shadow duration-200 group"
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

            <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-950 dark:to-slate-900 text-white transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
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

          {/* Contact Form */}
          <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">Send a Message</h3>
            
            {/* If Formspree is not configured, show an inline notice and disable submit */}
            {!isFormspreeConfigured && (
              <div className="mb-4 p-4 rounded-md bg-yellow-50 dark:bg-yellow-900 text-yellow-800">
                <strong>Contact form not configured.</strong> Set <code>REACT_APP_FORMSPREE_ENDPOINT</code> in your environment (see README). The submit button is disabled until configured.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:border-slate-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What would you like to discuss?"
                  className="w-full dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:border-slate-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, research opportunity, or how we can collaborate..."
                  rows={6}
                  className="w-full dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 dark:border-slate-600"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !isFormspreeConfigured}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 dark:from-blue-700 dark:to-emerald-700 dark:hover:from-blue-600 dark:hover:to-emerald-600 text-white font-medium py-3 text-lg transition-all duration-200 hover:shadow-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;