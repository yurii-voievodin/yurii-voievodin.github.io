'use client';

import * as icons from "lucide-react";
import ReactMarkdown from "react-markdown";
import { LucideIcon, Plus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import TimelineHighlighter from '@/components/TimelineHighlighter';
import DetailModal from '@/components/DetailModal';

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
        detailPage?: string;
    };
};

function createIdFromDate(date?: string): string {
    if (!date) return '';
    // Remove spaces, commas, and other special characters, convert to lowercase
    return date.replace(/[\s,.-]/g, '').toLowerCase();
}

export default function TimelinePage() {
    const [timeline, setTimeline] = useState<TimelineItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetailPage, setSelectedDetailPage] = useState<string>('');

    useEffect(() => {
        fetch('/data/timeline.json')
            .then(response => response.json())
            .then(data => {
                setTimeline(data.timeline);
                // Dispatch custom event after data is set and will render
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('timelineLoaded'));
                }, 0);
            })
            .catch(error => console.error('Error loading timeline data:', error));
    }, []);

    const handleDetailClick = (detailPage: string) => {
        setSelectedDetailPage(detailPage);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDetailPage('');
    };
    
    return (
        <div className="container mx-auto py-8 px-4">
            {/* Mount the client highlighter early in the tree */}
            <TimelineHighlighter />
            
            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-zinc-600"></div>
                
                <div className="space-y-8">
                    {timeline.map((event, i) => {
                        const detailPage = event.data?.detailPage;
                        return (
                        <div key={i} className="relative flex items-start">
                            {/* Icon container with background */}
                            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-zinc-800 border-2 border-zinc-600 rounded-full mr-4">
                                {event.data?.symbol?.icon ? (
                                    getIcon(event.data.symbol.icon, event.data.symbol.color)
                                ) : (
                                    <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                                )}
                            </div>
                            
                            {/* Content container with conditional layout */}
                            <div id={createIdFromDate(event.date)} className="flex-1 bg-zinc-800/50 rounded-lg p-6 shadow-lg border border-zinc-700/50">
                                {detailPage ? (
                                    /* Two-container layout: 90% text + 10% button when button exists */
                                    <div className="flex gap-0">
                                        {/* Text Container - 90% width */}
                                        <div className="w-[90%]">
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
                                        
                                        {/* Button Container - 10% width */}
                                        <div className="w-[10%] flex items-end justify-center pl-4">
                                            <button
                                                onClick={() => handleDetailClick(detailPage)}
                                                className="p-3 bg-zinc-700/50 hover:bg-zinc-600/70 border-2 border-zinc-500/50 hover:border-zinc-400/70 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
                                                aria-label="View details"
                                            >
                                                <Plus className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Full width layout when no button */
                                    <div className="w-full">
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
                                )}
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            {/* Detail Modal */}
            <DetailModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                detailPage={selectedDetailPage}
            />
        </div>
    );
}