import { Hero } from "@/components/Hero";
import { Navigation, Footer } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import jupiterImage from "@assets/547918177_10162405513186725_109528169010343799_n_1765548039342.jpg";
import moonImage from "@assets/467714779_10161122667236725_677420416788171913_n_1765548090136.jpg";
import solarImage from "@assets/solar_1765548180523.jpg";
import deepSkyImage from "@assets/deep_sky_1765548180522.jpg";


const categories = [
  {
    id: 1,
    title: "Planetary",
    image: jupiterImage,
    link: "/gallery?category=planetary",
  },
  {
    id: 2,
    title: "Lunar",
    image: moonImage,
    link: "/gallery?category=lunar",
  },
  {
    id: 3,
    title: "Solar",
    image: solarImage,
    link: "/gallery?category=solar",
  },
  {
    id: 4,
    title: "Deep Sky",
    image: deepSkyImage,
    link: "/gallery?category=deep-sky",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <section className="py-24 px-6 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="flex flex-col md:flex-row gap-8 w-full">
             <div className="max-w-xl">
               <h2 className="text-xs uppercase tracking-[0.2em] text-primary mb-6">About me</h2>
               <h3 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">I've been staring at the sky for as long as I can remember, tinkering with telescopes and cameras trying to see the Universe just a little bit more clearly.</h3>
               <div className="text-muted-foreground font-light leading-relaxed space-y-6">
                 <p>
                   This site contains a collection of images of things up in the sky that I've taken over the years since I began to see the Universe for the vast place that it is.
                 </p>
                 <p>Currently located south of Nicosia, the busy and light polluted capital of Cyprus where I live with my beautiful wife & children. A short drive to the mountains is all that stands between us and the splendor of the dark night sky. I also work as the astronomer at Troodos Observatory operating the 0.5m telescope. </p>
               </div>
             </div>
             <div className="flex-1 flex justify-end">
               <img src="/images/profile.jpg" alt="Agapios Elia" className="max-w-[300px] w-full object-contain" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={category.id} href={category.link} className="block group cursor-pointer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="aspect-square overflow-hidden mb-6 bg-muted relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-serif uppercase tracking-widest group-hover:text-primary transition-colors text-center">
                  {category.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-32 bg-secondary/10 border-y border-white/5">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">"We are somewhere between Immensity and Eternity"</h2>
          <p className="text-muted-foreground italic mb-12">- Carl Sagan</p>
          <Link href="/workshops" className="inline-block px-10 py-4 border border-primary hover:bg-primary hover:text-primary-foreground transition-colors uppercase tracking-[0.2em] text-xs">Join me under the stars</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
