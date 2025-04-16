
import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell
} from 'recharts';
import { DashboardTile } from './DashboardTile';

type ChartType = 'line' | 'bar' | 'pie' | 'area';

interface ChartTileProps {
  title: string;
  description?: string;
  data: any[];
  type?: ChartType;
  dataKey: string;
  xAxisKey?: string;
  loading?: boolean;
  className?: string;
}

// Sample color scheme
const COLORS = ['#4a51e8', '#9333ea', '#8098f9', '#c084fc', '#6374f4'];

export function ChartTile({
  title,
  description,
  data,
  type = 'line',
  dataKey,
  xAxisKey = 'name',
  loading = false,
  className,
}: ChartTileProps) {
  const [chartType, setChartType] = useState<ChartType>(type);

  const handleRefresh = () => {
    // In a real app, this would refresh the data
    console.log('Refreshing chart data');
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={dataKey} fill="#4a51e8" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey={dataKey}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'line':
      default:
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xAxisKey} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={dataKey} stroke="#4a51e8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <DashboardTile
      title={title}
      description={description}
      onRefresh={handleRefresh}
      onMaximize={() => console.log('Maximize chart')}
      onDownload={() => console.log('Download chart')}
      isLoading={loading}
      className={className}
    >
      {renderChart()}
    </DashboardTile>
  );
}
