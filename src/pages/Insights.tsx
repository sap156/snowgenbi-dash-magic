
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTile } from '@/components/dashboard/ChartTile';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Sparkles, CalendarDays, BarChart3, Star, Download } from 'lucide-react';

// Sample data for demonstration
const sampleData = {
  monthlyRevenue: [
    { name: 'Jan', value: 4200 },
    { name: 'Feb', value: 3800 },
    { name: 'Mar', value: 5100 },
    { name: 'Apr', value: 4800 },
    { name: 'May', value: 5600 },
    { name: 'Jun', value: 5900 },
  ],
  customerSegments: [
    { name: 'Enterprise', value: 45 },
    { name: 'SMB', value: 30 },
    { name: 'Startup', value: 15 },
    { name: 'Individual', value: 10 },
  ],
  regionPerformance: [
    { name: 'North America', value: 42 },
    { name: 'Europe', value: 28 },
    { name: 'Asia Pacific', value: 18 },
    { name: 'Latin America', value: 8 },
    { name: 'Middle East', value: 4 },
  ],
};

interface InsightCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  children?: React.ReactNode;
}

const InsightCard = ({ title, description, category, date, children }: InsightCardProps) => (
  <Card className="overflow-hidden">
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <Badge variant="outline" className="mb-1 bg-secondary/10 text-secondary">
          {category}
        </Badge>
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="mr-1 h-3 w-3" />
          {date}
        </div>
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const Insights = () => {
  const [insightFilter, setInsightFilter] = useState('all');

  return (
    <PageLayout title="AI Insights">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">AI-Generated Insights</h1>
            <p className="text-muted-foreground">
              Discover actionable insights automatically generated from your data
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export All
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Generate New
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={insightFilter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setInsightFilter('all')}
          >
            All
          </Button>
          <Button
            variant={insightFilter === 'trends' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setInsightFilter('trends')}
          >
            <BarChart3 className="mr-1 h-4 w-4" />
            Trends
          </Button>
          <Button
            variant={insightFilter === 'anomalies' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setInsightFilter('anomalies')}
          >
            <Sparkles className="mr-1 h-4 w-4" />
            Anomalies
          </Button>
          <Button
            variant={insightFilter === 'recommendations' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setInsightFilter('recommendations')}
          >
            <Star className="mr-1 h-4 w-4" />
            Recommendations
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InsightCard
            title="Revenue Growth Acceleration"
            description="Monthly revenue growth shows increasing momentum."
            category="Trend"
            date="Generated on May 15, 2024"
          >
            <div className="space-y-4">
              <ChartTile
                title="Monthly Revenue (2024)"
                data={sampleData.monthlyRevenue}
                type="line"
                dataKey="value"
                className="border-0 shadow-none"
              />
              <div className="rounded-md bg-muted p-3 text-sm">
                <div className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Key Finding</p>
                    <p className="text-xs text-muted-foreground">
                      Revenue growth rate increased from 8% in Q1 to 15% in Q2 2024. This positive trend correlates with the launch of premium features in March.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InsightCard>

          <InsightCard
            title="Customer Segment Analysis"
            description="Enterprise segment shows strongest growth potential."
            category="Analysis"
            date="Generated on May 14, 2024"
          >
            <div className="space-y-4">
              <ChartTile
                title="Revenue by Customer Segment"
                data={sampleData.customerSegments}
                type="pie"
                dataKey="value"
                className="border-0 shadow-none"
              />
              <div className="rounded-md bg-muted p-3 text-sm">
                <div className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Key Finding</p>
                    <p className="text-xs text-muted-foreground">
                      Enterprise customers have 3.5x higher lifetime value than SMB customers, but customer acquisition costs are only 2x higher.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InsightCard>

          <InsightCard
            title="Regional Performance Anomaly"
            description="Unexpected sales spike in Asia Pacific region."
            category="Anomaly"
            date="Generated on May 13, 2024"
          >
            <div className="space-y-4">
              <ChartTile
                title="Sales by Region"
                data={sampleData.regionPerformance}
                type="bar"
                dataKey="value"
                className="border-0 shadow-none"
              />
              <div className="rounded-md bg-muted p-3 text-sm">
                <div className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Key Finding</p>
                    <p className="text-xs text-muted-foreground">
                      Asia Pacific region showed a 42% YoY growth compared to expected 15%. Further analysis reveals this is driven by enterprise deals in Australia and Singapore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InsightCard>

          <InsightCard
            title="Product Feature Impact"
            description="Analysis of recent feature launches on usage metrics."
            category="Recommendation"
            date="Generated on May 12, 2024"
          >
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                <p>
                  <span className="font-medium">Finding:</span> Advanced analytics feature adoption is 58% higher than projected.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                <p>
                  <span className="font-medium">Finding:</span> Users who activate this feature show 3.2x higher retention.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-4 w-4 text-primary" />
                <p>
                  <span className="font-medium">Recommendation:</span> Prioritize advanced analytics in onboarding flow to increase activation.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-4 w-4 text-primary" />
                <p>
                  <span className="font-medium">Recommendation:</span> Create educational content targeting users who haven't yet activated this feature.
                </p>
              </div>
            </div>
          </InsightCard>

          <InsightCard
            title="Churn Risk Assessment"
            description="Identification of accounts at risk of churn."
            category="Alert"
            date="Generated on May 11, 2024"
          >
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                <p>
                  <span className="font-medium">Finding:</span> 12 enterprise accounts showing decreased usage patterns over 30 days.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                <p>
                  <span className="font-medium">Finding:</span> Common factor is limited adoption of new dashboard features.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-4 w-4 text-primary" />
                <p>
                  <span className="font-medium">Recommendation:</span> Schedule targeted training sessions for these accounts.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-4 w-4 text-primary" />
                <p>
                  <span className="font-medium">Recommendation:</span> Offer extended support hours for key stakeholders.
                </p>
              </div>
            </div>
          </InsightCard>

          <Card className="flex flex-col items-center justify-center border-2 border-dashed p-6 text-center">
            <Sparkles className="mb-4 h-8 w-8 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-medium">Generate Custom Insight</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Ask a specific question about your data to generate a new insight
            </p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Generate
            </Button>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Insights;
