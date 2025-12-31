import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Blog from "@/pages/Blog";
import Services from "@/pages/Services";
import VideoLibrary from "@/pages/VideoLibrary";
import Equipment from "@/pages/Equipment";
import PlanetaryArchive from "@/pages/PlanetaryArchive";
import DeepSky from "@/pages/DeepSky";
import Solar from "@/pages/Solar";
import Lunar from "@/pages/Lunar";
import Jupiter from "@/pages/planetary/Jupiter";
import Saturn from "@/pages/planetary/Saturn";
import Mars from "@/pages/planetary/Mars";
import Mercury from "@/pages/planetary/Mercury";
import Venus from "@/pages/planetary/Venus";
import Uranus from "@/pages/planetary/Uranus";
import Neptune from "@/pages/planetary/Neptune";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/gallery/planetary-archive" component={PlanetaryArchive} />
      <Route path="/gallery/deep-sky" component={DeepSky} />
      <Route path="/gallery/solar" component={Solar} />
      <Route path="/gallery/lunar" component={Lunar} />
      <Route path="/gallery/planetary/mercury" component={Mercury} />
      <Route path="/gallery/planetary/venus" component={Venus} />
      <Route path="/gallery/planetary/jupiter" component={Jupiter} />
      <Route path="/gallery/planetary/saturn" component={Saturn} />
      <Route path="/gallery/planetary/mars" component={Mars} />
      <Route path="/gallery/planetary/uranus" component={Uranus} />
      <Route path="/gallery/planetary/neptune" component={Neptune} />
      <Route path="/videos" component={VideoLibrary} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/blog" component={Blog} />
      <Route path="/workshops" component={Services} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
