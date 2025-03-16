
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={childVariants} className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
              Student NFT Marketplace
            </span>
          </motion.div>
          
          <motion.h1 
            variants={childVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight mb-6"
          >
            Turn Your Academic Creations Into Digital Assets
          </motion.h1>
          
          <motion.p 
            variants={childVariants} 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A platform exclusively for students to buy, sell, and exchange creative works, research papers, and academic projects as NFTs.
          </motion.p>
          
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-8">Explore Marketplace</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8">Create an NFT</Button>
          </motion.div>
          
          <motion.div 
            variants={childVariants} 
            className="mt-16 flex justify-center"
          >
            <div className="relative w-full max-w-5xl">
              <div className="absolute inset-0 -bottom-6 -right-6 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-xl blur-xl"></div>
              <div className="glass-panel rounded-xl overflow-hidden h-[300px] md:h-[400px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-400">Featured NFT Collection Preview</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={childVariants}
            className="mt-16 flex justify-center space-x-12"
          >
            <div className="text-center">
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-gray-500 text-sm">Student Artists</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">5,000+</p>
              <p className="text-gray-500 text-sm">NFTs Created</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-500 text-sm">Universities</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
