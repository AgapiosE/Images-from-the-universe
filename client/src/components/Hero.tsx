import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/stock_images/C2023A3TROBS_LR.jpg";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="C/2023 A3 (Tsuchinshan-ATLAS) Comet"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-6 tracking-tight uppercase"
        >
          Images from the Universe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light tracking-wide"
        >Finding Solace in the stars under the Cyprus night sky</motion.p>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <ArrowDown className="text-white/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
