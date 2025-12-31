import { Navigation, Footer } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Share2, Link2, Check } from "lucide-react";
import { toast } from "sonner";
import southernSkyImage from "@assets/Souther_Sky_14122025_1765784439772.jpg";
import jupiterDec13Image from "@assets/JUP_13DEC_2025_2147UT_3MINS_1766139422493.jpg";

const posts = [
  {
    id: 0,
    title: "Jupiter on December 13th 2025",
    date: "December 15, 2025",
    excerpt: "Poor seeing on Saturday night (but excellent transparency!) for this quick set of 6x 30sec derotated images.",
    content: `Poor seeing on Saturday night (but excellent transparency!) for this quick set of 6x 30sec derotated images. I was hoping for better seeing on Jupiter but at least got a fantastic Geminid show and some awesome visual observations of notable DSO targets.`,
    category: "Planetary",
    image: jupiterDec13Image
  },
  {
    id: 1,
    title: "The Southern Sky",
    date: "December 14, 2025",
    excerpt: "Gazing low to the south, I always think that there is 'another sky' beyond the horizon, the sky of the Southern Hemisphere.",
    content: `Gazing low to the south, I always think that there is "another sky" beyond the horizon, the sky of the Southern Hemisphere.

Although our geographical latitude of 34 degrees allows us to see a considerably large part of the southern celestial dome, there are other celestial sights "further down" that remain unseen by us.

In the photograph, we are standing in the observatory's parking lot, looking straight south toward Limassol, which is (fortunately) to the left, hidden behind the mountain.

High near the top edge of the image, Sirius is visible, the brightest star in the sky. The star barely distinguishable at just 2 degrees above the horizon is Canopus—the second brightest star in the sky. Canopus is a rare sight for our latitude, visible for only about two hours, as it barely rises above 2 degrees. Catching a glimpse of it is always a small accomplishment. I imagine the residents of Australia or South Africa must feel something similar about our own northern stars.

The exceptional conditions we had this past weekend, from Saturday to Sunday, gifted us another wonderful night of stargazing. A little earlier than the moment this photograph was taken, I was observing the spectacular barred spiral galaxy NGC1365 with the telescope in a nearly horizontal position, its structure easily visible. And all of this was unfolding while the Geminids meteor shower was at its peak in the sky, with rich activity and abundant shooting stars in all directions.

10s, ISO1600, A56, photo: Agapios Elia`,
    category: "Observing",
    image: southernSkyImage
  },
  {
    id: 2,
    title: "The Sun with AR 4294 / 4296",
    date: "December 04, 2025",
    excerpt: "Visible are the massive active regions featuring spectacular sunspots #4296 & #4294, as well as various others of a more 'modest' size. The large central active region, #4294, currently contains 55 active sunspots!",
    content: `Visible are the massive active regions featuring spectacular sunspots #4296 & #4294 (the large ones in the center and towards the left), as well as various others of a more "modest" size.

The large central active region, #4294, currently contains 55 active sunspots, while #4296 has 25! Considering the Sun's diameter (1.3 million kilometers), the length of active region #4294 is estimated to be 6 to 7 times the diameter of Earth—approximately 70,000 to 80,000 kilometers.

WARNING: Never look at the Sun with the naked eye or through any optical instrument unless you are using a safe solar filter! You risk serious and permanent damage to your eyesight and your equipment.

Technical Details:
Telescope: 90mm f/10
Filter: Baader Astrosolar
Camera: Nikon D7200
Photo: Agapios Elia`,
    category: "Solar",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/wl-fc-sol-04122025-0737ut_orig.jpg"
  },
  {
    id: 3,
    title: "Jupiter on November 28th",
    date: "December 04, 2025",
    excerpt: "Good seeing conditions following a completely overcast sky, in anticipation of a severe weather front. I'm having some issue getting the right color as well as dealing with some undersampling.",
    content: `Good seeing conditions following a completely overcast sky, in anticipation of a severe weather front. I'm having some issue getting the right color as well as dealing with some undersampling as I'm shooting at ~ f/14 with this setup.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/jup-28112025-2148ut-14minsv2_orig.jpg"
  },
  {
    id: 4,
    title: "Jupiter on November 14th",
    date: "November 19, 2025",
    excerpt: "A quick session under poor seeing, primarily to try out Wavesharp (yay!). 30sec subs, CDK20/P1533CwADC.",
    content: `A quick session under poor seeing, primarily to try out Wavesharp (yay!).

30sec subs, CDK20/P1533CwADC`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/jupiter-14112025-2252ut_orig.jpg"
  },
  {
    id: 5,
    title: "November 04th, 2025",
    date: "November 04, 2025",
    excerpt: "A very quick smartphone afocal shot of the Sun through the ED100 refractor using a solar wedge. A smartphone adapter was used to attach the device on the focuser. Some minor processing in Snapseed for framing and contrast.",
    content: `A very quick smartphone afocal shot of the Sun through the ED100 refractor using a solar wedge. A smartphone adapter was used to attach the device on the focuser. Some minor processing in Snapseed for framing and contrast.

AR (L to R): 4275, 4274, 4272, 4273, 4267 (Right edge).`,
    category: "Solar",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/20251104-111922_orig.jpg"
  },
  {
    id: 6,
    title: "CGEM Azimuth motion improvement - Helicoil inserts",
    date: "September 19, 2019",
    excerpt: "My CGEM mount has always had jumpy/jerky motion in Azimuth. This was primarily due to the threads for the azimuth bolts becoming stripped. I was able to source a helicoil thread repair kit locally.",
    content: `My CGEM mount has always had jumpy/jerky motion in Azimuth. This was primarily due to the threads for the azimuth bolts becoming stripped. Also, the polar alignement pin threads were stripped as well and once pressured on by one of the bolts, the pin would lift and tilt in place, giving me a sort of backlash effect on the AZ bolts.

I had read various solutions proposed by CN members on improvements for this, the helicoil insert being the most effective and permanent, so I finally attempted it myself.

I was able to source a helicoil thread repair kit locally. The kit includes the inserts, a drill bit, a tap and the special insertion tool with a punch to break off the tongue at the end of the coil, once inserted.

Due to the damaged threads, the stock AZ bolts have developed flat spots in the threads and are still a bit coarse when adjusting, despite lubrication. I will be replacing these with same size bolts with adjustable ratchet heads shortly.

The whole process took a little over an hour and was fairly straight forward. Testing the mount now I can see a major improvement in the AZ motion. Soon I will be testing it under the stars to form a complete opinion.`,
    category: "Equipment",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/published/20190919-164010-large.jpg?1568900661"
  },
  {
    id: 7,
    title: "Deception",
    date: "April 05, 2018",
    excerpt: "The forecasts for this night seemed nearly ideal. Meteoblue as well as Unisys & Wundermap data all pointed to a night of very good conditions. The true shocker came in the early morning hours.",
    content: `The forecasts for this night seemed nearly ideal. Meteoblue as well as Unisys & Wundermap data all pointed to a night of very good conditions. Naked eye examinations of stars at zenith showed little or no twinkling and stars at 30-ish elevations showed a slight calm wobble. Early in the night collimation tests of the telescope showed average to good conditions but the true shocker came in the early morning hours. This must be amongst the worst conditions I have ever imaged! A washed out, soft and nearly feature-less Jupiter! Mars, a bright orange wobbling mess that was so bad it was almost impossible to tune the ADC correctly. Never the less, here are the images.

P.S. I am extremely baffled as to why this has happened..

P.S. 2 I got the C9,25 fairly well collimated regardless of the bad seeing!`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/jup-05042018-0109ut-adc-4x90-100-nup_orig.jpg"
  },
  {
    id: 8,
    title: "2 months later",
    date: "April 02, 2018",
    excerpt: "It has been two whole months. After battling poor weather and saharan dust attackes, the skies cleared a bit yesterday to allow the possibility of imaging. The early morning hours were spent on observing Jupiter.",
    content: `It has been two whole months. After battling poor weather and saharan dust attackes, the skies cleared a bit yesterday to allow the possibility of imaging. After spending the first part o the night attempting to fine tune collimation on the telescope, the early morning hours were spent on observing Jupiter. Now a healthy 42" across, the giant offers a wealth of detail to be observed. The seeing was fair to poor for these captures however and the transparency was also poor as I did notice I was imaging through a veil of thin cirrus clouds, illuminated by the nearly full Moon. I also had a chance to test out the ADC/Barlow combo I put together and happy to report it seems to be doing it's job very well indeed.`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/jup02042018-0021ut-derot-auto_orig.png"
  },
  {
    id: 9,
    title: "Let's try this again (Jup 30_01_2018)",
    date: "January 30, 2018",
    excerpt: "Amazing that I haven't used the blog in nearly four years. Anyway... Last night seemed like the first chance for decent conditions since the new year. The (new) C9,25 was set up on the AVX at 23:00.",
    content: `Amazing that I haven't used the blog in nearly four years. Anyway...

Last night seemed like the first chance for decent conditions since the new year. The (new) C9,25 was set up on the AVX at 23:00 and half an hour later it was polar aligned and ready. Attempted to fine tune my collimation using Metaguide and got a fairly even pattern. Occuppied myself with some lunar viewing (amazing!) and covered up the scope by 00:30 in anticipation of dawn. Got up at 04:00 and headed outside. Upon aiming at Jupiter I immediately could see that conditions were far from expected. A very high frequency blurring was prevailing but some fleeting moments of good seeing could be glipmsed. Initiated FC's autoguider and autorun features and awaited patiently for that good window to press "start". I gathered a total of 47 captures of mostly mediocre results apart from two short sessions, one early and one near the end.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/jup30012018-0307utmid-6x90-v2-nup_orig.jpg"
  },
  {
    id: 10,
    title: "Season opener",
    date: "October 11, 2014",
    excerpt: "After a long absence, I finally returned at the scope with an early morning wake up call to see if Jupiter had climbed high enough for imaging. Having recently upgraded the observatory with a concrete slab and cast iron pier.",
    content: `After a long absence, I finally returned at the scope with an early morning wake up call to see if Jupiter had climbed high enough for imaging. Having recently upgraded the observatory with a concrete slab and cast iron pier I had yet to see them in action so I decided to venture out early in the morning to see what's going on. Started off with a check up on collimation which I was not able to fine tune completely as the mediocre seeing did not allow precise evaluation. Never the less I did attempt some lunar shots with the ASI120MM and I must say the results look very promising!
    
I urgently need to clean up the sensor as it has accumulated A TON of dust, something which made imaging a challenge as there are virtually no clear spots on the chip left! Shortly before dawn and with the sky turning blue, I switched to the Giant. The seeing remained a mediocre levels but in any case this was a trial run to see that everything works and prepare to throttle up as the days progress and Jupiter climbs higher and higher in the morning skies.`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1052960_orig.jpg"
  },
  {
    id: 11,
    title: "M27 The Dumbell Nebula",
    date: "July 27, 2014",
    excerpt: "Here's a first quick processing of last night's attempt. The night began extremely hazy and moist, cleared and dried up a bit after midnight but come dawn the humidity rose to 90%+ according to the observatory meter!",
    content: `Here's a first quick processing of last night's attempt. The night began extremely hazy and moist, cleared and dried up a bit after midnight but come dawn the humidity rose to 90%+ according to the observatory meter!

C9,25 SCT @ f/6.3 & EOS 550D
Guided with ST80 & ASI120MM
Lights: 25x 300sec ISO800
Darks: 8x 300sec ISO800
Processing: DSS & Photoshop

The Dumbbell Nebula (also known as Apple Core Nebula, Messier 27, M 27, or NGC 6853) is a planetary nebula in the constellation Vulpecula, at a distance of about 1,360 light years.

This object was the first planetary nebula to be discovered; by Charles Messier in 1764. At its brightness of visual magnitude 7.5 and its diameter of about 8 arcminutes, it is easily visible in binoculars, and a popular observing target in amateur telescopes.`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2436836.jpg?691"
  },
  {
    id: 12,
    title: "Some changes to the setup",
    date: "July 03, 2014",
    excerpt: "So what's new? I swapped the 50mm guider with the ST80 which now rides piggyback on the main scope, added a much heftier ADM/Losmandy D size bottom plate and gave the ASI120MM the task of guiding.",
    content: `So what's new? I swapped the 50mm guider with the ST80 which now rides piggyback on the main scope, added a much heftier ADM/Losmandy D size bottom plate and gave the ASI120MM the task of guiding. The problem is (as if there wasn't gonna be one!) that the whole setup is now a lot heavier and a lot more sensitive to vibration. I had to use the counterweight shaft extension to balance the load with the 2x 5kg weights I have but it seems that the extension makes the whole thing a lot more wobbly. Also did some tuning to the DEC and RA motors to eliminate play but I fear I may have gone too far cause I was simply unable to guide properly no matter what I did. The ASI works beautifully as a guider and what really caught my attention is the fact that I can see the target through the guide window something that was simply impossible with the DBK. So here is a small test-drive at M3 using the new setup (C9,25/ST80/ASI120MM/EOS550D). Only 2x180sec at ISO800 no darks as I had a LOT of guiding issues that I need to solve!`,
    category: "Equipment",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/218477_orig.jpg?328"
  },
  {
    id: 13,
    title: "Sweet Summer Night...",
    date: "June 23, 2014",
    excerpt: "We headed up to Xyliatos with the car full of eager eyes, cameras and telescopes. Arriving at the site we were greeted by a few of our fellow astronomers already set up and waiting for darkness.",
    content: `We headed up to Xyliatos with the car full of eager eyes, cameras and telescopes. Arriving at the site we were greeted by a few of our fellow astronomers already set up and waiting for darkness. The familiar smell of the pine trees coupled with the majestic views of the water welcomed us once again. After setting up our scopes, Kyriacos and I went up the trail to the first bench and set up the cameras for some timelapse-ing. As darkness fell, more scopes and eyes arrived and pretty soon the ramp was full of astronomers young and old, new and experienced alike. The night started somewhat humid and with partial clouds drifting by, but up until 22:00 the skies cleared leaving behind a dry, crystal clear sky with the milky way arching overhead with remarkable detail. The views through the scopes were simply astonishing. The galactic star fields through the small refractors (80&120mm) were nothing short of spectacular. I found myself constantly returning to Nicos's 120mm to simply sweep the milkyway and stumble upon nebula after nebula, cluster after cluster and pause to marvel at the eerie blackness of those immense dark nebulae. Of special note, the view of M8 with its gas glouds glowing as if made of neon gas, M17 sporting a highly distinct Swan figure, M11 lost in a starry background, the Veil complex (although the pizza slice was nowhere to be seen in the unfiltered view) but especially those dark nebulae....fantastic views. The bigger scopes put on a show of their own too...M27 and M13 through the 11"'s were 3D like. A neat trick we tried was connecting a 2" filter wheel loaded with OIII, UHC-S and HBeta filters. My views with this combo on the Trifid nebula through one of the C11's were remarkable. At the flick of a finger you could switch from unfiltered view to high-contrast, enhanced nebulosity or specifically hydrogen visibility and back again. Quite convenient for dedicated deep sky-ers. All in all the night was very enjoyable and the timelapse I was able to put together isn't so bad either (if you take into account the rookie mistakes I made...)`,
    category: "Observing",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 14,
    title: "Partial Solar Eclipse November 2nd 2013",
    date: "November 03, 2013",
    excerpt: "I went up to the chapel of Panayia Tsampika near our home to capture this eclipse. I only took my trusty 55-250mm IS lens and tripod. I had to hand-hold the filter the whole time as its made for an 80mm scope.",
    content: `I went up to the chapel of Panayia Tsampika near our home to capture this eclipse. I only took my trusty 55-250mm IS lens and tripod. I had to hand-hold the filter the whole time as its made for an 80mm scope but never the less managed to capture some decent frames. I was joined by long time friend and fellow Mr. Doros who had his brand new Solarmax 60 with him...needless to say the views were amazing!`,
    category: "Solar",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8923351_orig.jpg"
  },
  {
    id: 15,
    title: "October 14, an all-niter to remember!",
    date: "October 17, 2013",
    excerpt: "I walked up to the observatory around sundown. Walked in, opened the roofs and made a cup of coffee. Dusted off my sky atlas and took a look at the area around Triangulum. Spotted NGC 925 and thought 'Huh, there's a nice galaxy fitting for my C9,25'!",
    content: `I walked up to the observatory around sundown. Walked in, opened the roofs and made a cup of coffee. Dusted off my sky atlas and took a look at the area around Triangulum. Spotted NGC 925 and though "Huh, there's a nice galaxy fitting for my C9,25"! I had a lot of time though until that little guy was overhead so I took to the Moon! I started with my C9,25 in Solar System mode (that is with the SCT crayford and 2x barlow installed) and shot a few avi's with the DBK21 thinking "wow I haven't done this in years!" and "hmmm, this is FUN!". Before I knew it it was getting darker and the Moon was getting lower. My wife suggested taking a full frame shot of the Moon and so I did. I think it turned out spectacular!

As the darkness fell, I switched to deep sky mode, fitted the f/6.3 corrector with the new (proper) SCT T-adapter and proper T-Ring from Baader and headed out to NGC925...this little guy deserves more attention! It's a magnificent barred spiral approx 30 million LY away in the constellation Triangulum. I picked up 11 4 minute frames, added the appropriate darks and this is what came out of processing. I have to say, it was the first time that PHD guided perfectly from the start with no hiccups and my miniguider seemed to be spot on focus. I like!

As dawn approached, Jupiter peaked up from the neighbours roof and so back to Solar System mode it was! Reducer off - SCT Focuser back on and Ultima 2X for this shot of Jupo which unfortunately was under average to poor seeing conditions. Never the less, I love the fact that I have an instrument that can offer such great variety. It feels like my nearly 5 year old SCT just got a whole new lease of life.`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2984945_orig.jpg"
  },
  {
    id: 16,
    title: "M57 - The Ring Nebula",
    date: "October 09, 2013",
    excerpt: "Whilst preparing the setup to shoot M33, I took a few test shots of M57 to confirm settings and check on guiding performance...this is what came up with 9 frames of 80sec duration on ISO1600, no darks, no flats e.t.c.",
    content: `Whilst preparing the setup to shoot M33, I took a few test shots of M57 to confirm settings and check on guiding performance...this is what came up with 9 frames of 80sec duration on ISO1600, no darks, no flats e.t.c.`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9525269_orig.jpg"
  },
  {
    id: 17,
    title: "M33 Triangulum Galaxy",
    date: "October 09, 2013",
    excerpt: "A massive, gorgeous spiral galaxy sometimes visible to the naked eye from dark skies. Approximately 2.5 million light years away in the constellation Triangulum (hence the name).",
    content: `A massive, gorgeous spiral galaxy sometimes visible to the naked eye from dark skies. Approximately 2.5 million light years away in the constellation Triangulum (hence the name). Imaged last night from my home observatory with EOS550D and C9,25(f/6.3) guided with 50mm miniguider.

L: 20x120sec (ISO1600)
D: 5x120sec (ISO1600)
F: N/A
B: N/A
Guiding: DIY 50mm miniguider & Imaging Source DBK21
Captured with BackyardEOS, processed with PhotoshopCS3`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2527623_orig.jpg"
  },
  {
    id: 18,
    title: "The Moon and Venus gathering...",
    date: "October 09, 2013",
    excerpt: "A stunning display from our closest celestial neighbors yesterday as both the Moon and Venus shone brightly in a dazzling clear sky and offered us a true spectacle!",
    content: `A stunning display from our closest celestial neighbors yesterday as both the Moon and Venus shone brightly in a dazzling clear sky and offered us a true spectacle! I managed to shoot the event extensively and will be going through my frames again soon no doubt but for now here's a couple teasers.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1205946_orig.jpg"
  },
  {
    id: 19,
    title: "NGC 253: The Sculptor Galaxy",
    date: "September 05, 2013",
    excerpt: "Located at the South horizon, it can be easily seen with binoculars from a dark location (away from city lights). It is a grand sight in a medium to large size telescope and of course, it is highly photogenic.",
    content: `"The Sculptor Galaxy, also known as the Silver Coin or Silver Dollar Galaxy, NGC 253, is an intermediate spiral galaxy in the constellation Sculptor. The Sculptor Galaxy is a starburst galaxy, which means that it is currently undergoing a period of intense star formation." - Wikipedia

Located at the South horizon, it can be easily seen with binoculars from a dark location (away from city lights). It is a grand sight in a medium to large size telescope and of course, it is highly photogenic. This marks my first attempt at capturing this giant and it will of course be revisited! The image consists of 3x 160 second shots at ISO 1600, guided (!) with the Orion ST80 and DBK21. My first guided attempt!

p.s. I love the framing from the 9,25 and something tells me it will be a superb Galactic instrument!`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1381710363.jpg"
  },
  {
    id: 20,
    title: "...to the Deep it is!",
    date: "August 26, 2013",
    excerpt: "So here are the first results of my first dive into the Deep from the new setup and observatory! Had a real struggle trying to enable guiding due to a) The DIY miniguider I assembled... and b) It took me roughly 3 hours to figure out how exactly to get PHD to talk to the NEQ6.",
    content: `So here are the first results of my first dive into the Deep from the new setup and observatory! Had a real struggle trying to enable guiding due to a) The DIY miniguider I assembled using a 9x50 finder and a makeshift 1,25" nosepiese could not reach focus with the DBK so I had an epiphany and switched back to the side by side setup with the Orion ST80...

