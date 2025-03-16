
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Eye, Clock, Shield, FileText, Tag, Calendar } from "lucide-react";
import NFTCard, { NFTData } from "@/components/NFTCard";

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
  }
];

// Sample NFT details
const nftDetails = {
  description: "This NFT represents a complex visualization of quantum mechanical principles, specifically focused on the behavior of particles in a double-slit experiment. The visualization uses color gradients to represent probability distributions and particle-wave duality concepts fundamental to quantum physics.",
  properties: [
    { name: "Resolution", value: "3000x3000" },
    { name: "File Type", value: "JPG" },
    { name: "Subject", value: "Physics" },
    { name: "Style", value: "Digital Art" }
  ],
  history: [
    { event: "Created", date: "Mar 15, 2023", by: "Alex Chen", price: null },
    { event: "Listed", date: "Mar 17, 2023", by: "Alex Chen", price: "0.8 ETH" },
    { event: "Offer", date: "Apr 2, 2023", by: "John Doe", price: "0.75 ETH" },
    { event: "Price Changed", date: "Apr 10, 2023", by: "Alex Chen", price: "0.85 ETH" }
  ]
};

// Sample more NFTs from this creator
const moreFromCreator = [
  {
    id: "4",
    title: "String Theory Visualization",
    creator: {
      id: "user1",
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=600&auto=format&fit=crop",
    price: 0.95,
    likes: 38,
    category: "Science"
  },
  {
    id: "5",
    title: "Dark Matter Concept",
    creator: {
      id: "user1",
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    image: "https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=600&auto=format&fit=crop",
    price: 1.1,
    likes: 27,
    category: "Science"
  }
];

const NFTDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [nft, setNft] = useState<NFTData | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the NFT by id
  useEffect(() => {
    const foundNFT = mockNFTs.find(item => item.id === id);
    setNft(foundNFT || null);
  }, [id]);

  if (!nft) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">NFT Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The NFT you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/explore">
              <Button>Explore Other NFTs</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* NFT Image Section */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative rounded-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 ${imageLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
                    <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <img 
                    src={nft.image} 
                    alt={nft.title}
                    className={`w-full h-auto object-cover aspect-square ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3">
                    <button 
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                        isLiked 
                          ? 'border-red-500 text-red-500 bg-red-50 dark:bg-red-900/10' 
                          : 'border-gray-300 dark:border-gray-700'
                      } transition-colors`}
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
                      <span>{isLiked ? nft.likes + 1 : nft.likes}</span>
                    </button>
                    <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">248 views</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* NFT Info Section */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {nft.category}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full">
                    Verified
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-4">{nft.title}</h1>
                <div className="flex items-center gap-3 mb-6">
                  <Link to={`/profile/${nft.creator.id}`} className="flex items-center gap-2">
                    <img 
                      src={nft.creator.avatar} 
                      alt={nft.creator.name} 
                      className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-800" 
                    />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Creator</p>
                      <p className="font-medium">{nft.creator.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Current price</p>
                    <p className="text-3xl font-bold">{nft.price} ETH</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Listed 3 days ago</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="w-full">Purchase Now</Button>
                  <Button variant="outline" className="w-full">Make Offer</Button>
                </div>
              </div>
              
              <Tabs defaultValue="details">
                <TabsList className="w-full grid grid-cols-3 mb-6">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="properties">Properties</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {nftDetails.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Verified by University Research Department</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">Academic paper included with purchase</span>
                  </div>
                </TabsContent>
                
                <TabsContent value="properties">
                  <div className="grid grid-cols-2 gap-4">
                    {nftDetails.properties.map((prop, index) => (
                      <div key={index} className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{prop.name}</p>
                        <p className="font-medium">{prop.value}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="history">
                  <ul className="space-y-4">
                    {nftDetails.history.map((item, index) => (
                      <li key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                            {item.event === "Created" ? (
                              <FileText className="w-4 h-4 text-green-500" />
                            ) : item.event === "Listed" ? (
                              <Tag className="w-4 h-4 text-blue-500" />
                            ) : item.event === "Offer" ? (
                              <Tag className="w-4 h-4 text-yellow-500" />
                            ) : (
                              <Clock className="w-4 h-4 text-purple-500" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{item.event}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                              <span>by {item.by}</span>
                              <span>•</span>
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>
                        {item.price && (
                          <span className="font-medium">{item.price}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* More from this creator */}
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">More from this creator</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore more NFTs by {nft.creator.name}
                </p>
              </div>
              <Link to={`/profile/${nft.creator.id}`} className="text-primary hover:text-primary/80 transition-colors">
                View Profile
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {moreFromCreator.map((item, index) => (
                <NFTCard key={item.id} nft={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NFTDetail;
