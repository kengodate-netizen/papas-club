import React from 'react';
import { Phone, CalendarCheck, Smile, Home } from 'lucide-react';

const Flow = () => {
    const steps = [
        {
            title: 'お問い合わせ',
            desc: 'まずはお電話またはフォームより、お気軽にご連絡・見学のお申し込みをしてください。',
            icon: <Phone size={40} className="text-secondary" />
        },
        {
            title: '施設見学・ご面談',
            desc: '施設をご案内し、お子様の様子やご家族のご希望などをじっくりとお伺いします。',
            icon: <Smile size={40} className="text-secondary" />
        },
        {
            title: '受給者証の手続き',
            desc: 'ご利用に必要な「通所受給者証」の申請手続きをお住まいの役所で行っていただきます。',
            icon: <CalendarCheck size={40} className="text-secondary" />
        },
        {
            title: 'ご利用開始',
            desc: 'ご契約後、個別の支援計画を作成し、Papas clubでのサポートがスタートします！',
            icon: <Home size={40} className="text-secondary" />
        }
    ];

    return (
        <section id="flow" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">ご利用の流れ</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        施設見学からご利用開始までのステップをご案内します。不安なことや疑問点も、お気軽にご相談ください。
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto mt-12">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-secondary/30 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group text-center">
                                <div className="w-24 h-24 mx-auto bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-secondary shadow-xl border border-white/80 mb-6 group-hover:scale-110 transition-transform relative z-10">
                                    {step.icon}
                                    {/* Step number badge */}
                                    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold font-mono text-sm shadow-sm border-2 border-white">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                                <p className="text-black/70 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flow;
