
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDown, Link, FileText, Database } from 'lucide-react';

const TransformSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Real-time Analytics Pipeline",
      description: "End-to-end streaming data pipeline for e-commerce analytics",
      challenge: "Process 100K+ events per second with sub-second latency for real-time dashboards",
      solution: "Implemented Lambda architecture using Kafka, Spark Streaming, and ClickHouse",
      impact: "Reduced decision-making time by 80% and increased revenue by 15% through real-time insights",
      technologies: ["Apache Kafka", "Apache Spark", "ClickHouse", "Kubernetes", "Python", "Grafana"],
      metrics: {
        throughput: "100K+ events/sec",
        latency: "<500ms",
        uptime: "99.9%",
        cost_reduction: "40%"
      },
      github: "https://github.com/example/analytics-pipeline",
      demo: "https://demo.analytics-pipeline.com"
    },
    {
      title: "ML Model Serving Platform",
      description: "Scalable ML inference platform with automated model deployment",
      challenge: "Deploy and serve 50+ ML models with A/B testing and automatic rollback capabilities",
      solution: "Built containerized platform with MLflow, Kubernetes, and custom routing logic",
      impact: "Accelerated model deployment from weeks to hours, improved model performance tracking",
      technologies: ["MLflow", "Docker", "Kubernetes", "FastAPI", "PostgreSQL", "Prometheus"],
      metrics: {
        models_served: "50+",
        deployment_time: "< 1 hour",
        api_latency: "< 100ms",
        accuracy_improvement: "25%"
      },
      github: "https://github.com/example/ml-platform",
      demo: "https://demo.ml-platform.com"
    },
    {
      title: "Data Lake Architecture",
      description: "Multi-petabyte data lake with automated governance and lineage tracking",
      challenge: "Organize unstructured data from 100+ sources with compliance and discovery features",
      solution: "Designed medallion architecture with Delta Lake, automated cataloging, and governance",
      impact: "Improved data discovery by 90% and reduced compliance audit time by 70%",
      technologies: ["Delta Lake", "Apache Spark", "AWS S3", "Apache Atlas", "dbt", "Airflow"],
      metrics: {
        data_volume: "5+ PB",
        sources: "100+",
        query_performance: "10x faster",
        compliance_score: "100%"
      },
      github: "https://github.com/example/data-lake",
      demo: "https://demo.data-lake.com"
    }
  ];

  const currentProject = projects[selectedProject];

  return (
    <section id="transform" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-purple-400 font-semibold">TRANSFORM PHASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project <span className="text-purple-400">Transformation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming raw ideas into production-ready solutions. 
            Each project represents a complete data transformation pipeline from concept to impact.
          </p>
        </div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <Button
              key={index}
              variant={selectedProject === index ? "default" : "outline"}
              onClick={() => setSelectedProject(index)}
              className={`${
                selectedProject === index
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10'
              }`}
            >
              {project.title}
            </Button>
          ))}
        </div>

        {/* Selected Project Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Project Info */}
          <div>
            <Card className="bg-slate-800/50 border-purple-500/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white text-2xl">{currentProject.title}</CardTitle>
                <CardDescription className="text-purple-400 text-lg">
                  {currentProject.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{currentProject.challenge}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{currentProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Impact:</h4>
                  <p className="text-gray-300 text-sm">{currentProject.impact}</p>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="bg-slate-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metrics & Actions */}
          <div>
            <Card className="bg-slate-800/50 border-purple-500/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(currentProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="text-2xl font-bold text-purple-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Link className="mr-2" size={16} />
                Live Demo
              </Button>
              <Button variant="outline" className="flex-1 border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                <FileText className="mr-2" size={16} />
                Case Study
              </Button>
            </div>
          </div>
        </div>

        {/* Data Flow Indicator */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-purple-400">
            <Database size={20} />
            <span className="text-sm font-medium">Data transformation complete</span>
            <ArrowDown className="animate-bounce" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
