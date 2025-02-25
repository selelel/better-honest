import { Section } from "@/components/commons/commons";
import { ChartLineIcon, CircleDollarSignIcon, Hammer, Phone } from "lucide-react";
import React from "react";

function StepSection() {
    const steps = [
        {
            Icon: Phone,
            title: 'Contact Our Address'
        },
        {
            Icon: ChartLineIcon,
            title: 'Extimate the cost'
        },
        {
            Icon: CircleDollarSignIcon,
            title: 'Choose any payment method'
        },
        {
            Icon: Hammer,
            title: 'We\'ll fix it'
        },
    ]
    return (
    <Section className="flex justify-between">
        {steps.map((data, idx) => (<Step {...data} step={idx + 1} />))}
    </Section>
    );
}

export default StepSection;

function Step({Icon, title, step} : {Icon: any, title: string, step: number}) {
    return (
    <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-x-16">
            <div className="p-5 bg-slate-200">
                <Icon color=' rgb(249 115 22 / var(--tw-bg-opacity, 0.6))' width={64} height={64} />
            </div>
            <span className="text-8xl font-extrabold text-slate-200 ">0{step}</span>
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
    </div>
    );
}