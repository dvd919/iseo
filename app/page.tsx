import { Hero } from "@/components/sections/hero"
import { Highlights } from "@/components/sections/highlights"
import { Location } from "@/components/sections/location"
import { MasterPlan } from "@/components/sections/masterplan"
import { LandPlot } from "@/components/sections/land-plot"
import { LandInfo } from "@/components/sections/land-info"
import { HouseGuide } from "@/components/sections/house-guide"
import { Nature } from "@/components/sections/nature"
import { Company } from "@/components/sections/company"
import { FinalCTA } from "@/components/sections/final-cta"
import { FloatingMenu } from "@/components/floating-menu"
import { StickyNav } from "@/components/sticky-nav"

export default function Page() {
  return (
    <main>
      <StickyNav />
      <Hero />
      <Highlights />
      <Location />
      <MasterPlan />
      <LandPlot />
      <LandInfo />
      <HouseGuide />
      <Nature />
      <Company />
      <FinalCTA />
      <FloatingMenu />
    </main>
  )
}
