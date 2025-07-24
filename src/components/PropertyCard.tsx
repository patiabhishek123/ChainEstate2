import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Shield, ExternalLink } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  tokenSupply: number;
  pricePerToken: string;
  verified: boolean;
  appreciation: string;
  lastUpdated: string;
}

export const PropertyCard = ({
  id,
  title,
  location,
  price,
  image,
  tokenSupply,
  pricePerToken,
  verified,
  appreciation,
  lastUpdated
}: PropertyCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            {verified && (
              <Badge className="bg-success text-success-foreground">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/80 text-foreground">
              #{id}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-card-foreground mb-2">{title}</h3>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total Value</span>
            <span className="font-semibold text-foreground">{price}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Tokens Available</span>
            <span className="font-semibold text-foreground">{tokenSupply.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Price per Token</span>
            <span className="font-semibold text-primary">{pricePerToken}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">12M Appreciation</span>
            <div className="flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-success" />
              <span className="font-semibold text-success">{appreciation}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Last updated: {lastUpdated}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1 bg-primary hover:bg-primary-light">
          Mint Tokens
        </Button>
        <Button variant="outline" size="icon">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};