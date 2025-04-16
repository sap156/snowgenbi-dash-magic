
import { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface QueryInputProps {
  onSubmitQuery: (query: string) => void;
  isLoading?: boolean;
}

export function QueryInput({ onSubmitQuery, isLoading = false }: QueryInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim()) {
      onSubmitQuery(query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const exampleQueries = [
    "What were our top-selling products last quarter?",
    "Show monthly revenue trends for the past year",
    "Compare sales performance across regions",
    "What's our customer retention rate?"
  ];

  return (
    <Card className="border-2 border-muted-foreground/20 shadow-lg">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <Textarea
              placeholder="Ask a question about your data..."
              className="min-h-24 resize-none pr-12 text-base"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button
              size="icon"
              className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-primary text-primary-foreground"
              onClick={handleSubmit}
              disabled={isLoading || !query.trim()}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          {!query && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Try asking</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto rounded-full border-primary/20 py-1 text-xs"
                    onClick={() => setQuery(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
