import { Navigation, Footer } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import horseHead from "@assets/515371782_10162088489826725_4666986226980513992_n_1766141294064.jpg";
import whirlpool from "@assets/515453199_10162095864671725_4979961838538648783_n_1766141294065.jpg";
import irisNebula from "@assets/515499705_10162092421401725_5170614995062914682_n_1766141294065.jpg";
import cocoon from "@assets/516300493_10162113416336725_4703422194314805150_n_1766141294065.jpg";
import ringNebula from "@assets/516477307_10162120297696725_8084261608730139650_n_1766141294065.jpg";
import blackEye from "@assets/516836357_10162100435176725_3613813626415583776_n_1766141294066.jpg";
import m81 from "@assets/516951758_10162113201381725_3787623409932380712_n_1766141294066.jpg";
import dumbbell from "@assets/517273693_10162120297311725_7682097044841407236_n_1766141294066.jpg";
import needleGalaxy from "@assets/B2JPDrWb75Cb_16536x0_ieTZ0INm_1766141294066.jpg";
import m106 from "@assets/L3-GvEOp99Ip_2560x0_esdlMP5Y_1766141294067.jpg";

const galleryItems = [
  { id: 1, src: horseHead, category: "Deep Sky", title: "Horse Head Nebula", span: "col-span-2" },
  { id: 2, src: whirlpool, category: "Deep Sky", title: "Whirlpool Galaxy (M51)", span: "" },
  { id: 3, src: irisNebula, category: "Deep Sky", title: "Iris Nebula (NGC 7023)", span: "" },
  { id: 4, src: cocoon, category: "Deep Sky", title: "Cocoon Nebula (IC 5146)", span: "" },
  { id: 5, src: ringNebula, category: "Deep Sky", title: "Ring Nebula (M57)", span: "" },
  { id: 6, src: blackEye, category: "Deep Sky", title: "Black Eye Galaxy (M64)", span: "" },
  { id: 7, src: m81, category: "Deep Sky", title: "Bode's Galaxy (M81)", span: "col-span-2" },
  { id: 8, src: dumbbell, category: "Deep Sky", title: "Dumbbell Nebula (M27)", span: "" },
  { id: 9, src: needleGalaxy, category: "Deep Sky", title: "Needle Galaxy (NGC 4565)", span: "col-span-2" },
  { id: 10, src: m106, category: "Deep Sky", title: "M106 Galaxy", span: "row-span-2" },
];

export default function DeepSky() {
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
        <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Deep Sky</h1>
        <p className="text-xl text-muted-foreground font-light mb-12">
          Various images taken using a remote telescope in the Troodos Mountains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
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
                className="w-full h-full object-cover transition-transform duration-700 scale-[1.1] group-hover:scale-[1.2]"
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
