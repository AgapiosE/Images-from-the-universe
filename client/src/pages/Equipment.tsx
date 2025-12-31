import { Navigation, Footer } from "@/components/Layout";
import { motion } from "framer-motion";
import saturnCamera from "@assets/533_1765577207958.jpg";
import ed100 from "@assets/ed100_1765577334934.jpg";
import phoenix from "@assets/phoenix_1765577688545.jpg";
import c925Setup from "@assets/c925_setup_2020.jpeg";
import equipmentDetail from "@assets/equipment_detail_2020.jpeg";
import c925New from "@assets/c925_new_2017.jpeg";
import zwoAsi224mc from "@assets/zwo_asi224mc.png";
import philipsSpc900nc from "@assets/philips_spc900nc.jpg";
import historicalSetup from "@assets/historical_setup_2010.jpg";

export default function Equipment() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 uppercase tracking-wide">Equipment</h1>
        <h2 className="text-xl md:text-2xl font-serif text-muted-foreground mb-16 italic">Tools of the Trade (2017-Present)</h2>

        <div className="space-y-20">
          {/* Main Scope Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif border-b border-white/10 pb-4">Celestron C9.25 Schmidt-Cassegrain</h3>
              
              <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
                <p>
                  In late 2016 I had to part with my original C9.25. The thought of upgrading got stuck in my head and I acted on it too quickly without proper consideration. The C9.25 was and always will be the ideal instrument for me, my circumstances and my seeing conditions.
                </p>
                <p className="mt-4">
                  Nearly a year later and thanks to two friends of mine I became the owner of another C9.25! I have only had limited time with this telescope as of writing this but the views are very promising, this telescope produces very sharp, refractor-like views, much more so than the previous one. It's planetary performance remains to be seen, but it has so far produced a very pleasing result in lunar imaging.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-8">
                <h4 className="text-lg font-serif mb-4 uppercase tracking-wider text-primary">Current Configuration</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mono text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Celestron C9.25 SCT (235mm f/10)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Celestron CGEM Mount</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />ZWO ASI 224 MC</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Celestron Ultima 2x Barlow</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Moonlite CS Focuser</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Pegasus Astro Focus Cube</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Pegasus Astro Pocket Power Box</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />ZWO Electronic Filter Wheel</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />ZWO ADC Corrector</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Baader Red Filter (610nm)</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="aspect-[4/3] bg-muted overflow-hidden rounded-lg border border-white/10">
                <img 
                  src={c925Setup}
                  alt="Celestron C9.25 Setup" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted overflow-hidden rounded-lg border border-white/10">
                  <img 
                    src={equipmentDetail}
                    alt="Equipment Detail" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square bg-muted overflow-hidden rounded-lg border border-white/10">
                  <img 
                    src={c925New}
                    alt="The New C9.25" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground font-mono mt-2">Current imaging setup configuration</p>
            </div>
          </section>

          {/* Skywatcher ED100 Black Diamond Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-white/5 pt-16">
            <div className="order-2 lg:order-1 grid gap-4">
              <div className="aspect-[4/3] bg-muted overflow-hidden rounded-lg border border-white/10">
                <img 
                  src={ed100} 
                  alt="Skywatcher ED100 Black Diamond" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-muted-foreground font-mono mt-2">Skywatcher ED100 Black Diamond Refractor</p>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-3xl font-serif border-b border-white/10 pb-4">Skywatcher ED100 Black Diamond</h3>
              
              <div className="prose prose-invert max-w-none text-muted-foreground font-light leading-relaxed">
                <p>
                  A versatile 100mm f/9 doublet ED refractor that serves as an excellent instrument for wide-field observation and solar imaging. Its doublet lens design with FPL-53 glass provides excellent color correction and sharp, high-contrast views.
                </p>
                <p className="mt-4">Often used for solar observation with a white light wedge or for grabbing quick views when setting up the larger C9.25 isn't feasible. </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-8">
                <h4 className="text-lg font-serif mb-4 uppercase tracking-wider text-primary">Key Specifications</h4>
                <ul className="grid grid-cols-1 gap-3 text-sm font-mono text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Aperture: 100mm (4")</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Focal Length: 900mm (f/9)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Optical Design: ED Doublet Refractor</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Glass: Schott / FPL-53 ED Glass</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Phoenix Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border-t border-white/5 pt-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif border-b border-white/10 pb-4">"Phoenix" 90mm f/10.1 Doublet Achromat</h3>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-serif mb-4 uppercase tracking-wider text-primary">Key Specifications</h4>
                <ul className="grid grid-cols-1 gap-3 text-sm font-mono text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Aperture: 90mm (3.5")</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Focal Length: 910mm (f/10.1)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Optical Design: Achromatic Doublet</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full" />Status: Active (1997-Present)</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="aspect-[3/4] bg-muted overflow-hidden rounded-lg border border-white/10">
                <img 
                  src={phoenix} 
                  alt="Phoenix 90mm Refractor" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-center text-muted-foreground font-mono mt-2">The "Phoenix" 90mm Achromat on AVX</p>
            </div>
          </section>

          {/* Mounts Section */}
          <section className="border-t border-white/5 pt-16">
            <h3 className="text-3xl font-serif mb-8">Mounts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-serif mb-4 text-primary">Celestron Advanced VX</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  (2017 - Present)
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This mount is the re-incarnation of the older CG5-GT. It offers robust polar alignment controls and a front-facing non-moving DEC housing. It utilizes the effective A.S.P.A. method for precise polar alignment even without a clear view of Polaris, allowing for imaging at ~5000mm FL.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-serif mb-4 text-primary">Skywatcher NEQ6</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  (2012 - Present)
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Permanently mounted since day 1, this mount is a true workhorse. It handles the 9.25" easily for visual & planetary work. With patience and the right tools, it provides adequate results in deep sky photography. Tracking is excellent and pointing accuracy is very good.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-primary/30 transition-colors">
                <h4 className="text-xl font-serif mb-4 text-primary">Celestron CG5-GT</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  (2005-2008, 2009-2012 & 2017)
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A light-weight, portable computerized Go-To mount. The v4.16 iteration featured the remarkable All Star Polar Alignment method, especially useful since my view of Polaris is blocked from my current location.
                </p>
              </div>
            </div>
          </section>

          {/* Cameras & Accessories */}
          <section className="border-t border-white/5 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-muted overflow-hidden rounded-lg border border-white/10 col-span-2">
                  <img 
                    src={saturnCamera} 
                    alt="Player One Saturn-C SQR" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <p className="text-xs text-center text-muted-foreground font-mono mt-2 p-2">Player One Saturn-C SQR (Current)</p>
                </div>
                <div className="aspect-square bg-muted overflow-hidden rounded-lg border border-white/10 col-span-1">
                  <img 
                    src={zwoAsi224mc}
                    alt="ZWO ASI224MC and Moonlite focuser" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <p className="text-xs text-center text-muted-foreground font-mono mt-2 p-2">ZWO ASI224MC & Moonlite Focuser</p>
                </div>
                <div className="aspect-square bg-muted overflow-hidden rounded-lg border border-white/10 col-span-1">
                  <img 
                    src={philipsSpc900nc}
                    alt="Philips SPC900NC" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <p className="text-xs text-center text-muted-foreground font-mono mt-2 p-2">Philips SPC900NC with Baader Filter</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h3 className="text-3xl font-serif">Cameras & Accessories</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-serif text-primary mb-2 uppercase tracking-wide">Imaging Cameras</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Player One (P1) Saturn - C SQR</span>
                      <span className="font-mono text-xs opacity-50">Current</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>ZWO ASI 224 MC</span>
                      <span className="font-mono text-xs opacity-50">2015-Present</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>ZWO ASI 120 MM</span>
                      <span className="font-mono text-xs opacity-50">2014-2015</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Imaging Source DBK21AU04.AS</span>
                      <span className="font-mono text-xs opacity-50">2011-2014</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Philips SPC900NC</span>
                      <span className="font-mono text-xs opacity-50">2006-2011</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Nikon D7200</span>
                      <span className="font-mono text-xs opacity-50">DSLR</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-1">
                      <span>Canon EOS 550D</span>
                      <span className="font-mono text-xs opacity-50">DSLR</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-serif text-primary mb-2 uppercase tracking-wide">Filters</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Astronomik IR Block", "ZWO IR Block", "ZWO LRGB", "Astronomik 742nm", "Baader Red (610nm)"].map(filter => (
                      <span key={filter} className="text-xs border border-white/10 px-2 py-1 rounded bg-white/5 text-muted-foreground">
                        {filter}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-serif text-primary mb-2 uppercase tracking-wide">Other Hardware</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>ZWO ADC (Atmospheric Dispersion Corrector)</li>
                    <li>Celestron Ultima SV Barlow 2x</li>
                    <li>Baader Q-turret Barlow 2.25x/1.3x</li>
                    <li>Moonlite Motorised Focuser</li>
                    <li>Kendrick Dew Heater Controller</li>
                    <li>Telrad Finder</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Historical Setup */}
          <section className="border-t border-white/5 pt-16 pb-8">
            <h3 className="text-3xl font-serif mb-8">Historical Configurations</h3>
            <div className="relative aspect-[21/9] bg-muted overflow-hidden rounded-lg border border-white/10 group">
              <img 
                src={historicalSetup}
                alt="Historical Setup Summer 2010" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute bottom-0 left-0 bg-black/60 p-6 w-full backdrop-blur-sm">
                <h4 className="text-xl font-serif text-white mb-2">Summer 2010 Configuration</h4>
                <p className="text-sm text-gray-300">
                  The C9.25 after an early morning session. At the time I was located in a 3rd floor apartment in Nicosia.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
}
