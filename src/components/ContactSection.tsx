
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Database, Link, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ContactSection = () => {
  const [deploymentStatus, setDeploymentStatus] = useState('ready');

  const handleDeployment = () => {
    setDeploymentStatus('deploying');
    setTimeout(() => setDeploymentStatus('deployed'), 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-6">
            <div className={`w-3 h-3 rounded-full ${
              deploymentStatus === 'ready' ? 'bg-yellow-400' :
              deploymentStatus === 'deploying' ? 'bg-orange-400 animate-pulse' :
              'bg-green-400'
            }`}></div>
            <span className="text-green-400 font-semibold">DEPLOY PHASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready for <span className="text-green-400">Deployment</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pipeline tested, validated, and ready for production. 
            Let's deploy this collaboration and build something incredible together.
          </p>
        </div>

        {/* Deployment Dashboard */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-green-500/20 mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <Database className="mr-3 text-green-400" size={24} />
                Deployment Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {/* System Status */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                  <div className="text-gray-400 text-sm">Scalability</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Get My Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Download the complete technical specification document (PDF format).
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600">
                  <Download className="mr-2" size={16} />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <CardHeader>
                <CardTitle className="text-white">Connect & Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Let's discuss your next data engineering challenge.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <Link className="mr-2" size={16} />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10">
                    <FileText className="mr-2" size={16} />
                    Email Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Deployment Actions */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-slate-800/50 border border-green-500/20 rounded-2xl p-6">
              <div className="text-left">
                <div className="text-white font-semibold">Pipeline Status:</div>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant={
                    deploymentStatus === 'ready' ? 'secondary' :
                    deploymentStatus === 'deploying' ? 'default' : 'default'
                  } className={
                    deploymentStatus === 'ready' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                    deploymentStatus === 'deploying' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' :
                    'bg-green-500/20 text-green-400 border-green-500/30'
                  }>
                    {deploymentStatus === 'ready' ? 'Ready to Deploy' :
                     deploymentStatus === 'deploying' ? 'Deploying...' : 'Successfully Deployed'}
                  </Badge>
                </div>
              </div>
              
              <Button 
                onClick={handleDeployment}
                disabled={deploymentStatus === 'deploying'}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 disabled:opacity-50"
              >
                {deploymentStatus === 'ready' ? 'Deploy Collaboration' :
                 deploymentStatus === 'deploying' ? 'Deploying...' : 'Redeploy'}
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700/50">
          <p className="text-gray-400 text-sm">
            Built with React, TypeScript, and Tailwind CSS • Deployed on the edge
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
