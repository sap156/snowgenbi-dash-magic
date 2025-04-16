
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { QueryInput } from '@/components/dashboard/QueryInput';
import { ChartTile } from '@/components/dashboard/ChartTile';
import { TableTile } from '@/components/dashboard/TableTile';
import { QueryAnalysis } from '@/components/dashboard/QueryAnalysis';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LayoutDashboard, Share2, Download, PlusCircle } from 'lucide-react';

// Sample data for demonstration
const sampleData = {
  monthlySales: [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
    { name: 'Aug', sales: 4000 },
    { name: 'Sep', sales: 4500 },
    { name: 'Oct', sales: 6000 },
    { name: 'Nov', sales: 5500 },
    { name: 'Dec', sales: 7000 },
  ],
  productSales: [
    { name: 'Product A', value: 400 },
    { name: 'Product B', value: 300 },
    { name: 'Product C', value: 300 },
    { name: 'Product D', value: 200 },
    { name: 'Product E', value: 100 },
  ],
  regionSales: [
    { name: 'North', value: 4000 },
    { name: 'South', value: 3000 },
    { name: 'East', value: 2000 },
    { name: 'West', value: 2780 },
    { name: 'Central', value: 1890 },
  ],
  customers: [
    { id: 1, name: 'John Doe', email: 'john@example.com', totalSpent: 1250.40, lastPurchase: '2023-05-12' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', totalSpent: 3420.10, lastPurchase: '2023-05-10' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', totalSpent: 890.25, lastPurchase: '2023-05-08' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', totalSpent: 5250.75, lastPurchase: '2023-05-15' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', totalSpent: 1850.60, lastPurchase: '2023-05-11' },
    { id: 6, name: 'Emma Davis', email: 'emma@example.com', totalSpent: 4120.30, lastPurchase: '2023-05-09' },
    { id: 7, name: 'Frank Miller', email: 'frank@example.com', totalSpent: 3080.90, lastPurchase: '2023-05-14' },
    { id: 8, name: 'Grace Taylor', email: 'grace@example.com', totalSpent: 2340.20, lastPurchase: '2023-05-07' },
  ],
};

const customerColumns = [
  { key: 'name', header: 'Name' },
  { key: 'email', header: 'Email' },
  { 
    key: 'totalSpent', 
    header: 'Total Spent',
    cell: (row: any) => `$${row.totalSpent.toFixed(2)}` 
  },
  { key: 'lastPurchase', header: 'Last Purchase' },
];

const Dashboards = () => {
  const [isQuerying, setIsQuerying] = useState(false);
  const [showQueryResults, setShowQueryResults] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');

  const handleSubmitQuery = (query: string) => {
    setIsQuerying(true);
    setCurrentQuery(query);
    
    // Simulate API call to process query
    setTimeout(() => {
      setIsQuerying(false);
      setShowQueryResults(true);
    }, 2000);
  };

  return (
    <PageLayout title="Dashboards">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Ask Questions & Build Dashboards</h1>
            <p className="text-muted-foreground">
              Use natural language to analyze your data and create visualizations
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Dashboard
            </Button>
          </div>
        </div>

        <QueryInput onSubmitQuery={handleSubmitQuery} isLoading={isQuerying} />

        {showQueryResults && (
          <div className="space-y-6">
            <QueryAnalysis
              query={currentQuery}
              sql={`SELECT 
  product_name,
  SUM(sales_amount) as total_sales
FROM sales
JOIN products ON sales.product_id = products.id
WHERE sale_date BETWEEN '2023-01-01' AND '2023-03-31'
GROUP BY product_name
ORDER BY total_sales DESC
LIMIT 5;`}
              explanation="This query analyzes your top-selling products during Q1 2023. It joins the sales and products tables, sums up the sales amounts for each product, and returns the top 5 products by total sales."
              insights={[
                "Product C showed a 45% increase compared to the previous quarter.",
                "The top 5 products account for 78% of total sales in Q1.",
                "Regional differences: Product A performed best in the West region."
              ]}
            />

            <div>
              <h2 className="mb-4 text-xl font-semibold">Analysis Results</h2>
              <Tabs defaultValue="charts">
                <TabsList>
                  <TabsTrigger value="charts" className="flex items-center gap-1">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Charts</span>
                  </TabsTrigger>
                  <TabsTrigger value="table">Table</TabsTrigger>
                </TabsList>
                <TabsContent value="charts" className="mt-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <ChartTile 
                      title="Top Products by Sales (Q1 2023)"
                      type="bar"
                      data={sampleData.productSales}
                      dataKey="value"
                    />
                    <ChartTile 
                      title="Sales by Region (Q1 2023)"
                      type="pie"
                      data={sampleData.regionSales}
                      dataKey="value"
                    />
                    <ChartTile 
                      title="Monthly Sales Trend (2023)"
                      type="line"
                      data={sampleData.monthlySales}
                      dataKey="sales"
                      className="md:col-span-2"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="table" className="mt-4">
                  <TableTile 
                    title="Customer Purchase Data"
                    data={sampleData.customers}
                    columns={customerColumns}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
        
        {!showQueryResults && (
          <div className="mt-12 rounded-lg border-2 border-dashed p-8 text-center">
            <LayoutDashboard className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-medium">No dashboards yet</h3>
            <p className="mx-auto mb-4 max-w-md text-muted-foreground">
              Ask a question about your data above to generate visualizations and insights.
            </p>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Dashboard Manually
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Dashboards;
