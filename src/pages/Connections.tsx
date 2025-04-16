
import { PageLayout } from '@/components/layout/PageLayout';
import { SnowflakeConnect } from '@/components/dashboard/SnowflakeConnect';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Shield, Lock, Plus, CircleCheck } from 'lucide-react';

const Connections = () => {
  return (
    <PageLayout title="Data Connections">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Connect to Your Data</h1>
          <p className="text-muted-foreground">
            Configure connections to your Snowflake databases
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <SnowflakeConnect />
          </div>
          
          <div className="space-y-6 md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <span>Existing Connections</span>
                </CardTitle>
                <CardDescription>
                  Your configured data connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-snowbi-100 p-2">
                        <Database className="h-5 w-5 text-snowbi-700" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">SALES_ANALYTICS</h3>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Active
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          my-org.us-east-1.snowflakecomputing.com
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline" className="text-destructive">
                        Disconnect
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-insight-100 p-2">
                        <Database className="h-5 w-5 text-insight-700" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">MARKETING_DATA</h3>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700">
                            Idle
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          marketing-prod.us-west-2.snowflakecomputing.com
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline" className="text-destructive">
                        Disconnect
                      </Button>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Connection
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Security & Compliance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CircleCheck className="h-4 w-4 text-green-600" />
                    <span>All connections are encrypted with TLS 1.3</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CircleCheck className="h-4 w-4 text-green-600" />
                    <span>Credentials are never stored in the browser</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CircleCheck className="h-4 w-4 text-green-600" />
                    <span>MCP protocol ensures secure data transmission</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CircleCheck className="h-4 w-4 text-green-600" />
                    <span>SOC 2 and GDPR compliant</span>
                  </div>
                  <div className="mt-4 rounded-md bg-muted p-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Lock className="mt-0.5 h-4 w-4 text-primary" />
                      <div>
                        <p className="font-medium">Connection Security</p>
                        <p className="text-xs text-muted-foreground">
                          SnowGenBI uses Snowflake MCP (Model Context Protocol) to securely access your data
                          without exposing sensitive information. Your data stays protected within your Snowflake
                          account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Connections;
