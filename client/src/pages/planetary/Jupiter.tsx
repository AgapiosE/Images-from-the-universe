import { Navigation, Footer } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Calendar, Telescope, X } from "lucide-react";
import { useState } from "react";
import jupiter1 from "@assets/JUP_28112025_2148UT_14MINSv2_1765548706521.jpg";
import jupiter2 from "@assets/JUP_28112025_2148UT_14MINSv2_1765548796950.jpg";
import jupiterDoubleShadow from "@assets/JUPITER_14102025_DOUBLE_SHADOW_TRANSIT_1765548864165.jpg";

const planetaryData = [
  {
    year: 2025,
    planets: [
      { name: "Jupiter", date: "Nov 28", equipment: "CDK 20", description: "Standard View", image: jupiter1 },
      { name: "Jupiter", date: "Nov 28", equipment: "CDK 20", description: "Great Red Spot Transit", image: jupiter2 },
      { name: "Jupiter", date: "Oct 14", equipment: "C9.25 SCT", description: "Double Shadow Transit (Io & Europa)", image: jupiterDoubleShadow },
    ]
  },
  {
    year: 2024,
    planets: [
      { name: "Jupiter", date: "Nov 15", equipment: "14-inch SCT", description: "Opposition Imaging", image: jupiter1 },
    ]
  },
  {
    year: 2023,
    planets: [
      { name: "Jupiter", date: "Dec 12", equipment: "C14 EdgeHD", description: "Opposition Season", image: jupiter1 },
    ]
  },
  {
    year: 2022,
    planets: [
      { name: "Jupiter", date: "Sep 26", equipment: "C11 EdgeHD", description: "Closest Approach in 59 Years", image: jupiter1 },
    ]
  },
  {
    year: 2021,
    planets: [
      { name: "Jupiter", date: "Aug 20", equipment: "C11 EdgeHD", description: "Atmospheric Details", image: jupiter1 },
    ]
  },
  {
    year: 2020,
    planets: [
      { name: "Jupiter", date: "Jul 14", equipment: "C11 SCT", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2019,
    planets: [
      { name: "Jupiter", date: "Jun 10", equipment: "C9.25 SCT", description: "Great Red Spot", image: jupiter1 },
    ]
  },
  {
    year: 2018,
    planets: [
      { name: "Jupiter", date: "May 09", equipment: "C9.25 SCT", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2017,
    planets: [
      { name: "Jupiter", date: "Apr 07", equipment: "C8 SCT", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2016,
    planets: [
      { name: "Jupiter", date: "Mar 08", equipment: "C8 SCT", description: "Double Transit", image: jupiter1 },
    ]
  },
  {
    year: 2015,
    planets: [
      { name: "Jupiter", date: "Feb 06", equipment: "C8 SCT", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2014,
    planets: [
      { name: "Jupiter", date: "Jan 05", equipment: "C8 SCT", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2013,
    planets: [
      { name: "Jupiter", date: "Dec 05", equipment: "Newtonian 8\"", description: "Cloud Belts", image: jupiter1 },
    ]
  },
  {
    year: 2012,
    planets: [
      { name: "Jupiter", date: "Dec 03", equipment: "Newtonian 8\"", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2011,
    planets: [
      { name: "Jupiter", date: "Oct 29", equipment: "Newtonian 6\"", description: "Opposition", image: jupiter1 },
    ]
  },
  {
    year: 2010,
    planets: [
      { name: "Jupiter", date: "Dec 26", equipment: "C9.25 SCT", description: "SEB outbreak going strong", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/3028079_orig.jpg" },
      { name: "Jupiter", date: "Dec 08", equipment: "C9.25 SCT", description: "Traces of SEB outbreak", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2449172_orig.jpg" },
      { name: "Jupiter", date: "Nov 19", equipment: "C9.25 SCT", description: "GRS & Oval BA in view", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1631760_orig.jpg" },
      { name: "Jupiter", date: "Nov 10", equipment: "C9.25 SCT", description: "First sign of SEB outbreak", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9557794_orig.jpg" },
      { name: "Jupiter", date: "Nov 03", equipment: "C9.25 SCT", description: "Collimation experiments", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/814280068_orig.jpg" },
      { name: "Jupiter", date: "Oct 31", equipment: "C9.25 SCT", description: "GRS rotating out of view", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1909694_orig.jpg" },
      { name: "Jupiter", date: "Oct 06", equipment: "C9.25 SCT", description: "Productive run with animation", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8888277_orig.jpg" },
      { name: "Jupiter", date: "Sep 19", equipment: "C9.25 SCT", description: "GRS & Oval BA storm systems", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/5831325_orig.jpg" },
      { name: "Jupiter", date: "Sep 08", equipment: "C9.25 SCT", description: "Jupiter in full view with Io", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8164236_orig.jpg" },
      { name: "Jupiter", date: "Aug 20", equipment: "C9.25 SCT", description: "Cloud patterns well resolved", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2282883_orig.jpg" },
      { name: "Jupiter", date: "Aug 07", equipment: "C9.25 SCT", description: "GRS & Oval BA storms", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/4867927_orig.jpg" },
      { name: "Jupiter", date: "Jul 30", equipment: "C9.25 SCT", description: "Jupiter with Ganymede & shadow", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/4443887_orig.jpg" },
      { name: "Jupiter", date: "Jul 27", equipment: "C9.25 SCT", description: "Feature in the NEB", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9805083_orig.jpg" },
      { name: "Jupiter", date: "Jul 21", equipment: "C9.25 SCT", description: "GRS and NEB activity", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6821236_orig.jpg" },
      { name: "Jupiter", date: "Jul 14", equipment: "C9.25 SCT", description: "GRS & Oval BA storms", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2340756_orig.jpg" },
      { name: "Jupiter", date: "Jul 11", equipment: "C9.25 SCT", description: "Real potential of C9.25", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/5420922_orig.jpg" },
      { name: "Jupiter", date: "Jul 02", equipment: "Newtonian 6\"", description: "Callisto shadow & Io transit", image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/216706_orig.jpg" },
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

export default function Jupiter() {
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
          <span className="text-primary">Jupiter Archive</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Jupiter</h1>
          <p className="text-xl text-muted-foreground font-light">A huge, dynamic world with ever changing storms and cloud patterns. There's always something new to see on Jupiter and its four main satellites often contribute to the show with mutual events such as eclipses and transits.</p>
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
