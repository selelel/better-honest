import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import { Main, Section } from "../components/commons/commons"
import HeroSection from "../components/landing-page-component/landing-hero-section"
import Seo from "../components/seo"
import StepSection from "@/components/landing-page-component/landing-step"
import AboutSection from "@/components/landing-page-component/landing-about-section"
import FAQSection from "@/components/landing-page-component/landing-faq-section"

type DataProps = {
  site: {
    buildTime: string
  }
}
const LandingPage = ({data : {contentfulLandingPageAboutSection, contentfulFrequentlAskedQuestion, ...data}} : {data: any}) => {
  return (
   <Main className="flex flex-col gap-20 items-center">
      <HeroSection data={data} />
      <StepSection />
      <AboutSection data={contentfulLandingPageAboutSection}/>
      <FAQSection data={contentfulFrequentlAskedQuestion} />
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
      contentfulLandingPageAboutSection {
        title
        description {
          description
        }
        sideImage {
          gatsbyImage(width:250, height:250)
        }
        activeClient
        overAllClient
      }
  contentfulFrequentlAskedQuestion {
    accordion {
      title
      description
    }
  }
}
`