import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
              The AI Framework for Building Context-Aware Applications
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect language models to your data sources and execute complex workflows with our powerful, flexible AI orchestration library.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                className="bg-theme-main hover:bg-theme-dark text-white px-6 py-3 rounded-md transition-colors duration-200 font-medium"
              >
                Get Started
              </a>
              <a 
                href="#" 
                className="border border-gray-300 hover:border-theme-main hover:text-theme-main text-gray-600 px-6 py-3 rounded-md transition-colors duration-200 font-medium"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Code Example */}
          <div className="mt-12 animate-fade-in-delay bg-gray-50 rounded-lg p-4 md:p-6 shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs text-gray-500">Example.tsx</div>
            </div>
            <pre className="font-mono text-sm text-gray-800 overflow-x-auto">
              <code>
                <span className="text-purple-600">import</span> {`{ ChitChat }`} <span className="text-purple-600">from</span> <span className="text-green-600">'chitchat'</span>;{'\n\n'}
                <span className="text-blue-600">// Initialize the framework</span>{'\n'}
                <span className="text-purple-600">const</span> ai = <span className="text-purple-600">new</span> <span className="text-blue-600">ChitChat</span>({'{'}
                  modelName: <span className="text-green-600">'gpt-4-turbo'</span>,
                  temperature: <span className="text-orange-600">0.7</span>
                {'}'});{'\n\n'}
                <span className="text-blue-600">// Create a contextual chain</span>{'\n'}
                <span className="text-purple-600">const</span> chain = ai
                  .<span className="text-blue-600">withContext</span>([
                    {'{\n'}{'  '}type: <span className="text-green-600">'web'</span>, 
                    {'  '}url: <span className="text-green-600">'https://docs.example.com'</span>
                    {'\n}'}
                  ])
                  .<span className="text-blue-600">createChain</span>();{'\n\n'}
                <span className="text-blue-600">// Run the application</span>{'\n'}
                <span className="text-purple-600">const</span> result = <span className="text-purple-600">await</span> chain.<span className="text-blue-600">run</span>(<span className="text-green-600">'Explain how to implement feature X'</span>);{'\n'}
                console.<span className="text-blue-600">log</span>(result);
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;