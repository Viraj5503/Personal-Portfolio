import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react';
import { usePersonalInfo } from '../hooks/usePortfolioData';
import LoadingSpinner from './LoadingSpinner';
import { ErrorMessage } from './ErrorBoundary';

const Hero = () => {
  const { data: personalInfo, loading, error } = usePersonalInfo();

  const handleContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) return <LoadingSpinner size="lg" message="Loading personal information..." />;
  if (error) return <ErrorMessage error={error} />;
  if (!personalInfo) return <ErrorMessage error="No personal information available" />;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 pt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed">
                {personalInfo.title}
              </p>
              
              <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                {personalInfo.subtitle}
              </p>
            </div>

            {/* Key Info */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Available for collaboration</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleContact}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                onClick={handleProjects}
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-medium transition-all duration-200 hover:shadow-md"
              >
                View Projects
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-blue-600 hover:text-blue-700"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-slate-700 hover:text-slate-800"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-emerald-600 hover:text-emerald-700"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 text-slate-600 hover:text-slate-700"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-emerald-100">
                <img 
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;