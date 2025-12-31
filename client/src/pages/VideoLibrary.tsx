import { Navigation, Footer } from "@/components/Layout";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Planetary Imaging by Agapios Elia",
    description: "Presentation on The Astro Imaging Channel about planetary imaging techniques.",
    thumbnail: "https://img.youtube.com/vi/3Yq56STIZkE/maxresdefault.jpg",
    category: "Presentation",
    link: "https://www.youtube.com/watch?v=3Yq56STIZkE"
  },
  {
    id: 2,
    title: "Planetary Imaging by Agapios Elia Part 2",
    description: "Part 2 of the presentation on The Astro Imaging Channel.",
    thumbnail: "https://img.youtube.com/vi/eCxwL8MGIIU/maxresdefault.jpg",
    category: "Presentation",
    link: "https://www.youtube.com/watch?v=eCxwL8MGIIU"
  },
  {
    id: 3,
    title: "Mars through the telescope May 30th, 2016",
    description: "Actual live footage of Mars captured through the telescope.",
    thumbnail: "https://img.youtube.com/vi/I7vJXvrVicI/maxresdefault.jpg",
    category: "Planetary",
    link: "https://www.youtube.com/watch?v=I7vJXvrVicI"
  },
  {
    id: 4,
    title: "Jupiter through the telescope",
    description: "Live view of Jupiter captured through the telescope.",
    thumbnail: "https://img.youtube.com/vi/stRrtbuRy9Y/maxresdefault.jpg",
    category: "Planetary",
    link: "https://www.youtube.com/watch?v=stRrtbuRy9Y"
  },
  {
    id: 5,
    title: "Jupiter with Europa through the telescope",
    description: "Jupiter and its moon Europa captured through the telescope.",
    thumbnail: "https://img.youtube.com/vi/Zd8mlxDgD54/maxresdefault.jpg",
    category: "Planetary",
    link: "https://www.youtube.com/watch?v=Zd8mlxDgD54"
  },
  {
    id: 6,
    title: "Jupiter through the telescope in poor seeing",
    description: "Demonstrating the effects of poor atmospheric seeing on planetary imaging.",
    thumbnail: "https://img.youtube.com/vi/LJFedz463bc/maxresdefault.jpg",
    category: "Planetary",
    link: "https://www.youtube.com/watch?v=LJFedz463bc"
  },
  {
    id: 7,
    title: "The Sun with massive sunspot group AR2192",
    description: "Actual live footage of massive sunspot group AR2192.",
    thumbnail: "https://img.youtube.com/vi/iHp_oOdbk8Q/maxresdefault.jpg",
    category: "Solar",
    link: "https://www.youtube.com/watch?v=iHp_oOdbk8Q"
  },
  {
    id: 8,
    title: "Partial Solar Eclipse, March 20, 2015",
    description: "Footage of the partial solar eclipse from March 20, 2015.",
    thumbnail: "https://img.youtube.com/vi/U3JU_9JvuHA/maxresdefault.jpg",
    category: "Solar",
    link: "https://www.youtube.com/watch?v=U3JU_9JvuHA"
  }
];

export default function VideoLibrary() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Video Library</h1>
          <p className="text-xl text-muted-foreground font-light">
            Live observing sessions, tutorials, and timelapses of the cosmos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-video overflow-hidden bg-muted mb-4 border border-white/5 group-hover:border-primary/50 transition-colors">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-2xl">
                    <Play className="text-white fill-current ml-1" size={24} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-primary/80">{video.category}</span>
                </div>
                <h3 className="text-xl font-serif leading-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
