import fs from "fs";
import path from "path";
import * as icons from "lucide-react";
import ReactMarkdown from "react-markdown";
import { LucideIcon } from "lucide-react";
import TimelineHighlighter from '@/components/TimelineHighlighter';

const iconMap: Record<string, keyof typeof icons> = {
    "bi-phone": "Phone",
    "bi-heart": "Heart",
    "bi-heartbreak": "HeartCrack",
    "bi-keyboard": "Keyboard",
    "bi-house": "Home",
    "bi-shield": "Shield",
    "bi-terminal": "Terminal",
    "bi-check-circle": "CheckCircle",
    "bi-cpu": "Cpu",
    "bi-laptop": "Laptop",
    "bi-at": "AtSign",
    "bi-circle": "Circle",
    "bi-flower2": "Flower",
    "bi-apple": "Apple",
};

function getIcon(iconKey: string, color?: string) {
    const IconComponent = icons[iconMap[iconKey] || "Circle"] as LucideIcon;
    return IconComponent ? (
        <IconComponent className="w-6 h-6" color={color || "gray"} />
    ) : null;
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
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-600"></div>
                
                <div className="space-y-8">
                    {timeline.map((event, i) => (
                        <div key={i} className="relative flex items-start">
                            {/* Icon container with background */}
                            <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-zinc-800 border-2 border-zinc-600 rounded-full mr-6">
                                {event.data?.symbol?.icon ? (
                                    getIcon(event.data.symbol.icon, event.data.symbol.color)
                                ) : (
                                    <div className="w-3 h-3 bg-zinc-500 rounded-full"></div>
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
                                            <div className="prose prose-invert max-w-none [&_a]:text-blue-400 [&_a]:underline [&_a]:decoration-blue-400/50 [&_a:hover]:text-blue-300 [&_a:hover]:decoration-blue-300">
                                                <ReactMarkdown>{event.description}</ReactMarkdown>
                                            </div>
                                        )}
                                        {event.data?.image && (
                                            <div className="mt-4">
                                                <img
                                                    src={`/${event.data.image.path}`}
                                                    alt=""
                                                    className="rounded-lg max-w-xs shadow-md"
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