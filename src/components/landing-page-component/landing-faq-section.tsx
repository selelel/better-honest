import { Section } from "../commons/commons";
import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

type accordionDataTypes = {title: string, description:string} []
function FAQSection({data}: {data: any}) {
    const accordionData:accordionDataTypes = data.accordion || [];
    return ( 
        <Section className="w-full flex flex-col items-center gap-10">
            <div className="w-full text-center">
                <h2 className="text-4xl">Frequently Asked Question</h2>
            </div>
            <Accordion className="w-11/12" type="single" collapsible>
                {accordionData.map(({title, description}, idx) => (
                    <AccordionItem value={`item-${idx+1}`}>
                        <AccordionTrigger className="w-full">
                            <div className="w-full border p-4">{title}</div>
                            </AccordionTrigger>
                        <AccordionContent>
                            <div className="w-full border p-4">{description}</div>
                        </AccordionContent>
                    </AccordionItem>)
                    )
                }
            </Accordion>    
        </Section>
    );
}

export default FAQSection;