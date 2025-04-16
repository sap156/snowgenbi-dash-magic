
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Info, Lightbulb, MessageSquareText } from 'lucide-react';

interface QueryAnalysisProps {
  query: string;
  sql?: string;
  explanation?: string;
  insights?: string[];
}

export function QueryAnalysis({ query, sql, explanation, insights }: QueryAnalysisProps) {
  const [activeCopy, setActiveCopy] = useState<string | null>(null);

  const handleCopyClick = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setActiveCopy(type);
    setTimeout(() => setActiveCopy(null), 2000);
  };

  return (
    <Card className="border border-border shadow-sm">
      <CardContent className="p-0">
        <Tabs defaultValue="explanation" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="explanation" className="flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>Explanation</span>
            </TabsTrigger>
            <TabsTrigger value="query" className="flex items-center gap-1">
              <Code className="h-4 w-4" />
              <span>SQL Query</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-1">
              <Lightbulb className="h-4 w-4" />
              <span>Insights</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explanation" className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2">
                <MessageSquareText className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Query Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Your question: "{query}"
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyClick(explanation || '', 'explanation')}
                className="text-xs"
              >
                {activeCopy === 'explanation' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <div className="mt-3 text-sm">
              <p>{explanation || 'No explanation available'}</p>
            </div>
          </TabsContent>

          <TabsContent value="query" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">Generated SQL</h3>
                <p className="text-sm text-muted-foreground">
                  The SQL query used to answer your question
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyClick(sql || '', 'sql')}
                className="text-xs"
              >
                {activeCopy === 'sql' ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <div className="mt-3">
              <pre className="overflow-x-auto rounded-md bg-muted p-2 text-xs">
                <code>{sql || '-- No SQL query available'}</code>
              </pre>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="p-4">
            <div>
              <h3 className="font-medium">Key Insights</h3>
              <p className="text-sm text-muted-foreground">
                Important findings from your data
              </p>
            </div>
            <div className="mt-3">
              {insights && insights.length > 0 ? (
                <ul className="space-y-2 text-sm">
                  {insights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lightbulb className="mt-0.5 h-4 w-4 text-accent" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No insights available</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
