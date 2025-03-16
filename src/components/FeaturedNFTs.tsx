
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NFTCard, { NFTData } from "./NFTCard";

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
  }
];

const categories = [
  "All",
  "Science",
  "Arts",
  "Engineering",
  "Economics",
  "Computer Science",
  "Mathematics"
];

const FeaturedNFTs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredNFTs = activeCategory === "All" 
    ? mockNFTs 
    : mockNFTs.filter(nft => nft.category === activeCategory);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              Discover
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Academic NFTs</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              Explore unique digital assets created by talented students across various academic disciplines.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">View All</Button>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map(category => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full text-sm px-4"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft, index) => (
            <NFTCard key={nft.id} nft={nft} index={index} />
          ))}
        </div>
        
        {filteredNFTs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">No NFTs found in this category</p>
            <Button 
              variant="outline"
              onClick={() => setActiveCategory("All")}
            >
              View All Categories
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedNFTs;