and b) It took me roughly 3 hours to figure out how exactly to get PHD to talk to the NEQ6 aswell as calibrating the whole thing! But in the end, I managed to get 5x 180 sec shots of NGC7331 (The Deer Lick Group).

Also had a go at the Crescent Nebula in Cygnus but clouds rolled in and I only managed 3x 180 sec shots.`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/ngc7331_orig.jpg"
  },
  {
    id: 21,
    title: "First day at Eucalyptus Observatory!",
    date: "August 22, 2013",
    excerpt: "First day in the observatory today! Still a lot of work as far as moving in, arranging everything e.t.c. but the scopes are in and operational! The split-roof works great as a Sun shade for solar observing/imaging!",
    content: `First day in the observatory today! Still a lot of work as far as moving in, arranging everything e.t.c. but the scopes are in and operational! The split-roof works great as a Sun shade for solar observing/imaging! Had a quick snap with through the ST80 guidescope as its the only size filter I had available but I love it!`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6565340_orig.jpg"
  },
  {
    id: 22,
    title: "Stargazing from paradise...",
    date: "August 04, 2013",
    excerpt: "On Saturday, August 3, we drove up to Paradisos Hills at Lysos in Paphos forest to visit our friends who were spending the weekend there. The skies up there are unbelievably dark and clear so we took the opportunity to snap a few pics...",
    content: `On Saturday, August 3, we drove up to Paradisos Hills at Lysos in Paphos forest to visit our friends who were spending the weekend there. The skies up there are unbelievably dark and clear so we took the opportunity to snap a few pics...

