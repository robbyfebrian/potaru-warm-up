import { RiExchangeDollarLine , RiFundsLine , RiTimer2Line } from "@remixicon/react";

interface DescriptionBoxProps {
    title?: string,
    runtime?: number,
    revenue: number,
    vote_average: number,
    overview?: string,
}

const DescriptionBox = ({ title, runtime, revenue, vote_average, overview }: DescriptionBoxProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-2">
            <h2 className="text-3xl font-bold text-yellow-400">{title}</h2>
            <div className="flex items-center gap-x-3">
                <p className="flex items-center gap-x-2 font-bold text-white border-2 rounded-3xl px-2 py-1">
                    <RiExchangeDollarLine widths="24px" xHeight="24px" color="white"/>
                    { new Intl.NumberFormat("en-US" , {
                        currency : "USD" ,
                        style : "currency" ,
                    }).format(revenue) }{ " " }
                </p>
                <p className="flex items-center gap-x-2 font-bold text-white border-2 rounded-3xl px-2 py-1">
                    <RiTimer2Line widths="24px" xHeight="24px" color="white"/>
                    { runtime } minutes
                </p>
                <p className="flex items-center gap-x-2 font-bold text-white border-2 rounded-3xl px-2 py-1">
                    <RiFundsLine widths="24px" xHeight="24px" color="white"/>
                    { Math.ceil(vote_average) } Vote Average
                </p>
            </div>
            <p className="max-w-5xl font-bold leading-tighter text-center tracking-tighter text-yellow-400 shadow-accent-foreground">{ overview }</p>
        </div>
    )
}

export default DescriptionBox;