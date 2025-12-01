import React from 'react';
import { Badge } from './ui/badge';
import { Heart, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Viraj Dalsania
            </h3>
            <p className="text-slate-300 leading-relaxed transition-colors duration-300">
              Computer Science Master's student passionate about Data Science, AI/ML, and creating innovative solutions 
              for complex problems through research and development.
            </p>
            <div className="flex items-center gap-2 text-slate-400 transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Education', href: '#education' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Let's Connect</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub Repositories</span>
              </a>
            </div>

            <div className="pt-4">
              <Badge variant="outline" className="border-emerald-500 dark:border-emerald-400 text-emerald-400 dark:text-emerald-300 transition-colors duration-300">
                Open to Opportunities
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© 2025 Viraj Dalsania. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and passion for technology.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Currently pursuing Master's at TU Dresden</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;