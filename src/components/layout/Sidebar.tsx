
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart4, 
  Home, 
  Database, 
  Settings, 
  Lightbulb, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
  {
    title: 'Dashboards',
    href: '/dashboards',
    icon: BarChart4,
  },
  {
    title: 'Connections',
    href: '/connections',
    icon: Database,
  },
  {
    title: 'Insights',
    href: '/insights',
    icon: Lightbulb,
  },
  {
    title: 'History',
    href: '/history',
    icon: History,
  },
  {
    title: 'Sharing',
    href: '/sharing',
    icon: Share2,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        'flex h-screen flex-col border-r bg-sidebar text-sidebar-foreground transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-14 items-center border-b border-sidebar-border px-3 py-4">
        {!collapsed && (
          <div className="flex items-center gap-2 font-semibold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-xl font-bold text-transparent">
              SnowGenBI
            </span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <span className="text-primary text-lg font-bold">S</span>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <TooltipProvider key={index} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.href}
                    className={cn(
                      'flex h-10 items-center rounded-md px-3 text-muted-foreground hover:bg-sidebar-accent/20 hover:text-sidebar-accent-foreground',
                      location.pathname === item.href && 'bg-sidebar-accent/30 text-sidebar-accent-foreground font-medium'
                    )}
                  >
                    <item.icon className={cn('h-5 w-5', collapsed ? 'mx-auto' : 'mr-3')} />
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" className="border-sidebar-border">
                    {item.title}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </div>
      <div className="border-t border-sidebar-border p-2">
        <Button
          variant="ghost"
          size="icon"
          className="w-full justify-center text-sidebar-foreground hover:bg-sidebar-accent/20 hover:text-sidebar-accent-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
}
