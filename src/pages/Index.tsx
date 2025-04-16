
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
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-snowbi-600 to-insight-600 py-16 text-white shadow-xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              SnowGenBI
            </h1>
            <p className="mb-6 text-xl md:text-2xl">
              Ask your data. Build dashboards instantly.
            </p>
            <p className="mb-8 max-w-2xl mx-auto">
              Use natural language to query your Snowflake data. Our AI automatically generates the right visualizations and insights, powered by Snowflake MCP.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-white text-insight-600 hover:bg-white/90"
              >
                <Link to="/dashboards">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/connections">
                  Connect to Snowflake
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground">
              Transform your data into insights in just a few steps
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="bg-primary/10 p-4">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium">1. Connect</h3>
                <p className="text-muted-foreground">
                  Securely connect to your Snowflake instance using the MCP protocol for live data access.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-secondary/10 p-4">
                <MessagesSquare className="h-10 w-10 text-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium">2. Ask</h3>
                <p className="text-muted-foreground">
                  Ask questions in plain English. Our AI understands your business context and data structure.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="bg-accent/10 p-4">
                <BarChart4 className="h-10 w-10 text-accent" />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-medium">3. Visualize</h3>
                <p className="text-muted-foreground">
                  Automatically generate the most insightful visualizations based on your query and data.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="rounded-lg bg-muted p-8">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Key Features</h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Live Snowflake Connection</h3>
                <p className="text-sm text-muted-foreground">
                  Query your Snowflake instance in real time using MCP
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <MessagesSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Natural Language Interface</h3>
                <p className="text-sm text-muted-foreground">
                  Ask questions in plain English without knowing SQL
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Automatic Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered explanations of trends and anomalies
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <BarChart4 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Smart Visualizations</h3>
                <p className="text-sm text-muted-foreground">
                  The right chart type is automatically selected based on your data
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-10 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Transform Your Data Experience?</h2>
          <Button 
            size="lg" 
            asChild
            className="bg-gradient-to-r from-primary to-accent text-white"
          >
            <Link to="/connections">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </PageLayout>
  );
};

export default Index;
