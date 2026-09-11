'use client';

import { ChevronDown } from '@/components/icons';
import Panel from '@/components/ui/Panel';
import Tag from '@/components/ui/Tag';
import SectionHeading from '@/components/ui/SectionHeading';
import { useId, useState } from 'react';

export interface QAItem {
    question: string;
    answer: React.ReactNode;
    projects: string[];
}

interface QASectionProps {
    title: string;
    items: QAItem[];
}

export default function QASection({ title, items }: QASectionProps) {
    return (
        <div className="space-y-3">
            <SectionHeading size="sm" className="mb-4">{title}</SectionHeading>
            {items.map((item, index) => (
                <QACard key={index} item={item} />
            ))}
        </div>
    );
}

function QACard({ item }: { item: QAItem }) {
    const [isOpen, setIsOpen] = useState(false);
    const panelId = useId();

    return (
        <Panel
            frame="responsive"
            radius="2xl"
            className="transition-all duration-300 md:hover:border-[var(--border-strong)]"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full px-4 py-4 md:px-6 flex items-start justify-between gap-4 text-left"
            >
                <span className="text-zinc-100 font-medium">{item.question}</span>
                <ChevronDown
                    size={18}
                    className={`text-zinc-500 mt-1 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            {isOpen && (
                <div id={panelId} className="px-4 pb-4 md:px-6 md:pb-6">
                    <div className="text-zinc-300 leading-relaxed space-y-3">
                        {item.answer}
                    </div>
                    {item.projects.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {item.projects.map((project) => (
                                <Tag key={project} tone="zinc">
                                    {project}
                                </Tag>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </Panel>
    );
}