We also met some amazing people, Lisa and Nick who were visiting from the U.S.A. Here are some pics!`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/4536474_orig.jpg"
  },
  {
    id: 23,
    title: "Looking for SN2013DY",
    date: "July 29, 2013",
    excerpt: "On the night of July 29, we gathered at the pine tree locale with our friends Rolandos & Koulla to seek out supernova 2013DY in Lacerta. Our attempt was a success and we were treated with beautiful dark skies...",
    content: `On the night of July 29, we gathered at the pine tree locale with our friends Rolandos & Koulla to seek out supernova 2013DY in Lacerta. Our attempt was a success and we were treated with beautiful dark skies (best SQM reading was 20.89 at zenith) and a multitude of fireballs that seemed to be early Perseids! I set up the camera quite a few feet away to capture this but I seemed to have annoyed a critter who kept walking around the camera nervously but remained in stealth mode (good thing it didn't touch anything!).

Here's a quick and silent timelapse of our activity!`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6469432_orig.jpg"
  },
  {
    id: 24,
    title: "Planetary Trio on May 26",
    date: "July 10, 2013",
    excerpt: "...belated I know. Here's a shot of the Trio as it appeared above our horizon here in Ay. Varvara. EOS 550D with 55-250mm IS.",
    content: `...belated I know. Here's a shot of the Trio as it appeared above our horizon here in Ay. Varvara. EOS 550D with 55-250mm IS.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8745076_orig.jpg"
  },
  {
    id: 25,
    title: "Astrophotographers on Olympus - Imaging with Damian Peach",
    date: "April 28, 2013",
    excerpt: "On the night of April 26, myself and renowned planetary imager Damian Peach met up at mt. Olympus on Troodos to attempt some imaging. Here is the result of a 3-segment timelapse that I recorded through the night.",
    content: `On the night of April 26, myself and renowned planetary imager Damian Peach met up at mt. Olympus on Troodos to attempt some imaging. Here is the result of a 3-segment timelapse that I recorded through the night.

Music: Thomas Newman - "Any other name"

Myself with Damian Peach near the summit of mt. Olympus

The night started out with excellent seeing conditions which allowed Damian to capture some good material on Jupiter which was getting low quickly, unfortunately though the seeing gradually deteriorated and remained in that state for the remainder of the night. We both attempted to image Saturn as well. Below is my result, with the data I acquired being a mixed bag of mostly low end stuff.

An interesting trail probably from an Iridium satellite.`,
    category: "Observing",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1321863_orig.jpg"
  },
  {
    id: 26,
    title: "Attempting Star Trails",
    date: "October 09, 2011",
    excerpt: "Having recently acquired some essential accessories for the 550D such as a programmable remote & battery grip, I decided to have a go at star trail photography. Here are my results so far!",
    content: `Having recently acquired some essential accessories for the 550D such as a programmable remote & battery grip, I decided to have a go at star trail photography. Here are my results so far!

Here we have the result of around 30 exposures of 60sec duration at ISO1600, F18mm. Aimed at the C.A.S. amateur astronomers going about their business at Agros Astronomy Weekend on 24-25 September!

For the next shot I set up the camera facing East - North East. You can see Jupiter as well as the Pleiades & Orion! Also, towards the end some whispy clouds started to roll in (left edge center). Around 60 x 60 sec shots at ISO1600/F18mm.

This was taken on September 30, from Amiantos. I tried to find a slightly photogenic tree group for this test and also I tried to illuminate them with a red light. You can see the red shine on the lower right edge of the Cedar. 60x 60sec, ISO 1600 at 18mm with the 550D.`,
    category: "Astrophotography",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/485629229_orig.jpg?331"
  },
  {
    id: 27,
    title: "Reprocessing the AUG18 data...",
    date: "August 20, 2011",
    excerpt: "My biggest mistakes in planetary imaging are: a) I am always too impatient to rest after an early morning session BEFORE touching the data and b) I take the data with me and process them on my netbook instead of processing them on my comfortable, calibrated 20\" monitor at home.",
    content: `My biggest mistakes in planetary imaging are: a) I am always too impatient to rest after an early morning session BEFORE touching the data and b) I take the data with me and process them on my netbook instead of processing them on my comfortable, calibrated 20" monitor at home. This of course results in me not producing the best images possible out of the data at hand. I'm still going through the data set but one particular avi stood out, that of 01:11 UT. Here's a reprocessed version of that with better color balance and limb issues corrected.

