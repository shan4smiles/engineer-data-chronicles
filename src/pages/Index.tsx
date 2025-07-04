
import { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight, Database, Download, FileText, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import ExtractSection from '@/components/ExtractSection';
import LoadSection from '@/components/LoadSection';
import TransformSection from '@/components/TransformSection';
import ToolsSection from '@/components/ToolsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'extract', 'load', 'transform', 'tools', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-400">DataFlow.dev</div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'hero', label: 'Pipeline' },
                { id: 'extract', label: 'Extract' },
                { id: 'load', label: 'Load' },
                { id: 'transform', label: 'Transform' },
                { id: 'tools', label: 'Tools' },
                { id: 'contact', label: 'Deploy' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ExtractSection />
        <LoadSection />
        <TransformSection />
        <ToolsSection />
        <ContactSection />
      </main>

      {/* Pipeline Status Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
        {[
          { id: 'extract', label: 'E', status: 'completed' },
          { id: 'load', label: 'L', status: 'completed' },
          { id: 'transform', label: 'T', status: 'running' }
        ].map((step) => (
          <div
            key={step.id}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
              step.status === 'completed'
                ? 'border-green-400 bg-green-400/20 text-green-400'
                : 'border-blue-400 bg-blue-400/20 text-blue-400 animate-pulse'
            }`}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
