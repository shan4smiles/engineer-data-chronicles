
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Upload } from 'lucide-react';

const LoadSection = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechFlow Solutions",
      period: "2023 - Present",
      description: "Leading data pipeline architecture for real-time analytics platform serving 10M+ users daily",
      achievements: [
        "Designed and implemented Lambda architecture reducing data latency by 75%",
        "Built auto-scaling Kafka clusters handling 2TB+ daily throughput",
        "Mentored junior engineers and established data engineering best practices"
      ],
      technologies: ["Apache Kafka", "Apache Spark", "AWS", "Kubernetes", "Python", "Scala"]
    },
    {
      title: "Data Engineer",
      company: "DataStream Corp",
      period: "2021 - 2023",
      description: "Developed ETL pipelines and data warehousing solutions for financial services client",
      achievements: [
        "Built fault-tolerant data pipelines processing $100M+ transactions daily",
        "Implemented real-time fraud detection system reducing false positives by 40%",
        "Optimized query performance improving dashboard load times by 60%"
      ],
      technologies: ["Apache Airflow", "PostgreSQL", "Docker", "Python", "dbt", "Snowflake"]
    },
    {
      title: "Junior Data Engineer",
      company: "StartupData Inc",
      period: "2020 - 2021",
      description: "Entry-level position focusing on data ingestion and basic pipeline development",
      achievements: [
        "Automated manual data processes saving 20+ hours weekly",
        "Developed monitoring dashboards for data quality metrics",
        "Collaborated with data scientists to productionize ML models"
      ],
      technologies: ["Python", "SQL", "Git", "Jenkins", "Tableau", "MySQL"]
    }
  ];

  return (
    <section id="load" className="py-20 bg-slate-800/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-6 py-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-teal-400"></div>
            <span className="text-teal-400 font-semibold">LOAD PHASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience <span className="text-teal-400">Loading</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Loading knowledge into production systems through hands-on experience. 
            Each role has been a step in building robust, scalable data infrastructure.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-900 z-10"></div>
              
              <Card className={`bg-slate-800/50 border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-teal-400 font-medium text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-teal-500/50 text-teal-300">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Data Flow Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-teal-400">
            <Upload size={20} />
            <span className="text-sm font-medium">Experience data loaded successfully</span>
            <ArrowDown className="animate-bounce" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadSection;
