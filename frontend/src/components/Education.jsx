import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react';
import { education, certifications } from '../data/mockData';

const Education = () => {
  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400 mb-4 transition-colors duration-300">
            Academic Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
            Education &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Academic excellence combined with continuous learning through professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center transition-colors duration-300">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className={`p-8 shadow-lg border-0 transition-colors duration-300 ${
                edu.status === 'current' 
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-700 dark:to-emerald-700 text-white' 
                  : 'bg-white dark:bg-slate-800'
              }`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className={`p-4 rounded-lg ${
                    edu.status === 'current' 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-br from-blue-500 to-emerald-500 dark:from-blue-600 dark:to-emerald-600'
                  } text-white flex-shrink-0`}>
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h4 className={`text-xl font-bold ${edu.status === 'current' ? 'text-white' : 'text-slate-800 dark:text-white'} transition-colors duration-300`}>{edu.degree}</h4>
                      {edu.status === 'current' && (
                        <Badge className="bg-white/20 text-white border-white/30 w-fit">
                          Current
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 opacity-70" />
                        <span className={`font-medium ${edu.status === 'current' ? 'text-white' : 'text-slate-800 dark:text-white'} transition-colors duration-300`}>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 opacity-70" />
                          <span className={`text-sm ${edu.status === 'current' ? 'text-white' : 'text-slate-600 dark:text-slate-400'} transition-colors duration-300`}>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 opacity-70" />
                          <span className={`text-sm ${edu.status === 'current' ? 'text-white' : 'text-slate-600 dark:text-slate-400'} transition-colors duration-300`}>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className={`text-sm transition-colors duration-300 ${
                      edu.status === 'current' ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center transition-colors duration-300">Professional Certifications</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(groupedCertifications).map(([category, certs]) => (
              <Card key={category} className="p-6 shadow-lg border-0 bg-white dark:bg-slate-800 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white transition-colors duration-300">{category}</h4>
                </div>
                
                <div className="space-y-4">
                  {certs.map((cert, index) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h5 className="font-medium text-slate-800 dark:text-white text-sm leading-tight transition-colors duration-300">
                          {cert.title}
                        </h5>
                        <Badge variant="secondary" className="text-xs dark:bg-slate-600 dark:text-slate-300 flex-shrink-0 transition-colors duration-300">
                          {cert.date}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">{cert.issuer}</span>
                        {cert.details && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span className="text-xs text-slate-600 dark:text-slate-400 transition-colors duration-300">{cert.details}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Highlight */}
        <Card className="mt-12 p-8 shadow-lg border-0 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-950 dark:to-slate-900 text-white transition-colors duration-300">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">Academic Excellence</h3>
            </div>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Maintained outstanding academic performance while actively pursuing professional development through 
              industry-recognized certifications in data science and cloud computing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">9.69/10</div>
                <div className="text-sm text-slate-400">Bachelor's CGPA</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">8+</div>
                <div className="text-sm text-slate-400">Professional Certifications</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">Top 1%</div>
                <div className="text-sm text-slate-400">NPTEL Elite Grade</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;