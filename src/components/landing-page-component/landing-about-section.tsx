import { Section } from "../commons/commons";
import * as React from 'react';
import { Button } from "../ui/button";


function AboutSection({data}: {data: any}) {

    return ( 
        <Section className="flex gap-10 justify-between *:flex-1 bg-slate-200">
            <img className="max-h-[400px] " src={data.sideImage.gatsbyImage.images.sources[0].srcSet} width={100} height={100} alt="" />
            <div className="flex flex-col justify-center gap-2 py-8">
                <p className="text-4xl font-semibold">About</p>
                <h2 className="text-2xl">{data.title}</h2>
                <article>{data.description.description}</article>
                <Button className="w-fit">Book a Demo</Button>
            </div>
        </Section>
    );
}

export default AboutSection;