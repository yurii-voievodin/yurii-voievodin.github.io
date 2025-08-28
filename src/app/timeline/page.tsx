import fs from "fs";
import path from "path";
import * as icons from "lucide-react";
import ReactMarkdown from "react-markdown";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import TimelineHighlighter from '@/components/TimelineHighlighter';

function getIcon(iconKey: string, color?: string) {
    const IconComponent = icons[iconKey as keyof typeof icons] as LucideIcon;
    return IconComponent ? (
        <IconComponent className="w-4 h-4" color={color || "gray"} />
    ) : (
        <icons.Circle className="w-4 h-4" color={color || "gray"} />
    );
}

type TimelineItem = {
    date?: string;
    title?: string;
    description?: string;
    comment?: string;
    data?: {
        image?: { path: string; id: string };
        symbol?: { icon: string; color: string };
    };
};

function createIdFromDate(date?: string): string {
    if (!date) return '';
    // Remove spaces, commas, and other special characters, convert to lowercase
    return date.replace(/[\s,.-]/g, '').toLowerCase();
}

export default async function TimelinePage() {
    const filePath = path.join(process.cwd(), "public/data/timeline.json");
    const file = fs.readFileSync(filePath, "utf-8");
    const timeline: TimelineItem[] = JSON.parse(file).timeline;
    
    return (
        <div className="container mx-auto py-8 px-4">
            {/* Mount the client highlighter early in the tree */}
            <TimelineHighlighter />
            
            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-600"></div>
                
                <div className="space-y-8">
                    {timeline.map((event, i) => (
                        <div key={i} className="relative flex items-start">
                            {/* Icon container with background */}
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-zinc-800 border-2 border-zinc-600 rounded-full mr-4">
                                {event.data?.symbol?.icon ? (
                                    getIcon(event.data.symbol.icon, event.data.symbol.color)
                                ) : (
                                    <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                                )}
                            </div>
                            
                            {/* Content */}
                            <div id={createIdFromDate(event.date)} className="flex-1 bg-zinc-800/50 rounded-lg p-6 shadow-lg border border-zinc-700/50">
                                {event.comment ? (
                                    <div className="prose prose-invert max-w-none [&_a]:text-blue-400 [&_a]:underline [&_a]:decoration-blue-400/50 [&_a:hover]:text-blue-300 [&_a:hover]:decoration-blue-300">
                                        <ReactMarkdown>{event.comment}</ReactMarkdown>
                                    </div>
                                ) : (
                                    <>
                                        {event.date && (
                                            <div className="text-sm text-zinc-400 mb-2 font-medium">
                                                {event.date}
                                            </div>
                                        )}
                                        {event.title && (
                                            <div className="prose prose-invert max-w-none mb-3 [&_a]:text-blue-400 [&_a]:underline [&_a]:decoration-blue-400/50 [&_a:hover]:text-blue-300 [&_a:hover]:decoration-blue-300">
                                                <ReactMarkdown>{event.title}</ReactMarkdown>
                                            </div>
                                        )}
                                        {event.description && (
                                            <div className="prose prose-invert max-w-none [&_a]:text-blue-400 [&_a]:underline [&_a]:decoration-blue-400/50 [&_a:hover]:text-blue-300 [&_a:hover]:decoration-blue-300 [&_ul]:list-disc [&_ul]:ps-5 [&_ul]:space-y-1 [&_li]:text-zinc-300">
                                                <ReactMarkdown>{event.description}</ReactMarkdown>
                                            </div>
                                        )}
                                        {event.data?.image && (
                                            <div className="mt-4">
                                                <Image
                                                    src={`/${event.data.image.path}`}
                                                    alt=""
                                                    width={320}
                                                    height={240}
                                                    className="rounded-lg w-full max-w-full sm:max-w-sm md:max-w-md shadow-md"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 384px, 448px"
                                                    priority={false}
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}