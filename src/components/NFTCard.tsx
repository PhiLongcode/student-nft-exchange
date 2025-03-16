
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export interface NFTData {
  id: string;
  title: string;
  creator: {
    id: string;
    name: string;
    avatar: string;
  };
  image: string;
  price: number;
  likes: number;
  category: string;
}

interface NFTCardProps {
  nft: NFTData;
  index?: number;
}

const NFTCard = ({ nft, index = 0 }: NFTCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  // Staggered animation delay based on index
  const animationDelay = `${index * 0.1}s`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      className="nft-card animate-slide-in-bottom"
      style={{ animationDelay }}
    >
      {/* NFT Image */}
      <Link to={`/nft/${nft.id}`} className="block relative aspect-square overflow-hidden">
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 ${imageLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <img 
          src={nft.image} 
          alt={nft.title}
          className={`object-cover w-full h-full transition-all duration-500 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleImageLoad}
        />
        
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full">
            {nft.category}
          </span>
        </div>
        
        <button 
          className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </Link>
      
      {/* NFT Info */}
      <div className="p-4">
        <Link to={`/nft/${nft.id}`} className="block">
          <h3 className="font-medium text-lg mb-2 truncate hover:text-primary transition-colors">
            {nft.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <Link to={`/profile/${nft.creator.id}`} className="flex items-center gap-2">
            <img 
              src={nft.creator.avatar} 
              alt={nft.creator.name} 
              className="w-6 h-6 rounded-full object-cover" 
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              {nft.creator.name}
            </span>
          </Link>
          <span className="text-xs text-gray-500">{nft.likes} likes</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Current price</p>
            <p className="font-medium">{nft.price} ETH</p>
          </div>
          <Link 
            to={`/nft/${nft.id}`}
            className="px-3 py-1.5 text-sm bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
