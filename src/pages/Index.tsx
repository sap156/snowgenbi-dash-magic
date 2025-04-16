
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  BarChart4, 
  Database, 
  MessagesSquare, 
  ArrowRight, 
  Lightbulb, 
  Sparkles 
} from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      <div className="container mx-auto space-y-10 py-6">
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-xl">
          <div className="absolute inset-0 bg-[url('/public/lovable-uploads/b6cc8c8f-90cf-4e37-8e19-a601a400dee6.png')] opacity-10 bg-cover bg-center"></div>
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-white/90">
              SnowGenBI
            </h1>
            <p className="mb-6 text-xl md:text-2xl text-white/80">
              Transform Data with AI-Powered Insights
            </p>
            <p className="mb-8 max-w-2xl mx-auto text-white/70 text-base md:text-lg">
              Unleash the power of your Snowflake data through natural language queries. Our AI generates intelligent visualizations and actionable insights in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-white text-blue-900 hover:bg-white/90"
              >
                <Link to="/dashboards">
                  Create Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-white/70 text-white hover:bg-white/10"
              >
                <Link to="/connections">
                  Connect Snowflake
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">How SnowGenBI Works</h2>
            <p className="text-gray-600">
              Transforming complex data into actionable insights
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-4">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium text-gray-800">1. Connect</h3>
                <p className="text-gray-600">
                  Securely link your Snowflake data using advanced MCP protocol
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-secondary/10 p-4">
                <MessagesSquare className="h-10 w-10 text-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium text-gray-800">2. Ask</h3>
                <p className="text-gray-600">
                  Use natural language to query your data effortlessly
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-4">
                <BarChart4 className="h-10 w-10 text-accent" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium text-gray-800">3. Visualize</h3>
                <p className="text-gray-600">
                  AI generates intelligent, customizable dashboards instantly
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="rounded-lg bg-blue-50 p-8">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3 items-center">
              <div className="rounded-full bg-primary/10 p-2">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Live Snowflake Connection</h3>
                <p className="text-sm text-gray-600">
                  Real-time data querying with MCP protocol
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-center">
              <div className="rounded-full bg-primary/10 p-2">
                <MessagesSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Natural Language Interface</h3>
                <p className="text-sm text-gray-600">
                  AI-powered query understanding
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-center">
              <div className="rounded-full bg-primary/10 p-2">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Intelligent Insights</h3>
                <p className="text-sm text-gray-600">
                  Automatic trend and anomaly detection
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 items-center">
              <div className="rounded-full bg-primary/10 p-2">
                <BarChart4 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Smart Visualizations</h3>
                <p className="text-sm text-gray-600">
                  Adaptive chart generation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Transform Your Data Journey</h2>
          <Button 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900"
          >
            <Link to="/connections">
              Start Your AI-Powered Analytics
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Index;
