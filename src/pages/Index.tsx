
import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedNFTs from "@/components/FeaturedNFTs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedNFTs />
        
        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Student NFT Works</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Turn your academic and creative projects into valuable digital assets in a few simple steps.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass-panel rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-semibold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Create Your NFT</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Upload your academic work, research paper, design, or any creative project to mint as an NFT.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="glass-panel rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-semibold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">List on Marketplace</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Set your price, add details about your work, and list it on our student-focused marketplace.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="glass-panel rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-semibold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Earn & Connect</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Earn from your academic work while connecting with students and institutions from around the world.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] bg-blue-300/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Monetize Your Academic Work?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Join thousands of students already trading their creative and academic projects as NFTs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
                  Connect Wallet
                </button>
                <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:border-primary hover:text-primary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
