import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";
import { PropertyCard } from "@/components/PropertyCard";
import { 
  Building2, 
  Shield, 
  Zap, 
  Globe, 
  TrendingUp, 
  Users, 
  DollarSign,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProperties = [
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
      id: "RE002", 
      title: "Modern Beach House",
      location: "Miami, FL",
      price: "$1.8M",
      image: "/placeholder.svg",
      tokenSupply: 750,
      pricePerToken: "$2,400",
      verified: true,
      appreciation: "+12.5%",
      lastUpdated: "4 hours ago"
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
              Powered by Chainlink Oracle Network
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Tokenize Real Estate
              <span className="block text-accent-light">Into NFTs</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Transform real estate investments with blockchain technology. Mint property NFTs, 
              automate valuations, and trade across multiple chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Start Tokenizing
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View Marketplace
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              title="Total Value Locked"
              value="$124.8M"
              change="+23.1%"
              icon={DollarSign}
              description="Across all tokenized properties"
            />
            <StatsCard
              title="Properties Tokenized"
              value="1,247"
              change="+156"
              icon={Building2}
              description="Verified real estate assets"
            />
            <StatsCard
              title="Active Investors"
              value="8,432"
              change="+12.3%"
              icon={Users}
              description="Token holders worldwide"
            />
            <StatsCard
              title="Avg. Annual Return"
              value="11.2%"
              change="+2.1%"
              icon={TrendingUp}
              description="Based on automated valuations"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by Chainlink Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade oracle solutions ensure accurate data and automated operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chainlink Functions</h3>
                <p className="text-muted-foreground">
                  Verify property data through secure off-chain API calls and smart contract integration
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Chainlink Automation</h3>
                <p className="text-muted-foreground">
                  Automated periodic valuation updates keep NFT metadata current with market conditions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cross-Chain CCIP</h3>
                <p className="text-muted-foreground">
                  Transfer tokenized real estate assets seamlessly across multiple blockchain networks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Properties
              </h2>
              <p className="text-lg text-muted-foreground">
                Recently tokenized real estate assets
              </p>
            </div>
            <Link to="/marketplace">
              <Button variant="outline">
                View All Properties
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Tokenize Real Estate?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fractional Ownership</h3>
                    <p className="text-muted-foreground">Invest in high-value properties with smaller capital requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Global Liquidity</h3>
                    <p className="text-muted-foreground">Trade property tokens 24/7 on decentralized exchanges</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Transparent Pricing</h3>
                    <p className="text-muted-foreground">Automated valuations using verified market data</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Cross-Chain Access</h3>
                    <p className="text-muted-foreground">Move assets between Ethereum, Polygon, Arbitrum and more</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Reduced Barriers</h3>
                    <p className="text-muted-foreground">No geographical restrictions or complex paperwork</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Smart Contracts</h3>
                    <p className="text-muted-foreground">Automated dividend distribution and governance voting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Tokenizing?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Join thousands of investors already earning passive income through tokenized real estate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Launch App
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Read Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
