import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Github, TrendingUp, Brain, Database, Code } from 'lucide-react';
import { projects, personalInfo } from '../data/mockData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const categoryIcons = {
    'Machine Learning': <Brain className="w-5 h-5" />,
    'NLP & Deep Learning': <TrendingUp className="w-5 h-5" />,
    'IoT & AI': <Database className="w-5 h-5" />,
    'Web Development': <Code className="w-5 h-5" />
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-400 mb-4 transition-colors duration-300">
            Featured Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">
            Research &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Exploring the intersection of data science, AI/ML, and real-world applications through hands-on projects
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 dark:bg-slate-800">
            <TabsTrigger value="overview">Project Overview</TabsTrigger>
            <TabsTrigger value="details">Technical Details</TabsTrigger>
          </TabsList>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Selection */}
            <div className="lg:col-span-1 space-y-4">
              {projects.map((project) => (
                <Card 
                  key={project.id}
                  className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedProject.id === project.id 
                      ? 'border-blue-500 shadow-md bg-blue-50 dark:bg-blue-900/30 dark:border-blue-400' 
                      : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 bg-white dark:bg-slate-800'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 text-white flex-shrink-0">
                      {categoryIcons[project.category]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 dark:text-white line-clamp-2 text-sm transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 transition-colors duration-300">{project.duration}</p>
                      <Badge variant="secondary" className="mt-2 text-xs dark:bg-slate-700 dark:text-slate-300 transition-colors duration-300">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-lg border-0 h-full bg-white dark:bg-slate-800 transition-colors duration-300">
                <TabsContent value="overview" className="space-y-6 mt-0">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
                        {categoryIcons[selectedProject.category]}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white transition-colors duration-300">{selectedProject.title}</h3>
                        {selectedProject.subtitle && (
                          <p className="text-emerald-600 dark:text-emerald-400 font-medium transition-colors duration-300">{selectedProject.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline" className="px-3 py-1 dark:border-slate-600 dark:text-slate-300 transition-colors duration-300">
                        {selectedProject.duration}
                      </Badge>
                      <Badge className="px-3 py-1 bg-gradient-to-r from-blue-500 to-emerald-500">
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-colors duration-300">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-600">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2 transition-colors duration-300">Challenge</h4>
                      <p className="text-red-700 dark:text-red-200 transition-colors duration-300">{selectedProject.challenge}</p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-600">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 transition-colors duration-300">Approach</h4>
                      <p className="text-blue-700 dark:text-blue-200 transition-colors duration-300">{selectedProject.approach}</p>
                    </div>

                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border-l-4 border-emerald-500 dark:border-emerald-600">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2 transition-colors duration-300">Key Results</h4>
                      <ul className="space-y-2">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-emerald-700 dark:text-emerald-200 transition-colors duration-300">
                            <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="space-y-6 mt-0">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 transition-colors duration-300">Technical Implementation</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2 transition-colors duration-300">
                          <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="px-2 py-1 text-xs dark:bg-slate-700 dark:text-slate-300 transition-colors duration-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2 transition-colors duration-300">
                          <Brain className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          Skills Demonstrated
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="px-2 py-1 text-xs border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 transition-colors duration-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-lg transition-colors duration-300">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-3 transition-colors duration-300">Learning Outcomes</h4>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                        This project enhanced my understanding of {selectedProject.category.toLowerCase()} applications and provided hands-on experience with industry-standard tools and methodologies. The work demonstrates practical problem-solving skills and the ability to translate theoretical knowledge into real-world solutions.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  {selectedProject.repoUrl ? (
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="flex items-center gap-2 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors duration-300">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </a>
                  ) : (
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button variant="outline" className="flex items-center gap-2 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors duration-300">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;