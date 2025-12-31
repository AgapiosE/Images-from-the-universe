import { Navigation, Footer } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Calendar, Telescope, X } from "lucide-react";
import { useState } from "react";

const planetaryData = [
  {
    year: 2020,
    planets: [
      { name: "Venus", date: "Apr 11", equipment: "Telescope", description: "Venus FC UV-IR 17:01 UT", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/venus-fc-uvir-1701ut-11april2020_orig.jpg" },
      { name: "Venus", date: "Mar 21", equipment: "Telescope", description: "Venus UV 16:52 UT", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/venus-uv-21032020-1652ut_orig.jpg" },
    ]
  },
  {
    year: 2015,
    planets: [
      { name: "Venus", date: "2015", equipment: "Telescope", description: "Venus 2015 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/872909_orig.jpg" },
    ]
  },
  {
    year: 2011,
    planets: [
      { name: "Venus", date: "2011", equipment: "Telescope", description: "Venus 2011 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6459777_orig.jpg" },
    ]
  },
  {
    year: 2010,
    planets: [
      { name: "Venus", date: "2010", equipment: "Telescope", description: "Venus 2010 Animation", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9078866_orig.gif" },
    ]
  },
  {
    year: 2007,
    planets: [
      { name: "Venus", date: "2007", equipment: "Telescope", description: "Venus 2007 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8079643_orig.jpg" },
      { name: "Venus", date: "2007", equipment: "Telescope", description: "Venus 2007 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2254820_orig.jpg" },
      { name: "Venus", date: "2007", equipment: "Telescope", description: "Venus 2007 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/7719808_orig.jpg" },
      { name: "Venus", date: "2007", equipment: "Telescope", description: "Venus 2007 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/5907879_orig.jpg" },
      { name: "Venus", date: "2007", equipment: "Telescope", description: "Venus 2007 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8667595_orig.jpg" },
      { name: "Venus", date: "2007", equipment: "Telescope", description: "Venus 2007 Capture", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9398893_orig.jpg" },
    ]
  }
];

function YearGroup({ yearGroup, onViewFullRes }: { yearGroup: typeof planetaryData[0], onViewFullRes: (image: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedPlanets = isExpanded ? yearGroup.planets : yearGroup.planets.slice(0, 3);
  const hasMore = yearGroup.planets.length > 3;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative border-l border-white/10 pl-8 md:pl-12"
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      
      <h2 className="text-4xl font-serif text-white/90 mb-8">{yearGroup.year}</h2>

      <div className="grid grid-cols-1 gap-6">
        {displayedPlanets.map((record, i) => (
          <div 
            key={i} 
            className="group bg-muted/30 border border-white/5 hover:border-primary/50 transition-all p-4 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center"
          >
            <div className="w-full md:w-1/4 aspect-video bg-black/50 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onViewFullRes(record.image)}>
              <img 
                src={record.image} 
                alt={`${record.name} ${yearGroup.year}`} 
                className="w-full h-full object-cover scale-150 transition-transform duration-500 group-hover:scale-175"
              />
            </div>

            <div className="flex-grow space-y-2">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div className="flex items-center gap-3 text-2xl font-serif text-primary">
                  <Calendar size={20} className="text-muted-foreground" />
                  <span>{record.date}, {yearGroup.year}</span>
                </div>
              </div>
              
              <p className="text-white/80 font-light">{record.description}</p>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-mono pt-2">
                <Telescope size={12} />
                <span>Equipment: {record.equipment}</span>
              </div>
            </div>

            <button 
              onClick={() => onViewFullRes(record.image)}
              className="px-6 py-2 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors self-start md:self-center shrink-0"
            >
              View Full Res
            </button>
          </div>
        ))}
      </div>

      {hasMore && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 px-6 py-2 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </motion.div>
  );
}

export default function Venus() {
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
          <span className="text-primary">Venus Archive</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Venus</h1>
          <p className="text-xl text-muted-foreground font-light">The second planet from the Sun. Its thick atmosphere creates a runaway greenhouse effect, making it the hottest planet in our solar system. Phases can be observed as it orbits the Sun.</p>
        </div>

        <div className="space-y-16">
          {planetaryData.map((yearGroup) => (
            <YearGroup key={yearGroup.year} yearGroup={yearGroup} onViewFullRes={setSelectedImage} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}