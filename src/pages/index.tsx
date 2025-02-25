import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { Main, Section } from "../components/commons/commons"
import HeroSection from "../components/landing-page-component/landing-hero-section"
import Seo from "../components/seo"
import StepSection from "@/components/landing-page-component/landing-step"

type DataProps = {
  site: {
    buildTime: string
  }
}
const LandingPage = ({data} : {data: any}) => {
  return (
   <Main className="flex flex-col items-center">
      <HeroSection data={data} />
      <StepSection />
   </Main>
)}

export const Head: HeadFC<DataProps> = () => <Seo children={undefined} />

export default LandingPage

export const query = graphql`
  query {
    contentfulLandingPageHeroSection {
        title
        secondaryText
    }

    site {
      siteMetadata {
        title
      }
  }
}
`