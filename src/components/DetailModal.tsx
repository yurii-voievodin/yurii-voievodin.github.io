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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className="relative w-full h-full max-w-7xl max-h-[95vh] m-4 rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 p-3 bg-black/20 hover:bg-black/40 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 text-white" />
                </button>
                
                {/* Detail Page Component */}
                <div className="w-full h-full overflow-auto">
                    <DetailComponent />
                </div>
            </div>
        </div>
    );
}