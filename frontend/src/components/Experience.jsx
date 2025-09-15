import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin, Award, Star } from 'lucide-react';
import { experience, achievements } from '../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 text-blue-700 mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Professional experience and notable achievements in technology and academics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Professional Experience</h3>
            
            {experience.map((exp, index) => (
              <Card key={index} className="p-8 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 text-white flex-shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800">{exp.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-slate-700">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Additional Experience Note */}
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-r from-slate-50 to-blue-50">
              <div className="text-center space-y-3">
                <div className="p-2 rounded-lg bg-blue-600 text-white w-fit mx-auto">
                  <Star className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800">Continuous Learning</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Actively gaining practical experience through academic projects, research work, and 
                  professional certifications while pursuing advanced studies in Computer Science.
                </p>
              </div>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Key Achievements</h3>
            
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-blue-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">Notable Accomplishments</h4>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 shadow-lg border-0 text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <div className="text-3xl font-bold mb-2">9.69</div>
                <div className="text-sm opacity-90">Bachelor's CGPA</div>
              </Card>
              
              <Card className="p-6 shadow-lg border-0 text-center bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-sm opacity-90">Certifications</div>
              </Card>
            </div>

            {/* Skills Highlight */}
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
              <h4 className="font-bold text-lg mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Data Science',
                  'Machine Learning',
                  'Full-Stack Development',
                  'Research & Analysis',
                  'Problem Solving',
                  'Team Collaboration'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">{skill}</span>
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

export default Experience;