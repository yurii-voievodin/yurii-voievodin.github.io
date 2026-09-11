import { ReactNode } from 'react';
import PhotoCarousel from '@/components/PhotoCarousel';
import WidePhotoCarousel from '@/components/WidePhotoCarousel';
import DomainTags from '@/components/projects/DomainTags';
import Panel from '@/components/ui/Panel';

interface ProjectCardProps {
    date: string;
    tags: string[];
    images?: { src: string; alt: string }[];
    wideImages?: { src: string; alt: string }[];
    children: ReactNode;
    footer?: ReactNode;
    showSeparator?: boolean;
}

export default function ProjectCard({ date, tags, images, wideImages, children, footer, showSeparator = true }: ProjectCardProps) {
    return (
        <>
            <Panel
                frame="responsive"
                radius="3xl"
                emphasis
                bodyClassName="px-0 py-4 md:p-10 text-zinc-100"
            >
                <div className="mb-6 flex items-center gap-3 flex-wrap">
                    <div className="text-sm text-zinc-400 font-medium">
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
                {wideImages && wideImages.length > 0 && (
                    <div className="mt-6">
                        <WidePhotoCarousel images={wideImages} />
                    </div>
                )}
                {footer}
            </Panel>
            {showSeparator && <hr className="md:hidden border-violet-500/30 my-2" />}
        </>
    );
}
