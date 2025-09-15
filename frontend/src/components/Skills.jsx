import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Brain, Database, Code, Cloud, TrendingUp } from 'lucide-react';
import { skills } from '../data/mockData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Science & AI/ML',
      icon: <Brain className="w-6 h-6" />,
      skills: skills.dataScience,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database className="w-6 h-6" />,
      skills: skills.frameworks,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Web Development',
      icon: <Code className="w-6 h-6" />,
      skills: skills.webDev,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Specialized Skills',
      icon: <Cloud className="w-6 h-6" />,
      skills: skills.specialized,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 text-blue-700 mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skill set spanning data science, machine learning, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-8 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold">Continuous Learning Journey</h3>
            </div>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Actively expanding expertise through hands-on projects, certifications, and academic research. 
              Currently focused on advanced AI/ML applications with particular interest in financial data analysis and explainable AI.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">8+</div>
                <div className="text-sm text-slate-400">IBM Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">4</div>
                <div className="text-sm text-slate-400">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">1</div>
                <div className="text-sm text-slate-400">Professional Internship</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">M.Sc</div>
                <div className="text-sm text-slate-400">Current Studies</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;