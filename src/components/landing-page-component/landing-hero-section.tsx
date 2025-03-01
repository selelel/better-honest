import { Section } from "@/components/commons/commons";
import React from "react";
import { Button } from "../ui/button";

function HeroSection({data}: {data: any}) {
    const {contentfulLandingPageHeroSection: hero_data, site :{siteMetadata: site}} = data;
    
    return (
    <Section className="!px-0 !mx-0 flex flex-col gap-2 justify-center items-center min-h-[700px] bg-orange-300">
        <div className="text-center space-y-2">
            <p>Welcome to {site.title}</p>
            <h1 className="text-6xl font-medium">{hero_data.title}</h1>
            <h2>{hero_data.secondaryText}</h2>
        </div>

        <div className="flex gap-4 *:min-w-[120px] mt-5">
            <Button>Book a Demo</Button>     
            <Button>Contact</Button>
        </div>
    </Section>
    );
}

export default HeroSection;