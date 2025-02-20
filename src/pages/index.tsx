// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => {
  return (
  <div className="text-sm">
    Better Honest
    {JSON.stringify(data, null, 2)}
  </div>
)}

export const Head: HeadFC<DataProps> = () => <Seo children={undefined} />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }

    contentfulLandingPageContent {
    id
    name
    primaryText {
      primaryText
    }
    secondaryText {
      secondaryText
    }
  }

   contentfulJustTesting {
    id
    thisIsAText
    hehehe {
      id
      HLHLH
    }
  }
  }
`
