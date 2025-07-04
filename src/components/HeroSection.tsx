
import { useState, useEffect } from 'react';
import { ArrowDown, Database, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Data Engineer';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setAnimatedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Flow Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Pipeline Status: Running</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400">
                {animatedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Architecting data pipelines that turn raw information into actionable insights. 
              From extraction to transformation, I build scalable solutions that power data-driven decisions.
            </p>
          </div>

          {/* Pipeline Flow Visualization */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-4 md:space-x-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-blue-500/25">
                  E
                </div>
                <span className="text-xs text-gray-400 mt-2">Extract</span>
              </div>
              
              <ArrowRight className="text-blue-400 animate-pulse" size={24} />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-teal-500/25">
                  L
                </div>
                <span className="text-xs text-gray-400 mt-2">Load</span>
              </div>
              
              <ArrowRight className="text-teal-400 animate-pulse" size={24} />
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-purple-500/25">
                  T
                </div>
                <span className="text-xs text-gray-400 mt-2">Transform</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-3 text-lg">
              <Database className="mr-2" size={20} />
              Explore Pipeline
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 text-lg">
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-blue-400" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
