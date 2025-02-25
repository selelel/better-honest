import * as React from "react"
import { HeadFC } from "gatsby"
import { Main, Section } from "../components/commons/commons"
import HeroSection from "./_component/landing-hero-section"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}
const LandingPage = () => {
  // const hero_section_text = data?.contentfulLandingPageHeroSection
  return (
   <Main>
    <Section>
      <HeroSection />
    </Section>
   </Main>
)}

export const Head: HeadFC<DataProps> = () => <Seo children={undefined} />

export default LandingPage

// export const query = graphql`
//   query {
//   contentfulLandingPageHeroSection{
//     title
//     secondaryText
//   }
// }
// `