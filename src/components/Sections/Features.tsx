import React from 'react';

const featuresData = [
    {
        id: "01",
        title: "家以外の居場所を提供",
        description: "成功体験の積み重ねで情緒安定を図り、保護者様の負担を軽減します（送迎・相談）",
        image: "/images/image1.jpg"
    },
    {
        id: "02",
        title: "運動療育",
        description: "様々な運動を通じて子供達の知力・体力の向上、情緒の安定を図ります。",
        image: "/images/image2.jpg"
    },
    {
        id: "03",
        title: "コミュニケーション能力と社会性の向上",
        description: "集団活動や遊びを通じて他者との関わりを学び、社会性を向上させます。",
        image: "/images/image3.jpg"
    },
    {
        id: "04",
        title: "学習・生活スキルの習得",
        description: "宿題支援や日常生活動作の実践を通じて子供達の自信を養います。",
        image: "/images/image4.jpg"
    }
];

const Features = () => {
    return (
        <section className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
                {featuresData.map((feature, index) => {
                    const isEven = index % 2 === 1; // 0-indexed, so 1 and 3 are even rows (2nd, 4th)
                    return (
                        <div key={feature.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}>
                            {/* 画像 (Image) */}
                            <div className="w-full lg:w-1/2">
                                <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] w-full bg-white/40 backdrop-blur-md">
                                    <img 
                                        src={feature.image} 
                                        alt={feature.title} 
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                                    />
                                </div>
                            </div>
                            
                            {/* テキスト (Text) */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                <div className="flex items-end gap-3 mb-6 border-b-2 border-primary/20 pb-4">
                                    <span className="text-secondary text-lg md:text-xl font-bold font-serif mb-1 md:mb-2">特色</span>
                                    <span className="text-secondary text-6xl md:text-7xl lg:text-8xl font-black leading-none">{feature.id}</span>
                                    <span className="text-secondary/30 text-2xl md:text-4xl font-black tracking-widest mb-1 md:mb-2 ml-2">FEATURES</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-black leading-snug mb-6 whitespace-pre-line">
                                    {feature.title}
                                </h3>
                                <p className="text-black/80 text-base md:text-lg leading-loose">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Features;
