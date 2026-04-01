import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const StickyCallButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Also only render on smaller screens using CSS classes
    // But logically we can just return the component and let Tailwind handle hiding it on md+
    // Tailwind classes: block md:hidden fixed bottom-4 etc...

    if (!isVisible) return null;

    return (
        <div className="md:hidden fixed bottom-4 right-4 z-50 flex flex-col gap-3">
            {/* LINE Button */}
            <a
                href="#"
                className="w-14 h-14 bg-[#06C755] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#05b34c] transition-transform hover:scale-105 active:scale-95"
                aria-label="LINEでお問い合わせ"
            >
                <MessageCircle size={28} />
            </a>

            {/* Phone Button */}
            <a
                href="tel:0000000000"
                className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-secondary-light transition-transform hover:scale-105 active:scale-95"
                aria-label="電話をかける"
            >
                <Phone size={28} fill="currentColor" />
            </a>
        </div>
    );
};

export default StickyCallButton;
