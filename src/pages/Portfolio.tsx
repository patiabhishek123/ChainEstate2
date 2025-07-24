import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Wallet, 
  Building2, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2
} from "lucide-react";

const Portfolio = () => {
  const portfolioProperties = [
    {
      id: "RE001",
      title: "Luxury Downtown Condo",
      location: "Manhattan, NY",
      price: "$2.4M",
      image: "/placeholder.svg",
      tokenSupply: 1000,
      pricePerToken: "$2,400",
      verified: true,
      appreciation: "+8.2%",
      lastUpdated: "2 hours ago"
    },
    {
      id: "RE003",
      title: "Tech Hub Office Building",
      location: "Austin, TX",
      price: "$5.2M",
      image: "/placeholder.svg",
      tokenSupply: 2000,
      pricePerToken: "$2,600",
      verified: true,
      appreciation: "+15.3%",
      lastUpdated: "1 hour ago"
    }
  ];

  const transactions = [
    {
      type: "buy",
      property: "Luxury Downtown Condo",
      tokens: 50,
      price: "$120,000",
      date: "2024-01-15",
      status: "completed"
    },
    {
      type: "sell",
      property: "Tech Hub Office Building", 
      tokens: 25,
      price: "$65,000",
      date: "2024-01-10",
      status: "completed"
    },
    {
      type: "buy",
      property: "Mountain Resort Cabin",
      tokens: 75,
      price: "$150,000", 
      date: "2024-01-08",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            Track your tokenized real estate investments
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Portfolio Value"
            value="$847,500"
            change="+12.3%"
            icon={DollarSign}
            description="Total investment value"
          />
          <StatsCard
            title="Properties Owned"
            value="3"
            icon={Building2}
            description="Across 2 different cities"
          />
          <StatsCard
            title="Total Tokens"
            value="1,247"
            icon={Wallet}
            description="Real estate tokens held"
          />
          <StatsCard
            title="Monthly Yield"
            value="2.8%"
            change="+0.3%"
            icon={TrendingUp}
            description="Average monthly return"
          />
        </div>

        {/* Asset Allocation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Residential Properties</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Commercial Properties</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Mixed Use Properties</span>
                  <span className="text-sm text-muted-foreground">10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Properties */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">My Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Transactions</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((tx, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      tx.type === 'buy' ? 'bg-success/10' : 'bg-warning/10'
                    }`}>
                      {tx.type === 'buy' ? (
                        <ArrowDownRight className="w-4 h-4 text-success" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-warning" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {tx.type === 'buy' ? 'Bought' : 'Sold'} {tx.tokens} tokens
                      </p>
                      <p className="text-sm text-muted-foreground">{tx.property}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{tx.price}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      {tx.status === 'completed' ? (
                        <CheckCircle2 className="w-3 h-3 mr-1 text-success" />
                      ) : (
                        <Clock className="w-3 h-3 mr-1 text-warning" />
                      )}
                      <span className="capitalize">{tx.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;