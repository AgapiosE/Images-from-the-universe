import { Navigation, Footer } from "@/components/Layout";
import { Telescope, MapPin, Calendar, Languages } from "lucide-react";

const packages = [
  {
    name: "Stargazing Session",
    location: "Troodos Astropark",
    languages: "English / Greek",
    description: "Join me for a guided tour of the night sky using your naked eyes, binoculars & telescopes. Perfect for beginners and seasoned stargazers.",
    features: ["2 Hour Session", "Guided Constellation Tour", "Telescope Viewing", "Q&A with Astronomer"]
  },
  {
    name: "Astrophotography Workshop",
    location: "Private / Group",
    languages: "English / Greek",
    description: "Learn how to capture the cosmos. From wide-field milky way shots to deep sky imaging.",
    features: ["Equipment Setup", "Camera Settings", "Tracking Techniques", "Post-Processing Basics"]
  },
  {
    name: "Educational Seminar",
    location: "Schools / Events",
    languages: "English / Greek",
    description: "Presentations on astronomy, space exploration, and the importance of dark skies.",
    features: ["Interactive Presentation", "Solar Observing (Day)", "Q&A Session", "Custom Topics"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 uppercase tracking-wide">Workshops</h1>
          <p className="text-xl text-muted-foreground font-light">
            Sharing the wonders of the universe through education and observation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className="border border-white/5 p-10 hover:bg-white/5 transition-colors group">
              <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{pkg.name}</h3>
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span className="uppercase tracking-widest">{pkg.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Languages size={14} />
                  <span className="uppercase tracking-widest">{pkg.languages}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-8 min-h-[80px] leading-relaxed font-light">{pkg.description}</p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm tracking-wide text-white/80">
                    <Telescope size={16} className="text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`mailto:agapios@agapioselia.com?subject=Request for ${pkg.name}`}
                className="w-full py-4 border border-white/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-[0.2em] text-xs block text-center"
              >
                Request Info
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
