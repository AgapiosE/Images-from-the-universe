import { Navigation, Footer } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Calendar, Telescope } from "lucide-react";
import jupiterImage from "@assets/generated_images/planet_jupiter_telescope_view.png";
import saturnImage from "@assets/stock_images/saturn_with_rings_as_883d0710.jpg";

// Mock data structure simulating a database of planetary images from 2010-Present
const planetaryData = [
  {
    year: 2024,
    planets: [
      { name: "Jupiter", date: "Nov 15", equipment: "14-inch SCT", description: "Great Red Spot Transit", image: jupiterImage },
      { name: "Saturn", date: "Oct 22", equipment: "14-inch SCT", description: "Ring Plane Crossing Prep", image: saturnImage },
      { name: "Mars", date: "Sep 10", equipment: "14-inch SCT", description: "Syrtis Major visible", image: "https://images.unsplash.com/photo-1614728853970-bc5c1a1636c9?auto=format&fit=crop&q=80&w=1000" },
    ]
  },
  {
    year: 2023,
    planets: [
      { name: "Jupiter", date: "Dec 05", equipment: "11-inch SCT", description: "Io Shadow Transit", image: jupiterImage },
      { name: "Venus", date: "Jun 12", equipment: "11-inch SCT", description: "50% Phase illumination", image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=1000" },
    ]
  },
  {
    year: 2022,
    planets: [
      { name: "Saturn", date: "Aug 14", equipment: "11-inch SCT", description: "Opposition - Seeliger Effect", image: saturnImage },
      { name: "Mars", date: "Dec 08", equipment: "11-inch SCT", description: "Opposition - Polar Ice Cap", image: "https://images.unsplash.com/photo-1614728853970-bc5c1a1636c9?auto=format&fit=crop&q=80&w=1000" },
    ]
  },
  {
    year: 2021,
    planets: [
      { name: "Jupiter", date: "Aug 20", equipment: "C11 EdgeHD", description: "Double Shadow Transit", image: jupiterImage },
    ]
  },
  {
    year: 2020,
    planets: [
      { name: "Mars", date: "Oct 13", equipment: "C11 EdgeHD", description: "Best Opposition in years", image: "https://images.unsplash.com/photo-1614728853970-bc5c1a1636c9?auto=format&fit=crop&q=80&w=1000" },
      { name: "Saturn", date: "Jul 20", equipment: "C11 EdgeHD", description: "Hexagon clearly visible", image: saturnImage },
    ]
  },
  // Simplified historical data for the mockup
  { year: 2019, planets: [{ name: "Jupiter", date: "Jun 10", equipment: "C9.25", description: "GRS structure details", image: jupiterImage }] },
  { year: 2018, planets: [{ name: "Mars", date: "Jul 27", equipment: "C9.25", description: "Global Dust Storm", image: "https://images.unsplash.com/photo-1614728853970-bc5c1a1636c9?auto=format&fit=crop&q=80&w=1000" }] },
  { year: 2017, planets: [{ name: "Saturn", date: "Jun 15", equipment: "C9.25", description: "Wide ring tilt", image: saturnImage }] },
  { year: 2016, planets: [{ name: "Jupiter", date: "Mar 08", equipment: "C8", description: "Standard opposition view", image: jupiterImage }] },
  { year: 2015, planets: [{ name: "Venus", date: "Jun 30", equipment: "C8", description: "Conjunction with Jupiter", image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=1000" }] },
  { year: 2014, planets: [{ name: "Mars", date: "Apr 08", equipment: "C8", description: "Small disk size", image: "https://images.unsplash.com/photo-1614728853970-bc5c1a1636c9?auto=format&fit=crop&q=80&w=1000" }] },
  { year: 2013, planets: [{ name: "Saturn", date: "Apr 28", equipment: "C8", description: "Cassini Division clear", image: saturnImage }] },
  { year: 2012, planets: [{ name: "Jupiter", date: "Dec 03", equipment: "Newtonian 8", description: "Cloud band activity", image: jupiterImage }] },
  { year: 2011, planets: [{ name: "Jupiter", date: "Oct 29", equipment: "Newtonian 8", description: "First serious imaging attempts", image: jupiterImage }] },
  { year: 2010, planets: [{ name: "Saturn", date: "Mar 21", equipment: "Newtonian 6", description: "Early webcam capture", image: saturnImage }] },
];

export default function PlanetaryArchive() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground uppercase tracking-widest">
          <Link href="/gallery" className="hover:text-primary transition-colors">Images</Link>
          <ChevronRight size={14} />
          <span className="text-primary">Planetary Archive</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Planetary Archive</h1>
          <p className="text-xl text-muted-foreground font-light">
            A chronological record of solar system observations from 2010 to present.
            Documenting the ever-changing atmospheres of our celestial neighbors.
          </p>
        </div>

        {/* Archive Table/Timeline */}
        <div className="space-y-16">
          {planetaryData.map((yearGroup, index) => (
            <motion.div 
              key={yearGroup.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative border-l border-white/10 pl-8 md:pl-12"
            >
              {/* Year Marker */}
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              
              <h2 className="text-4xl font-serif text-white/90 mb-8">{yearGroup.year}</h2>

              <div className="grid grid-cols-1 gap-6">
                {yearGroup.planets.map((record, i) => (
                  <div 
                    key={i} 
                    className="group bg-muted/30 border border-white/5 hover:border-primary/50 transition-all p-4 md:p-6 flex flex-col md:flex-row gap-6 items-start md:items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-full md:w-32 aspect-square bg-black/50 overflow-hidden flex-shrink-0">
                      <img 
                        src={record.image} 
                        alt={`${record.name} ${yearGroup.year}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <h3 className="text-2xl font-serif text-primary">{record.name}</h3>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                          <Calendar size={12} />
                          <span>{record.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/80 font-light">{record.description}</p>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-mono pt-2">
                        <Telescope size={12} />
                        <span>Equipment: {record.equipment}</span>
                      </div>
                    </div>

                    {/* Action */}
                    <button className="px-6 py-2 border border-white/10 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors self-start md:self-center shrink-0">
                      View Full Res
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
