
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatTileProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
}

export function StatTile({
  title,
  value,
  description,
  icon,
  iconRight,
  className,
}: StatTileProps) {
  return (
    <Card className={`dashboard-stat overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="flex h-full flex-col justify-between p-6">
          <div className="mb-2">
            <h3 className="text-lg font-medium text-foreground">{title}</h3>
            {description && (
              <p className="stat-description">{description}</p>
            )}
          </div>
          
          <div className="flex items-end justify-between">
            <div className="stat-value">{value}</div>
            {icon && <div className="stat-icon">{icon}</div>}
            {iconRight && <div>{iconRight}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
