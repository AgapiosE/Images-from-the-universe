import { Navigation, Footer } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import sunWhiteLight from "@assets/solar_1765548655005.jpg";
import sunImage from "@assets/503853167_10161949738716725_1788214704526131618_n_1765551180915.jpg";

const galleryItems = [
  { id: 1, src: sunWhiteLight, category: "Solar", title: "White Light Solar Full Disk", span: "" },
  { id: 2, src: sunImage, category: "Solar", title: "Solar Hydrogen-α", span: "" },
];

export default function Solar() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Full Resolution" 
              className="max-w-full max-h-full object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Solar</h1>
        <p className="text-xl text-muted-foreground font-light mb-12">
          Never look at the Sun without proper protection. You risk serious or permanent damage to your eyesight
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[400px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden bg-muted cursor-pointer ${item.span}`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="text-primary text-xs uppercase tracking-widest mb-2">{item.category}</span>
                <span className="text-white font-serif text-2xl">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
