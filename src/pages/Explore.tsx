
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NFTCard, { NFTData } from "@/components/NFTCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, ChevronDown } from "lucide-react";

// Sample NFT data
const mockNFTs: NFTData[] = [
  {
    id: "1",
    title: "Quantum Physics Visualization",
    creator: {
      id: "user1",
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    image: "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=600&auto=format&fit=crop",
    price: 0.85,
    likes: 42,
    category: "Science"
  },
  {
    id: "2",
    title: "Architecture Design Concept",
    creator: {
      id: "user2",
      name: "Maya Johnson",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=600&auto=format&fit=crop",
    price: 1.2,
    likes: 36,
    category: "Architecture"
  },
  {
    id: "3",
    title: "Neural Network Visualization",
    creator: {
      id: "user3",
      name: "Raj Patel",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=600&auto=format&fit=crop",
    price: 0.75,
    likes: 28,
    category: "Computer Science"
  },
  {
    id: "4",
    title: "Abstract DNA Art",
    creator: {
      id: "user4",
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=600&auto=format&fit=crop",
    price: 1.5,
    likes: 54,
    category: "Biology"
  },
  {
    id: "5",
    title: "Economic Theory Visualization",
    creator: {
      id: "user5",
      name: "Carlos Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop",
    price: 0.65,
    likes: 22,
    category: "Economics"
  },
  {
    id: "6",
    title: "Modern Literature Analysis",
    creator: {
      id: "user6",
      name: "Sophia Kim",
      avatar: "https://i.pravatar.cc/150?img=6"
    },
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=600&auto=format&fit=crop",
    price: 0.95,
    likes: 31,
    category: "Literature"
  },
  {
    id: "7",
    title: "Sustainable Engineering Model",
    creator: {
      id: "user7",
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=7"
    },
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    price: 1.15,
    likes: 27,
    category: "Engineering"
  },
  {
    id: "8",
    title: "Historical Data Visualization",
    creator: {
      id: "user8",
      name: "Natalie Kim",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    price: 0.8,
    likes: 19,
    category: "History"
  },
  {
    id: "9",
    title: "Molecular Biology Study",
    creator: {
      id: "user9",
      name: "David Park",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop",
    price: 1.35,
    likes: 44,
    category: "Biology"
  }
];

const categories = [
  "All Categories",
  "Science",
  "Engineering",
  "Computer Science",
  "Architecture",
  "Economics",
  "Biology",
  "Literature",
  "History",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Art & Design"
];

const sortOptions = [
  "Newest",
  "Oldest",
  "Price: Low to High",
  "Price: High to Low",
  "Most Popular"
];

const Explore = () => {
  const [nfts, setNfts] = useState<NFTData[]>(mockNFTs);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [priceRange, setPriceRange] = useState([0, 5]);
  const [sortBy, setSortBy] = useState("Newest");
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter NFTs based on search, category, and price
  useEffect(() => {
    let filtered = [...mockNFTs];
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(nft => 
        nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nft.creator.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(nft => nft.category === selectedCategory);
    }
    
    // Price filter
    filtered = filtered.filter(
      nft => nft.price >= priceRange[0] && nft.price <= priceRange[1]
    );
    
    // Sort
    switch (sortBy) {
      case "Newest":
        // For mock data, we'll just use the current order
        break;
      case "Oldest":
        filtered = [...filtered].reverse();
        break;
      case "Price: Low to High":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "Most Popular":
        filtered = [...filtered].sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }
    
    setNfts(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Academic NFTs</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Discover unique digital assets created by talented students from universities around the world.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name or creator..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="md:hidden flex items-center gap-2"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
                </Button>
                <select
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option disabled>Sort By</option>
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap gap-4 mb-4">
              <select
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <div className="flex items-center gap-2 min-w-[300px]">
                <span className="text-sm text-gray-600 dark:text-gray-300">Price Range: </span>
                <span className="font-medium min-w-[40px]">{priceRange[0]} ETH</span>
                <Slider
                  defaultValue={[0, 5]}
                  min={0}
                  max={5}
                  step={0.1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-40"
                />
                <span className="font-medium min-w-[40px]">{priceRange[1]} ETH</span>
              </div>
            </div>
            
            {/* Mobile Filters */}
            {filtersOpen && (
              <div className="md:hidden space-y-4 mb-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{priceRange[0]} ETH</span>
                    <Slider
                      defaultValue={[0, 5]}
                      min={0}
                      max={5}
                      step={0.1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <span className="font-medium">{priceRange[1]} ETH</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing {nfts.length} results
              </p>
              {nfts.length > 0 && selectedCategory !== "All Categories" && (
                <Button variant="ghost" onClick={() => setSelectedCategory("All Categories")}>
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          {/* NFT Grid */}
          {nfts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nfts.map((nft, index) => (
                <NFTCard key={nft.id} nft={nft} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No NFTs found matching your filters</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                  setPriceRange([0, 5]);
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
