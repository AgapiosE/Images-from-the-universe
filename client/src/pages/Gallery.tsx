import { Navigation, Footer } from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import sunWhiteLight from "@assets/solar_1765548655005.jpg";
import jupiter1 from "@assets/JUP_28112025_2148UT_14MINSv2_1765548706521.jpg";
import jupiter2 from "@assets/JUP_28112025_2148UT_14MINSv2_1765548796950.jpg";
import saturnTitan from "@assets/SATURN_TITAN_TRANSIT_22112025_1765548846661.jpg";
import jupiterDoubleShadow from "@assets/JUPITER_14102025_DOUBLE_SHADOW_TRANSIT_1765548864165.jpg";
import milkyWayCore from "@assets/490304303_10161760764856725_6076590553882459655_n_1765549017395.jpg";
import mars2020_1 from "@assets/120330928_10158106961701725_7893681807612442933_n_1765578852368.jpg";
import mars2020_2 from "@assets/121173632_10158132538151725_4071456518026625663_n_1765578852368.jpg";
import jupiterIo from "@assets/472043073_10161460547261725_679341866087157049_n_1765578852369.jpg";
import moonDetail from "@assets/480154460_10161546367216725_2052263161218112800_n_1765578852369.jpg";
import sunAR2192 from "@assets/480473835_10161553144846725_137348599393461998_n_1765578852369.jpg";
import cometStarry from "@assets/481045795_10161585877226725_651986698881970356_n_1765578852369.jpg";
import moonObservatory from "@assets/481151395_10161585877126725_4810267197535293268_n_1765578852369.jpg";
import milkyWayVertical from "@assets/484237672_10161646118876725_2672732581127386597_n_1765578852369.jpg";
import saturn2022 from "@assets/506255192_10161981940781725_9093836024193339354_n_1765578852370.jpg";
import partialEclipse from "@assets/506479704_10162004030601725_915842206499036979_n_1765578852370.jpg";
import jupiter2022 from "@assets/507554042_10162003966846725_5042957780394167297_n_1765578852370.jpg";
import spiralGalaxy from "@assets/515453199_10162095864671725_4979961838538648783_n_1765578852370.jpg";
import cometWindTurbines from "@assets/516898949_10162130943661725_180978891293579648_n_1765578852370.jpg";
import cometObservatory from "@assets/517283308_10162155087761725_2459358794694423699_n_1765578852371.jpg";
import cometTail from "@assets/518379443_10162139318466725_2166724087622918189_n_1765578852371.jpg";
import lunarEclipse from "@assets/545186897_10162378718386725_1500878690056542676_n_1765578852371.jpg";
import saturnDoubleTransitNew from "@assets/547918177_10162405513186725_109528169010343799_n_1765578852371.jpg";

const galleryItems = [
  { id: 1, src: sunWhiteLight, category: "Solar", title: "White Light Solar Full Disk", span: "" },
  { id: 3, src: jupiter2, category: "Planetary", title: "Jupiter with Great Red Spot", span: "" },
  { id: 4, src: saturnTitan, category: "Planetary", title: "Saturn & Titan Transit", span: "" },
  { id: 5, src: jupiterDoubleShadow, category: "Planetary", title: "Jupiter Double Shadow Transit", span: "" },
  { id: 6, src: milkyWayCore, category: "Deep Sky", title: "Milky Way Core", span: "col-span-2" },
  { id: 7, src: mars2020_1, category: "Planetary", title: "Mars (2020)", span: "" },
  { id: 8, src: mars2020_2, category: "Planetary", title: "Mars Detailed View", span: "" },
  { id: 9, src: jupiterIo, category: "Planetary", title: "Jupiter with Io Eclipse", span: "col-span-2" },
  { id: 10, src: moonDetail, category: "Lunar", title: "Lunar Surface Detail", span: "col-span-2" },
  { id: 11, src: sunAR2192, category: "Solar", title: "Sun with AR 2192", span: "" },
  { id: 12, src: cometStarry, category: "Deep Sky", title: "Comet in Starry Sky", span: "row-span-2" },
  { id: 13, src: moonObservatory, category: "Landscape", title: "Moon Rising over Observatory", span: "row-span-2" },
  { id: 14, src: milkyWayVertical, category: "Deep Sky", title: "Milky Way Vertical", span: "row-span-2" },
  { id: 15, src: saturn2022, category: "Planetary", title: "Saturn (2022)", span: "" },
  { id: 16, src: partialEclipse, category: "Solar", title: "Partial Solar Eclipse", span: "" },
  { id: 17, src: jupiter2022, category: "Planetary", title: "Jupiter (2022)", span: "" },
  { id: 18, src: spiralGalaxy, category: "Deep Sky", title: "Spiral Galaxy", span: "col-span-2" },
  { id: 19, src: cometWindTurbines, category: "Landscape", title: "Comet over Wind Turbines", span: "row-span-2" },
  { id: 20, src: cometObservatory, category: "Landscape", title: "Comet over Observatory", span: "col-span-2" },
  { id: 21, src: cometTail, category: "Deep Sky", title: "Comet Tail Detail", span: "row-span-2" },
  { id: 22, src: lunarEclipse, category: "Lunar", title: "Lunar Eclipse Sequence", span: "col-span-2" },
  { id: 23, src: saturnDoubleTransitNew, category: "Planetary", title: "Saturn Double Transit", span: "" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-12 uppercase tracking-wide">Favourites</h1>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden bg-muted ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 scale-[1.3] group-hover:scale-[1.4]"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
