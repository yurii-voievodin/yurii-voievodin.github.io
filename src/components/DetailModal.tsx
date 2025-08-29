'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';
import VistaCreateDetails from './detail-pages/VistaCreateDetails';

interface DetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    detailPage?: string;
}

// Component mapping for different detail pages
const DetailPageComponents = {
    'vistacreate-details': VistaCreateDetails,
    // Add more detail page components here as needed
} as const;

export default function DetailModal({ isOpen, onClose, detailPage }: DetailModalProps) {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !detailPage) return null;

    // Get the component for the specified detail page
    const DetailComponent = DetailPageComponents[detailPage as keyof typeof DetailPageComponents];
    
    if (!DetailComponent) {
        console.warn(`No component found for detail page: ${detailPage}`);
        return null;
    }

    return (
        <div className="fixed inset-0 z-50">
            {/* Half-Transparent Blurred Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-md"
                onClick={onClose}
            />
            
            {/* Modal Content - Internal scroll with right-side scrollbar */}
            <div className="relative w-full h-full">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-3 bg-black/40 hover:bg-black/60 rounded-full transition-all duration-200 backdrop-blur-md border-2 border-white/30 shadow-lg"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 text-white drop-shadow-sm" />
                </button>
                
                {/* Detail Page Component - Internal scroll positioned to right edge */}
                <div className="w-full h-full overflow-auto modal-scroll">
                    <DetailComponent />
                </div>
            </div>
        </div>
    );
}