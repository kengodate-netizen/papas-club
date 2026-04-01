import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const VIDEOS = [
    '/videos/19700121_2156_69c60eda4e6c81919966aeaf8b4baa7c.mp4',
    '/videos/19700121_2156_69c60f2105c8819186e4022d278bce7d.mp4'
];

const Hero = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef0 = useRef<HTMLVideoElement>(null);
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const refs = [videoRef0, videoRef1];

    useEffect(() => {
        // Initial play
        const currentRef = refs[currentVideo].current;
        if (currentRef) {
            currentRef.play().catch(e => console.log("Video auto-play prevented:", e));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleVideoEnded = (index: number) => {
        const nextIndex = (index + 1) % VIDEOS.length;
        setCurrentVideo(nextIndex);
        const nextRef = refs[nextIndex].current;
        if (nextRef) {
            nextRef.currentTime = 0;
            nextRef.play().catch(e => console.log("Video auto-play prevented:", e));
        }
    };

    return (
        <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Videos */}
            <div className="absolute inset-0 z-0 bg-secondary/10">
                {VIDEOS.map((src, index) => (
                    <video
                        key={src}
                        ref={refs[index]}
                        src={src}
                        muted
                        playsInline
                        onEnded={() => handleVideoEnded(index)}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${currentVideo === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                {/* Overlay to ensure readability and add white-out effect support */}
                <div className="absolute inset-0 bg-white/10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
                <h1
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 tracking-tight whitespace-nowrap"
                    style={{ textShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 10px rgba(255,255,255,0.8)" }}
                >
                    Another secure place to belong
                </h1>
                <p
                    className="text-xl md:text-2xl text-black/90 mb-10 font-medium"
                    style={{ textShadow: "0 0 15px rgba(255,255,255,0.9)" }}
                >
                    もうひとつの『安心して過ごせる居場所』の提供
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-primary-light hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
                    >
                        <span>無料相談・見学に申し込む</span>
                        <ArrowRight size={20} />
                    </Link>
                    <a
                        href="tel:0467334240"
                        className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm text-black font-bold rounded-full shadow-md hover:bg-white border-2 border-primary/20 transition-all flex items-center justify-center space-x-2"
                    >
                        <Phone size={20} className="text-secondary" />
                        <span>0467-33-4240</span>
                    </a>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
