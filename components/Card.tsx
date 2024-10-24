import Image from "next/image"

interface CardProps {
    title: string
    titleIcon: string
    tech: TechProps[]
}

interface TechProps {
    title: string
    icon: string
}

export default function Card({title, titleIcon, tech}: CardProps) {
    return (
        <div className="relative flex flex-col mb-5 bg-gray-300 shadow-sm border border-slate-200 rounded-lg w-72 h-80 p-6">
            <div className="flex items-center mb-6 border-b-slate-600 border-b-2">
                <Image src={titleIcon} alt="Icon" className="w-12 h-12" />
                <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                {title}
                </h5>
            </div >
            <div className="flex flex-wrap gap-3">
                {tech.map((t, i) => (
                    <div key={"tech:" + i} className="grid justify-items-center">
                        <Image src={t.icon} alt="Icon" className="w-10 h-10" />
                        <p className="ml-3 text-slate-800 text-xs font-semibold">
                        {t.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}