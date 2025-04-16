
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
