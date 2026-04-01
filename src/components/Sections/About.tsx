import React from 'react';
import { Heart, Sun, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">施設について</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        Papas clubでは、ハワイ語で「家族・絆」を意味する「Ohana（オハナ）」の精神を大切にしています。お子様一人ひとりの個性と発達のペースに寄り添い、専門的かつ温かな支援を提供します。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <img src="/images/about1.jpg" alt="施設風景1" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl border-4 border-white/80 hover:-translate-y-1 transition-transform" />
                    <img src="/images/about2.jpg" alt="施設風景2" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl border-4 border-white/80 hover:-translate-y-1 transition-transform" />
                    <img src="/images/about3.jpg" alt="湘南の海と富士山" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl border-4 border-white/80 hover:-translate-y-1 transition-transform" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 text-center hover:bg-white/50 transition-all">
                        <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">温かく安全な空間</h3>
                        <p className="text-black/80 text-sm leading-relaxed">
                            Ohana（家族）をモットーに、心が落ち着き、リラックスできる環境を整え、「もうひとつの安心して過ごせる居場所」を提供します。
                        </p>
                    </div>

                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 text-center hover:bg-white/50 transition-all">
                        <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Sun size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">個性に合わせた成長</h3>
                        <p className="text-black/80 text-sm leading-relaxed">
                            自信や生活スキルを、その子に合ったペースで育みます。日々の小さな「できた！」の積み重ねを一緒に喜び、大切にします。
                        </p>
                    </div>

                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 text-center hover:bg-white/50 transition-all">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-4">自然とのふれあい</h3>
                        <p className="text-black/80 text-sm leading-relaxed">
                            Papasclubは湘南の海からすぐ近く。心身の成長のために最高の環境です。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
