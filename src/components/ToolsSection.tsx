
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, ArrowDown } from 'lucide-react';

const ToolsSection = () => {
  const toolCategories = [
    {
      category: "Data Processing",
      tools: [
        { name: "Apache Spark", level: 95, color: "bg-orange-500" },
        { name: "Apache Kafka", level: 90, color: "bg-blue-500" },
        { name: "Apache Airflow", level: 85, color: "bg-teal-500" },
        { name: "dbt", level: 80, color: "bg-green-500" }
      ]
    },
    {
      category: "Cloud Platforms",
      tools: [
        { name: "AWS", level: 90, color: "bg-yellow-500" },
        { name: "Google Cloud", level: 85, color: "bg-blue-600" },
        { name: "Azure", level: 75, color: "bg-blue-400" },
        { name: "Snowflake", level: 80, color: "bg-cyan-500" }
      ]
    },
    {
      category: "Databases",
      tools: [
        { name: "PostgreSQL", level: 95, color: "bg-blue-700" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "ClickHouse", level: 80, color: "bg-red-500" },
        { name: "Redis", level: 85, color: "bg-red-600" }
      ]
    },
    {
      category: "Programming",
      tools: [
        { name: "Python", level: 95, color: "bg-blue-500" },
        { name: "Scala", level: 85, color: "bg-red-500" },
        { name: "SQL", level: 98, color: "bg-indigo-500" },
        { name: "Java", level: 80, color: "bg-orange-600" }
      ]
    },
    {
      category: "DevOps & Orchestration",
      tools: [
        { name: "Docker", level: 90, color: "bg-blue-600" },
        { name: "Kubernetes", level: 85, color: "bg-blue-700" },
        { name: "Terraform", level: 80, color: "bg-purple-600" },
        { name: "Jenkins", level: 75, color: "bg-blue-800" }
      ]
    },
    {
      category: "Monitoring & Visualization",
      tools: [
        { name: "Grafana", level: 85, color: "bg-orange-500" },
        { name: "Prometheus", level: 80, color: "bg-red-500" },
        { name: "Tableau", level: 85, color: "bg-blue-500" },
        { name: "Datadog", level: 75, color: "bg-purple-500" }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-slate-800/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-teal-400"></div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-semibold">TECH STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400">Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The complete arsenal of tools and technologies that power modern data engineering. 
            From ingestion to visualization, these are the instruments of transformation.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {toolCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-800/50 border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${category.tools[0]?.color || 'bg-blue-500'}`}></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{tool.name}</span>
                        <span className="text-gray-400 text-xs">{tool.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${tool.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Patterns */}
        <Card className="bg-slate-800/30 border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Architecture Patterns & Methodologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Lambda Architecture", "Kappa Architecture", "Medallion Architecture", 
                "Event-Driven Architecture", "Microservices", "DataOps", "MLOps",
                "Stream Processing", "Batch Processing", "Real-time Analytics",
                "Data Mesh", "Data Fabric", "Zero-ETL"
              ].map((pattern, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 text-blue-300 border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                >
                  {pattern}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Flow Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            <Database size={20} className="text-blue-400" />
            <span className="text-sm font-medium">Pipeline optimization complete</span>
            <ArrowDown className="animate-bounce text-blue-400" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
