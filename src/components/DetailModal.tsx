'use client';

import { X } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';
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
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Handle close with animation
    const handleClose = useCallback(() => {
        if (isExiting) return; // Prevent multiple close calls
        
        // Clear any existing close timer
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
        }
        
        setIsVisible(false); // Start slide-down animation
        setIsExiting(true);  // Keep modal rendered during animation
        
        // Call onClose after animation completes
        closeTimerRef.current = setTimeout(() => {
            setIsExiting(false);
            onClose();
            closeTimerRef.current = null;
        }, 300); // Match transition duration
    }, [onClose, isExiting]);

    // Handle opening animation
    useEffect(() => {
        if (isOpen && !isExiting) {
            // Start animation after component mounts
            const timer = setTimeout(() => setIsVisible(true), 10);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isExiting]);

    // Reset states when modal is closed by parent (but not during exit animation)
    useEffect(() => {
        if (!isOpen && !isExiting) {
            setIsVisible(false);
        }
    }, [isOpen, isExiting]);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleClose();
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
    }, [isOpen, handleClose]);

    // Render modal when open OR when exiting (to allow exit animation)
    if ((!isOpen && !isExiting) || !detailPage) return null;

    // Get the component for the specified detail page
    const DetailComponent = DetailPageComponents[detailPage as keyof typeof DetailPageComponents];
    
    if (!DetailComponent) {
        console.warn(`No component found for detail page: ${detailPage}`);
        return null;
    }

    return (
        <div className="fixed inset-0 z-50">
            {/* Backdrop with fade animation */}
            <div 
                className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            />
            
            {/* Modal Content with slide animation */}
            <div className={`relative w-full h-full transition-transform duration-300 ease-out ${
                isVisible ? 'transform translate-y-0' : 'transform translate-y-full'
            }`}>
                {/* Close Button */}
                <button
                    onClick={handleClose}
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