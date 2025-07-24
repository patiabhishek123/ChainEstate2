import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Activity, 
  BarChart3, 
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Clock
} from "lucide-react";

const Analytics = () => {
  const marketTrends = [
    { location: "Manhattan, NY", change: "+12.4%", value: "$2.8M avg", trend: "up" },
    { location: "Miami, FL", change: "+8.7%", value: "$1.9M avg", trend: "up" },
    { location: "Austin, TX", change: "+15.2%", value: "$1.1M avg", trend: "up" },
    { location: "Phoenix, AZ", change: "-2.1%", value: "$650K avg", trend: "down" }
  ];

  const chainlinkUpdates = [
    {
      property: "Luxury Downtown Condo",
      oldValue: "$2.35M",
      newValue: "$2.4M", 
      change: "+2.1%",
      timestamp: "2 hours ago",
      source: "Zillow API"
    },
    {
      property: "Tech Hub Office Building",
      oldValue: "$5.1M", 
      newValue: "$5.2M",
      change: "+2.0%",
      timestamp: "4 hours ago",
      source: "LoopNet API"
    },
    {
      property: "Mountain Resort Cabin",
      oldValue: "$3.05M",
      newValue: "$3.1M",
      change: "+1.6%", 
      timestamp: "6 hours ago",
      source: "MLS API"
    }
  ];

  const crossChainActivity = [
    {
      property: "Modern Beach House",
      fromChain: "Ethereum",
      toChain: "Polygon",
      tokens: 150,
      fee: "$12.50",
      status: "Completed",
      time: "5 min ago"
    },
    {
      property: "Suburban Family Home", 
      fromChain: "Polygon",
      toChain: "Arbitrum",
      tokens: 75,
      fee: "$3.20",
      status: "Processing",
      time: "12 min ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time market data and platform insights
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">24H</Button>
            <Button variant="default" size="sm">7D</Button>
            <Button variant="outline" size="sm">30D</Button>
            <Button variant="outline" size="sm">90D</Button>
          </div>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Chains</SelectItem>
              <SelectItem value="ethereum">Ethereum</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
              <SelectItem value="arbitrum">Arbitrum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Market Performance Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Market Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketTrends.map((market, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-foreground">{market.location}</h3>
                    {market.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4 text-success" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-destructive" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{market.value}</p>
                  <p className={`text-sm font-semibold ${
                    market.trend === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    {market.change}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chainlink Automation Updates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Chainlink Automation Updates
              <Badge className="ml-2 bg-primary/10 text-primary">Live</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chainlinkUpdates.map((update, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{update.property}</h3>
                    <p className="text-sm text-muted-foreground">
                      Source: {update.source} &bull; {update.timestamp}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm text-muted-foreground">{update.oldValue}</span>
                      <ArrowUpRight className="w-3 h-3 text-success" />
                      <span className="font-semibold text-foreground">{update.newValue}</span>
                    </div>
                    <Badge className="bg-success/10 text-success">
                      {update.change}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cross-Chain Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Cross-Chain Activity (CCIP)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crossChainActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{activity.property}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{activity.fromChain}</span>
                      <ArrowUpRight className="w-3 h-3 mx-2" />
                      <span>{activity.toChain}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground mb-1">
                      {activity.tokens} tokens
                    </p>
                    <div className="flex items-center text-sm">
                      {activity.status === 'Completed' ? (
                        <Badge className="bg-success/10 text-success mr-2">
                          {activity.status}
                        </Badge>
                      ) : (
                        <Badge className="bg-warning/10 text-warning mr-2">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.status}
                        </Badge>
                      )}
                      <span className="text-muted-foreground">Fee: {activity.fee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Residential</span>
                  <span className="font-semibold">67.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Commercial</span>
                  <span className="font-semibold">24.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Mixed Use</span>
                  <span className="font-semibold">8.6%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Chain Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ethereum</span>
                  <span className="font-semibold">45.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Polygon</span>
                  <span className="font-semibold">32.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Arbitrum</span>
                  <span className="font-semibold">22.0%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;