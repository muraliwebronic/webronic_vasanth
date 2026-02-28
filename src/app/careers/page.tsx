import React from 'react'
import CareersHero from './components/CareersHero'
import WhyWebronic from './components/WhyWebronic'
import CultureValues from './components/CultureValues'
import BenefitsPerks from './components/BenefitsPerks'
import OpenPositions from './components/OpenPositions'
import HiringProcess from './components/HiringProcess'
import LifeAtWebronic from './components/LifeAtWebronic'
import DiversityInclusion from './components/DiversityInclusion'
import CareersFAQ from './components/CareersFAQ'
import ApplySection from './components/ApplySection'


export default function page() {
  return (
    <main>
      <CareersHero />
      <WhyWebronic />
      <CultureValues />
      <BenefitsPerks />
      <OpenPositions />
      <HiringProcess />
      <LifeAtWebronic />
      <DiversityInclusion />
      <CareersFAQ />
      <ApplySection />
    </main>
  )
}
