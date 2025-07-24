import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterType, setFilterType] = useState("all");

  const properties = [
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
    },
    {
      id: "RE004",
      title: "Historic Warehouse Loft",
      location: "Brooklyn, NY",
      price: "$1.2M",
      image: "/placeholder.svg", 
      tokenSupply: 500,
      pricePerToken: "$2,400",
      verified: false,
      appreciation: "+6.8%",
      lastUpdated: "6 hours ago"
    },
    {
      id: "RE005",
      title: "Suburban Family Home",
      location: "Phoenix, AZ",
      price: "$850K",
      image: "/placeholder.svg",
      tokenSupply: 425,
      pricePerToken: "$2,000",
      verified: true,
      appreciation: "+9.1%",
      lastUpdated: "3 hours ago"
    },
    {
      id: "RE006",
      title: "Mountain Resort Cabin",
      location: "Aspen, CO",
      price: "$3.1M",
      image: "/placeholder.svg",
      tokenSupply: 1550,
      pricePerToken: "$2,000",
      verified: true,
      appreciation: "+18.7%",
      lastUpdated: "5 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Property Marketplace
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover and invest in tokenized real estate properties
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search properties by location, type, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="appreciation">Best Appreciation</SelectItem>
                <SelectItem value="supply">Token Supply</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="mixed">Mixed Use</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              <Filter className="w-3 h-3 mr-1" />
              Verified Only
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Under $1M
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              High Yield (&gt;10%)
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Recently Listed
            </Badge>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {properties.length} properties • Total value: $14.8M
            </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;