Opinions?`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/jupiter18082011-0111ut-120-repro.jpg"
  },
  {
    id: 28,
    title: "Jupiter August 18, 2011 - the one that almost didn't happen!",
    date: "August 18, 2011",
    excerpt: "The amount of detail that comes out of planetary imaging attempts is directly proportionate to the amount of detail you put in to your preparation i.e. collimation! I set up yesterday afternoon without any expectations...",
    content: `The amount of detail that comes out of planetary imaging attempts is directly proportionate to the amount of detail you put in to your preparation i.e. collimation!

I set up yesterday afternoon without any expectations for the morning since the forecasts were not at all favorable. I spent a good deal of time attempting to improve the collimation of the scope since it had shifted considerably due to a couple of trips to dark skies. Packed up, slept for 2 hours and got up again at 03:00 local to find Jupiter shining brightly and looking very very good! I must have been under a pocket of steady air as this data set is the most consistent and clear set I 've ever acquired! All 45 GB's of it! As a teaser, here is a first, very rough, attempt presented in 120 and 150%. Note that this set was acquired working at approximately f/30 with the actual f/ number soon to follow!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/608596.jpg"
  },
  {
    id: 29,
    title: "Jupiter, August 8 2011",
    date: "August 08, 2011",
    excerpt: "The weather conditions last night / this morning were nothing special but I could not stand another night away from the scope so I set up anyway hoping to catch some good seeing in the early morning hours.",
    content: `The weather conditions last night / this morning were nothing special but I could not stand another night away from the scope so I set up anyway hoping to catch some good seeing in the early morning hours. Lots of wind gusts meant I was unable to check the scope's collimation (which is severely off especially after two dark sky trips!) and so I could only shoot as is and hope for the best.

P.S. I also took another profile shot of the C9,25 with the DBK loaded!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/3781878.jpg"
  },
  {
    id: 30,
    title: "First images from the EOS 550D!",
    date: "August 02, 2011",
    excerpt: "I have been busy testing the 550 these past few weeks and I must say I'm very pleased with what I see. I shot a couple of Messier objects from Xyliatos on the 23rd and took some panoramic shots from Amiantos on the 30th.",
    content: `I have been busy testing the 550 these past few weeks and I must say I'm very pleased with what I see.

I shot a couple of Messier objects from Xyliatos on the 23rd and took some panoramic shots from Amiantos on the 30th.

I used Backyard EOS for the Messier objects, a software I highly recommend to all EOS users! Full imaging automation from exposure planning to live focusing and guiding! Awesome!

So here are the shots. My CG5 mount was really struggling to hold the C9,25 with the camera so I had to make due with 15sec unguided shots. The wide field shots taken on the 30th are unprocessed!

M11 The Wild Duck Cluster: 8x 15sec, ISO 800. C9,25 + EOS 550D.
M13 The Great Cluster in Hercules. 23x 15sec, ISO800. C9,25+EOS550D.`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2468299_orig.png"
  },
  {
    id: 31,
    title: "New camera! EOS 550D!",
    date: "July 12, 2011",
    excerpt: "Finally, after a few months without a DSLR, I am now the excited new owner of a Canon EOS 550D! I just picked it up yesterday and I must say, so far, I am EXTREMELY surprised at the power and capabilities of this camera!",
    content: `Finally, after a few months without a DSLR, I am now the excited new owner of a Canon EOS 550D! I just picked it up yesterday and I must say, so far, I am EXTREMELY surprised at the power and capabilities of this camera! This is going to be a fun summer!`,
    category: "Equipment",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9779479.jpg"
  },
  {
    id: 32,
    title: "Jupiter, 5 July 2011 - First of the season!",
    date: "July 05, 2011",
    excerpt: "Finally! Following a very long stretch of bad weather, last night was remarkably clear. Checking the seeing predictions showed fair seeing likely and so I took the decision to set up for the first try at Jupiter for the 2011/12 season!",
    content: `Finally!

Following a very long stretch of bad weather, last night was remarkably clear. Checking the seeing predictions showed fair seeing likely and so I took the decision to set up for the first try at Jupiter for the 2011/12 season! Got up at 04:00 local and opened up the C9,25 which spent the night outside cooling. Jupiter was nowhere to be seen! A quick glance behind the neighbors wall revealed the planet far higher up North than I had expected! By the time it cleared the wall the background sky was bright blue!

It felt good returning to the early morning sessions with comfortable temperatures, great seeing and the serenity of the dawn sky. Here's a preview from 02:39 UT featuring Io, Io's shadow transit & Oval BA.

The planet looks vastly different from last time I observed it with the SEB still re-generating. The season ahead should be spectacular, especially since Jupiter will climb to a much higher altitude!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6170132.jpg"
  },
  {
    id: 33,
    title: "Occultation of Venus by the Moon",
    date: "June 21, 2011",
    excerpt: "On June 30 we will have the opportunity to observe the Moon cover and uncover the planet Venus in the early morning sky. The phenomenon begins with the Moon slowly passing in front of Venus at 09:06 Local Time...",
    content: `Occultation (wiki): An occultation is an event that occurs when one object is hidden by another object that passes between it and the observer.

On June 30 we will have the opportunity to observe the Moon cover and uncover the planet Venus in the early morning sky. The phenomenon begins with the Moon slowly passing in front of Venus at 09:06 Local Time (06:06 UT) and reappearing at 10:28 LT (07:28 UT). Due to the phenomenon's close proximity with the Sun (approx. 13 degrees to the east) anyone who attempts to view or photograph it should be EXTREMELY CAREFUL not to accidentally point a telescope at the Sun while looking for the objects. The Sun's intense luminosity amplified through a telescope will cause severe injury to the careless individual.`,
    category: "Astronomy",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/454111958.jpg"
  },
  {
    id: 34,
    title: "Total Lunar Eclipse, June 15 2011. The results!",
    date: "June 16, 2011",
    excerpt: "It was a thriller! Here in Nicosia we lost the phenomenon up to totality due to thick clouds & fog, occasionally getting glimpses through holes in the clouds. Halfway through the event the skies gradually opened and we got to witness the exit from totality all the way to the end!",
    content: `It was a thriller! Here in Nicosia we lost the phenomenon up to totality due to thick clouds & fog, occasionally getting glimpses through holes in the clouds. Halfway through the event the skies gradually opened and we got to witness the exit from totality all the way to the end!

I had arranged to meet with Pampos & the others at Akropolis Park so we could set up our joined equipment: My CG5 mount with Pampos's Vixen ED81S & 450D. Due to the clouds we were unable to get a decent polar alignment or even get the focus right which resulted in mostly soft images up to mid-totality. Once the skies opened I was able to fix the focus and we enjoyed the end of the eclipse with decent results!`,
    category: "Eclipses",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/4386563_orig.jpg"
  },
  {
    id: 35,
    title: "Total Lunar Eclipse, June 15 2011",
    date: "May 15, 2011",
    excerpt: "On June 15 we will have the opportunity to observe a Total Lunar Eclipse which will be fully visible from Cyprus! The fact that it occurs in mid-June promises great weather conditions (although this year the weather has been unpredictable!).",
    content: `On June 15 we will have the opportunity to observe a Total Lunar Eclipse which will be fully visible from Cyprus! The fact that it occurs in mid-June promises great weather conditions (although this year the weather has been unpredictable!).

The Moon will start its pass through the Earth's penumbral shadow at 17:23 UT (20:23 Local Time) although this part will not be visible to the naked eye. At 18:22 UT (21:22 Local Time) the Moon will begin to darken as it enters the Earth's umbral shadow thus marking the beginning of the visible part of the eclipse. Greatest eclipse occurs at 20:12 UT (23:12 Local Time) and at this stage the Moon is expected to have darkened considerably as it will now be passing through the center of the Earth's shadow. At 21:03 UT (00:03 Local Time) the whole process goes backwards with the Moon beginning to exit the Earth's shadow marking the end of the visible part of the phenomenon at 22:02 UT (01:02 Local Time). The entire phenomenon ends at 23:02 UT (02:02 Local Time).`,
    category: "Eclipses",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2614731_orig.jpg"
  },
  {
    id: 36,
    title: "Saturn 13 April 2011, continued!",
    date: "April 16, 2011",
    excerpt: "Reaching the end of the data from April 13, I was able to put together this 12-frame animation spanning between 19:48 - 21:26 UT, all shot at f/30 and resized 150%. I don't normally resize that much but in this case there is a very slight hint of some southern hemisphere detail seen transiting across the disk.",
    content: `Reaching the end of the data from April 13, I was able to put together this 12-frame animation spanning between 19:48 - 21:26 UT, all shot at f/30 and resized 150%. I don't normally resize that much but in this case there is a very slight hint of some southern hemisphere detail seen transiting across the disk.

Also, here's a view at f/30 from 20:48UT.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/saturn-13apr2011-anim-f30.gif"
  },
  {
    id: 37,
    title: "Saturn April 13/14, 2011: Finally!",
    date: "April 14, 2011",
    excerpt: "I had been watching the forecasts all day. It looked like I would get a break in the clouds and possibly some *fair* seeing conditions. Nothing to get all excited about in good weather patterns but with the conditions I've been experiencing this year, this looked like a worthwhile night.",
    content: `I had been watching the forecasts all day. It looked like I would get a break in the clouds and possibly some *fair* seeing conditions. Nothing to get all excited about in good weather patterns but with the conditions I've been experiencing this year, this looked like a worthwhile night. Once I pointed the C9,25 at the first alignment star I was stunned at the stillness of the atmosphere and a few minutes later I was collimating with metaguide and getting a uniform crisp airy disk. Haven't seen that since late summer! Here's a preview at f/22 with Rhea in the FOV (had to enhance the moon a little bit).`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2655582.jpg"
  },
  {
    id: 38,
    title: "Saturn March 12, 2011",
    date: "March 14, 2011",
    excerpt: "I guess I've finished with the processing of the March 12 data. Images can be seen in the Gallery!",
    content: `I guess I've finished with the processing of the March 12 data. Images can be seen in the Gallery!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/690553906.jpg"
  },
  {
    id: 39,
    title: "Saturn March 12, 2011 continued",
    date: "March 12, 2011",
    excerpt: "Click here for full size image - Saturn 12032011-2252UT-120%",
    content: `Click here for full size image - Saturn 12032011-2252UT-120%`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/7490020_orig.jpg"
  },
  {
    id: 40,
    title: "Saturn March 12, 2011 (Preview)",
    date: "March 12, 2011",
    excerpt: "You capture nothing if you don't try. I read this somewhere on CN and it was playing in my head all day yesterday while I was trying to decide if the slowly improving conditions were worth setting up the scope and capturing Saturn.",
    content: `You capture nothing if you don't try. I read this somewhere on CN and it was playing in my head all day yesterday while I was trying to decide if the slowly improving conditions were worth setting up the scope and capturing Saturn. The weather has been unusually bad this year with my last window being a month back! The chilly temperatures were not encouraging either! Never the less I decided that whoever said that is propably right so around 23:00 (March 11) the C9,25 was set up and cooling!

After the obligatory collimation check & touch up, I pointed the scope at Saturn and began capturing, this time experimenting with longer capture times (up to 240 seconds). I'm currently sifting through the data which seem promising but, yet again, I must pay more attention to the collimation as it is evident that we are not quite there yet.

Here's a preview of the data quality. I'm crossing my fingers hoping it will turn out good.

P.S. it's b/w because I didn't use debayering!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/7833382.jpg"
  },
  {
    id: 41,
    title: "Saturn February 10, 2011 - take 2!",
    date: "February 16, 2011",
    excerpt: "A reprocessing of some of the data from February 10. Slightly different color balance & 150% resizing.",
    content: `A reprocessing of some of the data from February 10. Slightly different color balance & 150% resizing.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/saturn10022011-0154ut-150v2.jpg"
  },
  {
    id: 42,
    title: "Saturn 10 February 2011 - The images",
    date: "February 10, 2011",
    excerpt: "Below you will find the single best image from the data set of February 10 aswell as a 17-frame animation compiled from stacked images spanning 36 minutes apart. Despite the poor data quality there is a hint of the storm moving across the Saturnian atmosphere.",
    content: `Below you will find the single best image from the data set of February 10 aswell as a 17-frame animation compiled from stacked images spanning 36 minutes apart. Despite the poor data quality there is a hint of the storm moving across the Saturnian atmosphere. This is the first time I've had data good enough for something like this!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/7965376_orig.jpg"
  },
  {
    id: 43,
    title: "Saturn 10 February 2011 - f/issues pt.2",
    date: "February 10, 2011",
    excerpt: "The skies finally cleared and settled well enough for the C9,25 to venture out again and have another shot at Saturn. Following up on the f/issues I was experiencing I decided to test both the Ultima 2x and the GSO 2.5x with the focuser on 0-10-20mm positions accordingly.",
    content: `The skies finally cleared and settled well enough for the C9,25 to venture out again and have another shot at Saturn. Following up on the f/issues I was experiencing I decided to test both the Ultima 2x and the GSO 2.5x with the focuser on 0-10-20mm positions accordingly (all the way in, half way and all the way out). I opened up the scope at 00:30 UTC and with the cold breeze freezing my fingers I touched up the collimation which had shifted considerably since last time. I shot avi's at 30fps for 3mins (dont ask why, I hadn't done this since the 19th of January and I was half asleep!) ending up with ~5000 frame vids which I trimmed to 600 frames with Virtual Dub as I wasn't interested in image quality but target size only.

I ran the avi's through Registax with the same parameters and measured Saturn's disc size in Photoshop averaging the result with both X and Y axis pixel count in the formula. Here are the results of the test runs:

C9,25+Ultima 2x @ 0mm = f/21,8
C9,25+Ultima 2x @ 10mm = f/22,4
C9,25+Ultima 2x @ 20mm = f/22,45 (...which is odd!)
C9,25+GSO 2.5x @ 0mm = f/21,1
C9,25+GSO 2.5x @ 0mm = f/21,7
C9,25+GSO 2.5x @ 0mm = f/21,5 (...which is even more odd!)

Conclusion? ...well it seems that the GSO 2.5x Barlow doesnt seem to add that .5x extra to the Ultima. This might mean that the Ultima is a bit more powerful or the GSO is weaker than advertised, at least in my scope. I'm not sure what happened at the 20mm position for both barlows as I wasn't swapping them between runs instead I ran the Ultima at 0-10-20mm and then the GSO in the same way. After I was done with the testing I put the Ultima back in the focuser and shot a few avi's of Saturn which I will begin to process shortly.  I guess the GSO will be up for sale as I can't justify keeping it & besides, I wouldn't give up on my Ultima just yet!`,
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 44,
    title: "Saturn 19 January 2011 - f/ issues",
    date: "January 20, 2011",
    excerpt: "Woke up to chilly, clear skies & had a go with Saturn and the DBK, this time employing a new 2.5x barlow from GSO that I picked up recently to try and push things to f/30-ish. To my amazement the new barlow is producing *only* f/22 as measured using the following formula...",
    content: `Woke up to chilly, clear skies & had a go with Saturn and the DBK, this time employing a new 2.5x barlow from GSO that I picked up recently to try and push things to f/30-ish. To my amazement the new barlow is producing *only* f/22 as measured using the following formula:

F = 206.265 x Object size in pixels x CCD pixel size in microns / Object size in arc-seconds

So it turns out that with the DBK + 2.5xGSO barlow I get Saturn to appear approximately 80 pixels in diameter, which combined with the DBK's 5.6 micron sensor and Saturn's 17.7" diameter gives out: 5220mm. Dividing 235mm of primary mirror into that, I get f/22.2. Comparing this data with my January 14th images of Saturn which were done using the 2x Ultima + DBK, I get as-near-as-makes-no-difference, 79 pixels width for Saturn & 17.5" which gives f/22.1!

I guess the fact that my focuser has about 20mm of travel does play a role on just how big the targets will appear on the chip and maybe, the 2.5x isn't exactly 2.5x but a little less. I have to measure exactly what the effective f/ of the 9,25 is at 0 extra travel all the way to 20 and take measurements with both barlows to come to a conclusion on what is the exact f/ I'm using.

As for Saturn, here's a view under good but not great seeing. There's more coming.`,
    category: "Equipment",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/7965522_orig.jpg"
  },
  {
    id: 45,
    title: "Saturn 14 January 2011",
    date: "January 14, 2011",
    excerpt: "Had another chance to test the DBK camera. Conditions started out unfavorable but a small window of slightly improved appeared just before cirrus clouds blocked the planet! I experimented with a variety of exposure settings as well as capture codecs.",
    content: `Had another chance to test the DBK camera. Conditions started out unfavorable but a small window of slightly improved appeared just before cirrus clouds blocked the planet! I experimented with a variety of exposure settings as well as capture codecs. This is a rough shot from a 4800 frame stack taken at 30fps and very high gain. Saturn is unpleasantly dim at f/24 for my telescope and I worry that f/30 might just be undoable!

With Saturn, it's a whole new game! Not to mention the hardware/software changes!

There's potential, which is always a good thing!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2662569_orig.jpg"
  },
  {
    id: 46,
    title: "First light - DBK21",
    date: "January 09, 2011",
    excerpt: "Well, the skies finally cleared and I was able to test my new DBK21 camera! Got up at 02:00 UT and opened up the C9,25 which was cooling outside at 7c. The difference from the SPC900 is tremendous in terms of noise, sensitivity, versatility and speed! Here are the first results!",
    content: `Well, the skies finally cleared and I was able to test my new DBK21 camera! Got up at 02:00 UT and opened up the C9,25 which was cooling outside at 7c. The difference from the SPC900 is tremendous in terms of noise, sensitivity, versatility and speed! Here are the first results!

- First try on Saturn with the tail end of the storm visible. The seeing was horrific but I just had to try out the DBK & catch this phenomenal storm!

- Mercury added! Very low and with a lot of atmospheric dispersion! Stacked the best 500 out of 3000 frames.`,
    category: "Equipment",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1742680_orig.jpg"
  },
  {
    id: 47,
    title: "Partial Solar Eclipse, January 4 - 2011",
    date: "January 05, 2011",
    excerpt: "Even though the weather did not seem too friendly, I set up the 90mm refractor & Nikon camera and managed a near complete record of the partial eclipse. First contact at 07:09 went along with no trouble but coming up to the maximum the clouds thickened and thus a lot of data was lost.",
    content: `Even though the weather did not seem too friendly, I set up the 90mm refractor & Nikon camera and managed a near complete record of the partial eclipse. First contact at 07:09 went along with no trouble but coming up to the maximum the clouds thickened and thus a lot of data was lost. The below composition pretty much tells the story.`,
    category: "Solar",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/5262877_orig.jpg"
  },
  {
    id: 48,
    title: "Jupiter 26 December 2010",
    date: "December 26, 2010",
    excerpt: "Finally managed to have another shot at Jupiter through the hectic work schedule and festive gatherings! Shot this data through thin cirrus clouds and under mediocre seeing conditions.",
    content: `Finally managed to have another shot at Jupiter through the hectic work schedule and festive gatherings! Shot this data through thin cirrus clouds and under mediocre seeing conditions. The results are not to my liking but they are results and I cannot afford to discard them! It's quite interesting to see how the SEB has evolved since November. Jupiter surely looks more familiar now!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/242667_orig.jpg"
  },
  {
    id: 49,
    title: "The Partial Solar Eclipse of January 4, 2011 pt1",
    date: "December 17, 2010",
    excerpt: "Its coming! A solar eclipse is one of Natures recurring phenomena, not exactly rare as it happens somewhere in the world at least twice every year but never the less beautiful because, seen from the right perspective, it reminds us that we live in a universe of rotating spheres...",
    content: `Its coming!

A solar eclipse is one of Natures recurring phenomena, not exactly rare as it happens somewhere in the world at least twice every year but never the less beautiful because, seen from the right perspective, it reminds us that we live in a universe of rotating spheres that go about their cosmic lives twirling around themselves and each other in a randomly precise dance.

So what exactly are eclipses anyway? Well...to put it simply, an eclipse occurs when one object passes in front of another partially or totally obscuring (hiding) it for a period of time. We have Solar eclipses which happen when the Moon passes between the Sun and the Earth and Lunar eclipses which happen when the Earth gets between the Sun and the Moon, casting a shadow on the latter. Still with me? ...good! So what's gonna happen on January 4? Well, for a few hours the Moon will be seen passing in front of the Sun and hiding around 50% of it in the process! The eclipse begins around 09:00 Local Time, maximum eclipse happens at 10:40 and the whole event ends shortly after 12:00. Below is a timetable centered on Nicosia with times and other data for eclipse day. I will return to the subject with another post on how to observe the eclipse, what to look out for and other useful info!`,
    category: "Solar",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6927169.jpg?674"
  },
  {
    id: 50,
    title: "Light Show!",
    date: "December 11, 2010",
    excerpt: "What a storm we had last night! As soon as I got off from work at 19:00 and saw the flashes illuminating the sky I knew I had to rush home and set up the camera with the hope of catching some lightning! Well, nature was good to me!",
    content: `What a storm we had last night! As soon as I got off from work at 19:00 and saw the flashes illuminating the sky I knew I had to rush home and set up the camera with the hope of catching some lightning! Well, nature was good to me! I shot more than 150 shots and almost all of them have lightnings in them! Enough to compose a short animation I guess!

Here are the most "photogenic" of them! :)`,
    category: "Weather",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/5787376_orig.jpg"
  },
  {
    id: 51,
    title: "Venus 9 December 2010",
    date: "December 09, 2010",
    excerpt: "Bright as always and surprisingly large on the chip. Interesting phase too!",
    content: `Bright as always and surprisingly large on the chip. Interesting phase too!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/7619451_orig.jpg"
  },
  {
    id: 52,
    title: "Saturn from the other side of the Sun",
    date: "December 09, 2010",
    excerpt: "The alarm went off at 02:45 UT. 20 minutes later I was behind the C9,25 (which spent the night outside ready for early morning action!) and Saturn was coming into focus on the CCD chip. Quite a sight!",
    content: `The alarm went off at 02:45 UT. 20 minutes later I was behind the C9,25 (which spent the night outside ready for early morning action!) and Saturn was coming into focus on the CCD chip. Quite a sight! Last time I imaged this guy, the rings were seen edge-on. Not quite the way we are used to seeing Saturn. This time though, the story is very different. The weather was variable throughout the morning, at times it was almost overcast and I was shooting through holes in the clouds! Seeing was mostly fair with times of good. I shot 12 avi's (1800 frames each) but I experimented with the frame rate (5/10fps) to see what works best as the planet is still very dim! ...here's a rough shot from the data!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9929319_orig.jpg"
  },
  {
    id: 53,
    title: "The tail end",
    date: "December 08, 2010",
    excerpt: "...of the SEB outbreak region, can be seen in this preview images I prepared from the data set I just acquired. It is visible in the lower right edge of Jupiter as a streak of dark material cluttering to the right.",
    content: `...of the SEB outbreak region, can be seen in this preview images I prepared from the data set I just acquired. It is visible in the lower right edge of Jupiter as a streak of dark material cluttering to the right. Hopefully I will be able to have all the data processed tomorrow so I can post updates!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2094458_orig.jpg"
  },
  {
    id: 54,
    title: "Belated Jupiter update",
    date: "December 06, 2010",
    excerpt: "...so here's a view of Jupiter from November 20 showing the SEB outbreak region and how it had developed at that time. It has since grown in size considerably! Conditions for this shot were less than ideal both technically as well as meteorologically!",
    content: `...so here's a view of Jupiter from November 20 showing the SEB outbreak region and how it had developed at that time. It has since grown in size considerably! Conditions for this shot were less than ideal both technically as well as meteorologically! Never the less, given the importance of the image, it goes in the Gallery!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/9878438_orig.jpg"
  },
  {
    id: 55,
    title: "Nebulae",
    date: "November 25, 2010",
    excerpt: "A nebula (from Latin: 'cloud'; pl. nebulae or nebulæ, with ligature or nebulas) is an interstellar cloud of dust, hydrogen gas, helium gas and other ionized gases.",
    content: `A nebula (from Latin: "cloud"; pl. nebulae or nebulæ, with ligature or nebulas) is an interstellar cloud of dust, hydrogen gas, helium gas and other ionized gases.`,
    category: "Deep Sky",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2826092_orig.jpg"
  },
  {
    id: 56,
    title: "Meet the enemy",
    date: "November 22, 2010",
    excerpt: "Collimation...There I said it! It's what's been keeping me out of the game since last week and what caused my limping a round the house mumbling weird astro-techie terms to my wife all weekend! The astronomers out there now it and most of us hate it.",
    content: `Collimation...There I said it! It's what's been keeping me out of the game since last week and what caused my limping a round the house mumbling weird astro-techie terms to my wife all weekend! The astronomers out there now it and most of us hate it. We hate having to deal with it and we certainly hate wasting precious observing time tweaking and adjusting again and again until we get it right. This is what I'm doing at the moment and when I'm not adjusting things at the scope I'm actually reading about it and studying different points of view on the matter trying to figure out exactly how to go about it!

I found a small point of light in the end of the tunnel though and next clear & steady night I should have results to show!

I dont see it for the next couple of days as we have rather fast winds approaching.`,
    category: "Collimation",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 57,
    title: "Jupiter November 19, 2010",
    date: "November 19, 2010",
    excerpt: "Hey there! So I've just finished another run and I'm processing the data as I type. Here's the first view at 18:18 UT with Io (who had re-emerged from eclipse a while ago and I saw that LIVE!), the GRS and OvalBA. More to follow soon!",
    content: `Hey there! So I've just finished another run and I'm processing the data as I type. Here's the first view at 18:18 UT with Io (who had re-emerged from eclipse a while ago and I saw that LIVE!), the GRS and OvalBA. More to follow soon!

p.s. I will be editing this post as the images come out of processing.

p.s. 2 (nov20) Here's more images out of processing! What was especially interesting, is the bright area in the northern EZ which was visible in the live feed.`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/8575365_orig.jpg"
  },
  {
    id: 58,
    title: "Photographers of the Night",
    date: "November 18, 2010",
    excerpt: "Just watch. Unbelievable footage and images of the Night Sky taken by amateur astropographers working on ESO's VLT facility in Atacama desert, Chile.",
    content: `Just watch. Unbelievable footage and images of the Night Sky taken by amateur astropographers working on ESO's VLT facility in Atacama desert, Chile.`,
    category: "Astronomy",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 59,
    title: "Leonids 2010!",
    date: "November 17, 2010",
    excerpt: "It's that time of the year again! The Leonid meteor shower will be on display on the nights of 17-18 November! Unfortunately all but the brightest meteors will be obscured by the bright Moon...",
    content: `It's that time of the year again! The Leonid meteor shower will be on display on the nights of 17-18 November! Unfortunately all but the brightest meteors will be obscured by the bright Moon and only those who will stay out until the early hours of the morning, after the Moon sets, will have a chance to witness up to 20-25 meteors per hour. Click on the image below to view a where-to-look chart from stardate.org!`,
    category: "Meteors",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/737749171_orig.jpg"
  },
  {
    id: 60,
    title: "Mammatus clouds!",
    date: "November 17, 2010",
    excerpt: "It was a weird day with weird looking clouds! Take a look at these formations of Mammatus clouds I photographed over Nicosia around 16:00 yesterday.",
    content: `It was a weird day with weird looking clouds! Take a look at these formations of Mammatus clouds I photographed over Nicosia around 16:00 yesterday. According to wikipedia they are: "...a cellular pattern of pouches hanging underneath the base of a cloud. The name mammatus, derived from the Latin mamma (meaning "udder" or "breast"), refers to a resemblance between the characteristic shape of these clouds and the breast of a woman."

p.s. So the word "Mamma" comes from the Latin word for "breast"?`,
    category: "Weather",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/3938861_orig.jpg"
  },
  {
    id: 61,
    title: "My own Hubble?",
    date: "November 16, 2010",
    excerpt: "...not really! I've just received my Hubble-Optics '5-star' artificial star! This should aid me in collimating my C9,25 telescope when the need arises!",
    content: `...not really! I've just received my Hubble-Optics "5-star" artificial star! This should aid me in collimating my C9,25 telescope when the need arises!

First thoughts: It could have been better built...but then again for $20 it's no big deal!`,
    category: "Equipment",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/483123658.jpg"
  },
  {
    id: 62,
    title: "The return of the SEB!",
    date: "November 16, 2010",
    excerpt: "The past few days have been extremely interesting for pro & amateur astronomers all over the world as we are all glued on Jupiter trying to capture as many images as possible of the gradual yet spectacular return of the Southern Equatorial Belt.",
    content: `The past few days have been extremely interesting for pro & amateur astronomers all over the world as we are all glued on Jupiter trying to capture as many images as possible of the gradual yet spectacular return of the Southern Equatorial Belt.

Here's my image from November 10, with the SEB outbreak spot in its very early stage!`,
    category: "Planetary",
    image: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/2018531_orig.jpg?527"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const years = ["All", ...Array.from(new Set(posts.map(post => post.date.split(", ")[1]))).sort((a, b) => Number(b) - Number(a))];

  const filteredPosts = selectedYear === "All" 
    ? posts 
    : posts.filter(post => post.date.includes(selectedYear));

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navigation />
      
      {/* Lightbox for embedded images */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 md:p-12"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage} 
              alt="Full Resolution" 
              className="max-w-full max-h-full object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-background border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors z-10 bg-black/50 p-2 rounded-full"
                onClick={() => setSelectedPost(null)}
              >
                <X size={24} />
              </button>

              <div className="w-full bg-muted/10 border-b border-white/5 p-8 md:p-12 pb-8">
                  <span className="text-xs uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-3 py-1 rounded-full mb-6 inline-block">{selectedPost.category}</span>
                  <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">{selectedPost.title}</h2>
                  <p className="text-muted-foreground font-mono text-sm">{selectedPost.date}</p>
              </div>

              <div className="p-8 md:p-12">
                <div className="prose prose-invert prose-lg max-w-none">
                  {/* Image at the top of the body text */}
                  <div className="mb-10">
                    <div 
                      className="group cursor-pointer overflow-hidden rounded-lg border border-white/10 relative"
                      onClick={() => setLightboxImage(selectedPost.image)}
                    >
                      <img 
                        src={selectedPost.image} 
                        alt={selectedPost.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                        <span className="bg-black/70 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">Click to Enlarge</span>
                      </div>
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-3 italic tracking-wide">
                      {selectedPost.title}
                    </p>
                  </div>

                  {selectedPost.content.split('\n').filter(p => p.trim() !== "").map((paragraph, i) => (
                    <p key={i} className="mb-4 text-white/80 font-light leading-relaxed">{paragraph}</p>
                  ))}
                  
                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <h3 className="text-xl font-serif mb-6 text-white/90">Share this post</h3>
                    <div className="flex gap-4">
                      {/* Facebook */}
                      <button 
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        title="Share on Facebook"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-5 h-5 fill-current text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>

                      {/* X (Twitter) */}
                      <button 
                        onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedPost.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        title="Share on X"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-5 h-5 fill-current text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </button>

                      {/* LinkedIn */}
                      <button 
                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                        className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        title="Share on LinkedIn"
                      >
                        <svg 
                          viewBox="0 0 24 24" 
                          className="w-5 h-5 fill-current text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>

                      {/* Copy Link */}
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                          toast.success("Link copied to clipboard!");
                        }}
                        className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
                        title="Copy Link"
                      >
                         <Link2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 uppercase tracking-wide">Ad Astra</h1>
        <h2 className="text-muted-foreground font-serif italic mb-16 text-[16px]">This Blog features my personal thoughts and experiences during my journey through the Universe.</h2>

        <div className="flex gap-8 mb-16 overflow-x-auto pb-2 border-b border-white/10">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`text-lg font-serif transition-all pb-4 -mb-[1px] ${
                selectedYear === year 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {filteredPosts.map((post, index) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer border-b border-white/5 pb-16"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-video bg-muted overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover scale-150 transition-transform duration-700 group-hover:scale-175" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-3xl font-serif group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">{post.date}</span>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6 text-lg line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-4 items-center">
                    <span className="text-xs uppercase tracking-widest text-primary/60 border border-white/10 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-sm border-b border-transparent group-hover:border-primary transition-all ml-auto">Read Full Entry</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
