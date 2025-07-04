
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, ArrowDown } from 'lucide-react';

const ExtractSection = () => {
  const educationData = [
    {
      degree: "Master of Science in Data Engineering",
      institution: "University of Technology",
      year: "2022-2024",
      description: "Specialized in distributed systems, big data processing, and machine learning pipelines",
      courses: ["Advanced Database Systems", "Distributed Computing", "Machine Learning", "Cloud Architecture"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2018-2022",
      description: "Foundation in computer science with focus on algorithms, data structures, and software engineering",
      courses: ["Data Structures", "Algorithms", "Database Design", "Software Engineering"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Data Engineer", issuer: "Amazon Web Services", year: "2023" },
    { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2023" },
    { name: "Apache Kafka Fundamentals", issuer: "Confluent", year: "2022" },
    { name: "Databricks Certified Associate", issuer: "Databricks", year: "2022" }
  ];

  return (
    <section id="extract" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-blue-400 font-semibold">EXTRACT PHASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Knowledge <span className="text-blue-400">Extraction</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Extracting foundational knowledge from premier institutions and certification programs. 
            Building the data warehouse of skills that powers everything I do.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                <CardDescription className="text-blue-400 font-medium">
                  {edu.institution} • {edu.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, courseIndex) => (
                    <Badge key={courseIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {course}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-slate-800/30 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-teal-500/20 hover:border-teal-500/40 transition-all">
                <h4 className="font-semibold text-white text-sm mb-2">{cert.name}</h4>
                <p className="text-teal-400 text-xs mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Flow Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-blue-400">
            <Database size={20} />
            <span className="text-sm font-medium">Data extracted and validated</span>
            <ArrowDown className="animate-bounce" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtractSection;
