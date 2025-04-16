
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Share2, Link2, Mail, Calendar, Globe, Users, Lock, Shield, Copy, Check, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface SharedItemProps {
  title: string;
  type: string;
  sharedWith: string;
  sharedDate: string;
  status: 'active' | 'expired';
}

const sharedItems: SharedItemProps[] = [
  {
    title: 'Q1 Sales Performance',
    type: 'Dashboard',
    sharedWith: 'Executive Team',
    sharedDate: 'May 10, 2024',
    status: 'active',
  },
  {
    title: 'Monthly Revenue Analysis',
    type: 'Chart',
    sharedWith: 'Finance Department',
    sharedDate: 'May 9, 2024',
    status: 'active',
  },
  {
    title: 'Customer Retention Metrics',
    type: 'Report',
    sharedWith: 'Product Team',
    sharedDate: 'May 5, 2024',
    status: 'active',
  },
  {
    title: 'Marketing Campaign Analysis',
    type: 'Dashboard',
    sharedWith: 'Marketing Team',
    sharedDate: 'April 28, 2024',
    status: 'expired',
  },
  {
    title: 'Regional Sales Report',
    type: 'Report',
    sharedWith: 'Sales Management',
    sharedDate: 'April 22, 2024',
    status: 'expired',
  },
];

const Sharing = () => {
  const [linkCopied, setLinkCopied] = useState(false);
  
  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <PageLayout title="Share & Collaborate">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Share Your Insights</h1>
          <p className="text-muted-foreground">
            Share dashboards, charts, and reports with your team
          </p>
        </div>

        <Tabs defaultValue="share" className="space-y-4">
          <TabsList>
            <TabsTrigger value="share" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              <span>Share New</span>
            </TabsTrigger>
            <TabsTrigger value="manage" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Manage Shared</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="share" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Share Dashboard or Insight</CardTitle>
                <CardDescription>
                  Create a shareable link or invite team members directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="share-item">Select Item to Share</Label>
                  <Select defaultValue="sales-dashboard">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an item to share" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales-dashboard">Q1 Sales Performance Dashboard</SelectItem>
                      <SelectItem value="revenue-chart">Monthly Revenue Chart</SelectItem>
                      <SelectItem value="customer-report">Customer Retention Report</SelectItem>
                      <SelectItem value="marketing-analysis">Marketing Campaign Analysis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Sharing Options</Label>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Link2 className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Anyone with the link</div>
                          <div className="text-sm text-muted-foreground">
                            Share via public link (view only)
                          </div>
                        </div>
                      </div>
                      <Switch id="link-share" />
                    </div>

                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Email Invitation</div>
                          <div className="text-sm text-muted-foreground">
                            Invite specific people to view or edit
                          </div>
                        </div>
                      </div>
                      <Switch id="email-invite" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Schedule Reports</div>
                          <div className="text-sm text-muted-foreground">
                            Send automated updates on a schedule
                          </div>
                        </div>
                      </div>
                      <Switch id="schedule" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emails">Email Addresses</Label>
                  <div className="flex gap-2">
                    <Input id="emails" placeholder="Enter email addresses separated by commas" />
                    <Select defaultValue="view">
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Permissions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="view">View</SelectItem>
                        <SelectItem value="edit">Edit</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Add a Message (Optional)</Label>
                  <textarea
                    id="message"
                    className="h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Add a message to accompany your invitation"
                  ></textarea>
                </div>

                <div className="rounded-md bg-muted p-3">
                  <div className="flex items-start gap-2">
                    <Shield className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Security Note:</span>{" "}
                        Shared dashboards never expose raw data or credentials. Recipients will see
                        visualizations but cannot access underlying data tables or connection details.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Sharing Link</CardTitle>
                <CardDescription>
                  This link will provide view-only access to Q1 Sales Performance Dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Globe className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      readOnly
                      className="pl-9"
                      value="https://snowgenbi.com/share/dashboard/q1-sales-123456"
                    />
                  </div>
                  <Button variant="outline" size="icon" onClick={handleCopyLink}>
                    {linkCopied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Expires in 30 days</span>
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="h-4 w-4" />
                  <span>View only</span>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="manage" className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search shared items..." />
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Share
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Manage Shared Dashboards and Reports</CardTitle>
                <CardDescription>
                  View and manage items you've shared with others
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sharedItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-between gap-4 rounded-md border p-4 sm:flex-row sm:items-center"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{item.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-3">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>Shared with: {item.sharedWith}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Date: {item.sharedDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={item.status === 'active' ? 'default' : 'outline'}
                          className={
                            item.status === 'active'
                              ? 'bg-green-500 text-white hover:bg-green-500/90'
                              : 'text-muted-foreground'
                          }
                        >
                          {item.status === 'active' ? 'Active' : 'Expired'}
                        </Badge>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            Revoke
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Sharing;
