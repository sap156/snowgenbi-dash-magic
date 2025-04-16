
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Database, KeyRound, ServerCrash, CheckCircle, AlertCircle } from 'lucide-react';

type ConnectionStatus = 'idle' | 'connecting' | 'success' | 'error';

export function SnowflakeConnect() {
  const [accountId, setAccountId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [database, setDatabase] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [status, setStatus] = useState<ConnectionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConnect = async () => {
    // In a real app, this would make an actual connection to Snowflake
    // For now we'll just simulate the connection process
    
    setStatus('connecting');
    setErrorMessage('');
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (accountId && username && password && database && warehouse) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('All fields are required to establish a connection');
      }
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md border-2 border-muted shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          <CardTitle className="text-xl">Connect to Snowflake</CardTitle>
        </div>
        <CardDescription>
          Enter your Snowflake credentials to connect using MCP
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="account-id">Account Identifier</Label>
          <Input
            id="account-id"
            placeholder="yourorg-account"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="database">Database</Label>
          <Input
            id="database"
            placeholder="SNOWFLAKE_SAMPLE_DATA"
            value={database}
            onChange={(e) => setDatabase(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="warehouse">Warehouse</Label>
          <Input
            id="warehouse"
            placeholder="COMPUTE_WH"
            value={warehouse}
            onChange={(e) => setWarehouse(e.target.value)}
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 rounded-md bg-destructive/10 p-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {errorMessage || 'Failed to connect. Please check your credentials.'}
          </div>
        )}

        {status === 'success' && (
          <div className="flex items-center gap-2 rounded-md bg-green-100 p-2 text-sm text-green-800">
            <CheckCircle className="h-4 w-4" />
            Connection successful!
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleConnect}
          disabled={status === 'connecting'}
        >
          {status === 'connecting' ? (
            <>
              <ServerCrash className="mr-2 h-4 w-4 animate-pulse" />
              Connecting...
            </>
          ) : status === 'success' ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Connected
            </>
          ) : (
            <>
              <KeyRound className="mr-2 h-4 w-4" />
              Connect
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
