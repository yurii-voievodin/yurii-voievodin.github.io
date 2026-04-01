import { ReactNode } from 'react';
import PhotoCarousel from '@/components/PhotoCarousel';
import DomainTags from '@/components/projects/DomainTags';

interface ProjectCardProps {
    date: string;
    tags: string[];
    images?: { src: string; alt: string }[];
    children: ReactNode;
    footer?: ReactNode;
    showSeparator?: boolean;
}

export default function ProjectCard({ date, tags, images, children, footer, showSeparator = true }: ProjectCardProps) {
    return (
        <>
            <div className="md:bg-zinc-800/90 md:backdrop-blur-sm md:rounded-3xl md:shadow-2xl md:overflow-hidden md:border md:border-zinc-700/50 md:hover:border-zinc-600/70 transition-all duration-300">
                <div className="px-0 py-4 md:p-10 text-zinc-100">
                    <div className="mb-6 flex items-center gap-3 flex-wrap">
                        <div className="text-sm text-zinc-500 font-medium">
                            {date}
                        </div>
                        <DomainTags tags={tags} />
                    </div>
                    {images ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                            <div className="lg:col-span-2 space-y-3">
                                {children}
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <div className="w-full max-w-sm">
                                    <PhotoCarousel images={images} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4 items-start">
                            <div className="space-y-3">
                                {children}
                            </div>
                        </div>
                    )}
                    {footer}
                </div>
            </div>
            {showSeparator && <hr className="md:hidden border-violet-500/30 my-2" />}
        </>
    );
}
