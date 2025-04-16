
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Clock, BarChart2, PieChart, ArrowRight, Search, MessagesSquare, MessageSquare, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HistoryItemProps {
  query: string;
  date: string;
  time: string;
  visualizationType?: string;
  queryType?: string;
  result?: string;
}

const HistoryItem = ({ query, date, time, visualizationType, queryType, result }: HistoryItemProps) => (
  <Card className="transition-all hover:shadow-md">
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-1">
            <MessageSquare className="h-4 w-4 text-primary" />
          </div>
          <Badge variant="outline" className="bg-secondary/10 text-secondary">
            {queryType || 'Analysis'}
          </Badge>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="mr-1 h-3 w-3" />
          {date} • 
          <Clock className="mx-1 h-3 w-3" />
          {time}
        </div>
      </div>
      <CardTitle className="text-base font-medium">
        {query}
      </CardTitle>
      {result && <CardDescription>{result}</CardDescription>}
    </CardHeader>
    <CardContent className="flex items-center justify-between pb-4 pt-0">
      <div className="flex items-center gap-2">
        {visualizationType === 'bar' && <BarChart2 className="h-4 w-4 text-muted-foreground" />}
        {visualizationType === 'pie' && <PieChart className="h-4 w-4 text-muted-foreground" />}
        <span className="text-xs text-muted-foreground">
          {visualizationType === 'bar' && 'Bar Chart'}
          {visualizationType === 'pie' && 'Pie Chart'}
          {!visualizationType && 'Table View'}
        </span>
      </div>
      <Button variant="ghost" size="sm" className="gap-1 text-xs">
        View
        <ArrowRight className="h-3 w-3" />
      </Button>
    </CardContent>
  </Card>
);

const historyItems: HistoryItemProps[] = [
  {
    query: 'What were our top-selling products last quarter?',
    date: 'May 15, 2024',
    time: '14:32',
    visualizationType: 'bar',
    queryType: 'Sales Analysis',
    result: 'Retrieved top 5 products by revenue for Q1 2024'
  },
  {
    query: 'Show monthly revenue trends for the past year',
    date: 'May 15, 2024',
    time: '11:45',
    visualizationType: 'bar',
    queryType: 'Revenue Analysis',
    result: 'Generated monthly revenue chart from May 2023 to April 2024'
  },
  {
    query: 'Compare sales performance across regions',
    date: 'May 14, 2024',
    time: '16:20',
    visualizationType: 'pie',
    queryType: 'Regional Analysis',
    result: 'Compared sales across 5 regions with YoY growth metrics'
  },
  {
    query: 'What\'s our customer retention rate?',
    date: 'May 14, 2024',
    time: '10:15',
    queryType: 'Customer Analysis',
    result: 'Calculated overall retention rate and segmented by customer type'
  },
  {
    query: 'Show me the most profitable products',
    date: 'May 13, 2024',
    time: '15:40',
    visualizationType: 'bar',
    queryType: 'Profitability Analysis',
    result: 'Retrieved top 10 products by profit margin'
  },
  {
    query: 'Analyze customer conversion funnel',
    date: 'May 13, 2024',
    time: '13:22',
    queryType: 'Funnel Analysis',
    result: 'Generated conversion rates for 5 stages of customer journey'
  },
  {
    query: 'Which marketing campaigns had the highest ROI?',
    date: 'May 12, 2024',
    time: '09:50',
    visualizationType: 'bar',
    queryType: 'Marketing Analysis',
    result: 'Compared ROI across 8 marketing campaigns from Q1 2024'
  },
  {
    query: 'What\'s the average deal size by industry?',
    date: 'May 12, 2024',
    time: '08:15',
    visualizationType: 'pie',
    queryType: 'Sales Analysis',
    result: 'Calculated average deal size across 6 industry verticals'
  },
];

const History = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = historyItems.filter(item => {
    const matchesSearch = item.query.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.queryType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.result?.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'charts') return matchesSearch && (item.visualizationType === 'bar' || item.visualizationType === 'pie');
    if (activeTab === 'tables') return matchesSearch && !item.visualizationType;
    
    return matchesSearch;
  });

  return (
    <PageLayout title="Query History">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Query History</h1>
          <p className="text-muted-foreground">
            View and reuse your previous data explorations
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search queries..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="shrink-0">
            <MessagesSquare className="mr-2 h-4 w-4" />
            New Query
          </Button>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Queries</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="tables">Tables</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            {filteredItems.length === 0 ? (
              <div className="mt-10 text-center">
                <MessageSquare className="mx-auto h-10 w-10 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No matching queries</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item, i) => (
                  <HistoryItem key={i} {...item} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="charts" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems
                .filter(item => item.visualizationType === 'bar' || item.visualizationType === 'pie')
                .map((item, i) => (
                  <HistoryItem key={i} {...item} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tables" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems
                .filter(item => !item.visualizationType)
                .map((item, i) => (
                  <HistoryItem key={i} {...item} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="favorites" className="mt-6">
            <div className="mt-10 text-center">
              <MessageSquare className="mx-auto h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No favorite queries yet</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mark queries as favorites to find them quickly later
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default History;
