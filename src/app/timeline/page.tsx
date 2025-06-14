import fs from "fs";
import path from "path";
import * as icons from "lucide-react";
import ReactMarkdown from "react-markdown";
import { LucideIcon } from "lucide-react";

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
        <IconComponent className="w-6 h-6 mb-2" color={color || "gray"} />
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

export default async function TimelinePage() {
    const filePath = path.join(process.cwd(), "public/data/timeline.json");
    const file = fs.readFileSync(filePath, "utf-8");
    const timeline: TimelineItem[] = JSON.parse(file).timeline;
    
    return (
        <div className="container mx-auto py-4 space-y-6">
        {timeline.map((event, i) => (
            <div key={i} className="bg-zinc-800/50 rounded-lg p-8 shadow-lg border border-zinc-700/50">
            {event.data?.symbol?.icon && (
                <div className="shrink-0">
                {getIcon(event.data.symbol.icon, event.data.symbol.color)}
                </div>
            )}
            <div className="flex-1">
            {event.comment ? (
                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{event.comment}</ReactMarkdown>
                </div>
            ) : (
                <>
                <div className="text-sm text-gray-500">{event.date}</div>
                {event.title && (
                    <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{event.title}</ReactMarkdown>
                    </div>
                )}
                {event.description && (
                    <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{event.description}</ReactMarkdown>
                    </div>
                )}
                {event.data?.image && (
                    <img
                    src={`/${event.data.image.path}`}
                    alt=""
                    className="mt-2 rounded max-w-xs"
                    />
                )}
                </>
            )}
            </div>
            </div>
        ))}
        </div>
    );
}