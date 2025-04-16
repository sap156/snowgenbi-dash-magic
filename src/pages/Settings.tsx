
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  Cloud,
  Shield,
  Bell,
  Palette,
  User,
  Save,
  Settings2,
  KeyRound,
  Database,
  Lock,
  RefreshCw
} from 'lucide-react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  const [apiTimeout, setApiTimeout] = useState(30);
  const [maxRows, setMaxRows] = useState(1000);
  const [dataRefreshInterval, setDataRefreshInterval] = useState('30');
  const [defaultVisualization, setDefaultVisualization] = useState('auto');
  const [language, setLanguage] = useState('en');

  return (
    <PageLayout title="Settings">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Application Settings</h1>
          <p className="text-muted-foreground">
            Configure your SnowGenBI experience
          </p>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general" className="flex items-center gap-1">
              <Settings2 className="h-4 w-4" />
              <span>General</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-1">
              <Palette className="h-4 w-4" />
              <span>Appearance</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-1">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              <span>Data</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Data Boss" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" defaultValue="admin@snowgenbi.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="timezone" className="flex-1">Timezone</Label>
                  <Select defaultValue="utc-8">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                      <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                      <SelectItem value="utc+0">UTC</SelectItem>
                      <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                      <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>
                  Customize how SnowGenBI looks and feels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark mode for the application
                    </p>
                  </div>
                  <Switch
                    id="dark-mode"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Chart Color Theme</Label>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="rounded-md border-2 border-primary p-2 text-center">
                      <div className="mx-auto mb-2 h-8 rounded-md bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <span className="text-xs">Snow Theme</span>
                    </div>
                    <div className="rounded-md border p-2 text-center">
                      <div className="mx-auto mb-2 h-8 rounded-md bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                      <span className="text-xs">Nature</span>
                    </div>
                    <div className="rounded-md border p-2 text-center">
                      <div className="mx-auto mb-2 h-8 rounded-md bg-gradient-to-r from-orange-500 to-red-500"></div>
                      <span className="text-xs">Sunset</span>
                    </div>
                    <div className="rounded-md border p-2 text-center">
                      <div className="mx-auto mb-2 h-8 rounded-md bg-gradient-to-r from-gray-500 to-gray-700"></div>
                      <span className="text-xs">Monochrome</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label>Dashboard Density</Label>
                    <span className="text-sm text-muted-foreground">Compact</span>
                  </div>
                  <Slider defaultValue={[1]} max={2} step={1} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="default-vis">Default Visualization Type</Label>
                  <Select
                    value={defaultVisualization}
                    onValueChange={setDefaultVisualization}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select default visualization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto (AI Selected)</SelectItem>
                      <SelectItem value="bar">Bar Chart</SelectItem>
                      <SelectItem value="line">Line Chart</SelectItem>
                      <SelectItem value="pie">Pie Chart</SelectItem>
                      <SelectItem value="table">Table View</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how and when you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="app-notifications">In-App Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications within the application
                    </p>
                  </div>
                  <Switch
                    id="app-notifications"
                    checked={appNotifications}
                    onCheckedChange={setAppNotifications}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Notify Me About</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" defaultChecked />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        New AI-generated insights
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms2" defaultChecked />
                      <label
                        htmlFor="terms2"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Shared dashboards and reports
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms3" />
                      <label
                        htmlFor="terms3"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        System updates and maintenance
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms4" defaultChecked />
                      <label
                        htmlFor="terms4"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Data anomalies and alerts
                      </label>
                    </div>
                  </div>
                </div>

                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Settings</CardTitle>
                <CardDescription>
                  Configure how SnowGenBI interacts with your data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="refresh-interval">Data Refresh Interval</Label>
                  <Select
                    value={dataRefreshInterval}
                    onValueChange={setDataRefreshInterval}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select interval" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Manual refresh only</SelectItem>
                      <SelectItem value="5">Every 5 minutes</SelectItem>
                      <SelectItem value="15">Every 15 minutes</SelectItem>
                      <SelectItem value="30">Every 30 minutes</SelectItem>
                      <SelectItem value="60">Every hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="max-rows">Maximum Rows for Query Results</Label>
                    <span className="text-sm text-muted-foreground">{maxRows} rows</span>
                  </div>
                  <Slider
                    id="max-rows"
                    defaultValue={[1000]}
                    max={10000}
                    step={1000}
                    onValueChange={([value]) => setMaxRows(value)}
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="api-timeout">API Timeout (seconds)</Label>
                    <span className="text-sm text-muted-foreground">{apiTimeout} seconds</span>
                  </div>
                  <Slider
                    id="api-timeout"
                    defaultValue={[30]}
                    max={120}
                    step={10}
                    onValueChange={([value]) => setApiTimeout(value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cache Query Results</Label>
                    <p className="text-sm text-muted-foreground">
                      Store query results for faster dashboard loading
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="rounded-md bg-muted p-3">
                  <div className="flex items-start space-x-2">
                    <Cloud className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Snowflake Query Credits</p>
                      <p className="text-sm text-muted-foreground">
                        Your queries will use credits from your Snowflake account based on the warehouse size and query complexity.
                      </p>
                    </div>
                  </div>
                </div>

                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your security preferences and API keys
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>API Keys</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="space-y-0.5">
                        <div className="font-medium">Snowflake MCP Key</div>
                        <div className="text-sm text-muted-foreground">Created on May 10, 2024</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <RefreshCw className="mr-2 h-3 w-3" />
                          Rotate
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive">
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline">
                    <KeyRound className="mr-2 h-4 w-4" />
                    Generate New API Key
                  </Button>
                </div>

                <div className="space-y-3">
                  <Label>Authorized Domains</Label>
                  <div className="rounded-md border p-2">
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">*.snowgenbi.com</span>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        &times;
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">analytics.mycompany.com</span>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        &times;
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Add a new domain" />
                    <Button>Add</Button>
                  </div>
                </div>

                <div className="rounded-md bg-muted p-3">
                  <div className="flex items-start space-x-2">
                    <Lock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Security Note</p>
                      <p className="text-sm text-muted-foreground">
                        SnowGenBI uses Snowflake MCP protocol to securely access your data without exposing credentials.
                        Your data stays protected within your Snowflake account.
                      </p>
                    </div>
                  </div>
                </div>

                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default Settings;
