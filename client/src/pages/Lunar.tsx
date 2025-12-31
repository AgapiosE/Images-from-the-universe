import { Navigation, Footer } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const portraits = [
  { id: 0, src: "/images/lunar_phase/MOON_CDK350_1766142852214.jpg", title: "Lunar Showcase", category: "Showcase", span: "md:col-span-3 md:row-span-2", isShowcase: true },
  { id: 1, src: "/images/lunar_phase/31166645_10155817252846725_5157042905335988224_n_1766142427405.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 2, src: "/images/lunar_phase/106720102_10157895363416725_5642935771721935685_n_1766142427405.jpg", title: "Full Moon", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/images/lunar_phase/515439254_10162086236046725_2754342621688452903_n_1766142427405.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "/images/lunar_phase/515580951_10162096671866725_8215555668327436134_n_1766142427405.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-2 md:row-span-2" },
  { id: 5, src: "/images/lunar_phase/527332865_10162241125286725_8758405961174659991_n_1766142427406.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "/images/lunar_phase/528031302_10162253966091725_6391708734196816333_n_1766142427406.jpg", title: "Gibbous Moon", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 7, src: "/images/lunar_phase/529694721_10162268793556725_7349511151639546862_n_1766142427406.jpg", title: "Full Moon", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 8, src: "/images/lunar_phase/536278577_10162348627436725_3609552852636727260_n_1766142427406.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 9, src: "/images/lunar_phase/555334469_10162450152836725_288899611816883999_n_1766142427406.jpg", title: "Crescent Moon", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 10, src: "/images/lunar_phase/556796519_10162463783581725_1456162298100077586_n_1766142427406.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
  { id: 11, src: "/images/lunar_phase/557669552_10162479666371725_3320301881235446076_n_1766142427407.jpg", title: "Full Moon", category: "Portrait", span: "md:col-span-2 md:row-span-2" },
  { id: 12, src: "/images/lunar_phase/574551004_10162592535001725_1262190922667953624_n_1766142427407.jpg", title: "Lunar Phase", category: "Portrait", span: "md:col-span-1 md:row-span-1" },
];

export default function Lunar() {
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
        <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground uppercase tracking-widest">
          <Link href="/gallery" className="hover:text-primary transition-colors">Images</Link>
          <ChevronRight size={14} />
          <span className="text-primary">Lunar</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Lunar Portraits</h1>
        <p className="text-xl text-muted-foreground font-light mb-12">
          The various phases of the Moon taken using either afocal or prime methods through various telescopes. Click on images for full view.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] mb-24">
          {portraits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`relative group overflow-hidden bg-black cursor-pointer ${item.span}`}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
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
