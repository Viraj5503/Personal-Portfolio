import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, TrendingUp, Award, Target } from 'lucide-react';
import { aboutContent, languages } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400 mb-4 transition-colors duration-300">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Data Science & AI
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            {aboutContent.summary}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Key Highlights */}
          <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Key Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {aboutContent.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0 transition-colors duration-300" />
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">{highlight}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Research Interests & Goals */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Research Interests</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Machine Learning in Finance',
                  'Natural Language Processing',
                  'Explainable AI',
                  'Time Series Forecasting',
                  'Quantitative Finance',
                  'Data Analytics and Visualization'
                ].map((interest, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-2 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 justify-center transition-colors duration-300">
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-lg border-0 bg-white dark:bg-slate-800 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-600 dark:bg-slate-500 text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Languages</h3>
              </div>
              
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium text-slate-700 dark:text-slate-300 transition-colors duration-300">{lang.name}</span>
                    <Badge variant="outline" className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-300">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Current Focus */}
        <Card className="mt-12 p-8 shadow-lg border-0 bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-700 dark:to-emerald-700 text-white transition-colors duration-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Currently Focused On</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
              Pursuing Master's in Computer Science at TU Dresden while developing expertise in advanced AI/ML applications, 
              with particular interest in financial data analysis, explainable AI, and real-world machine learning implementations.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;