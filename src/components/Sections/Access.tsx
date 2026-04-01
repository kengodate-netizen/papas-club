import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';

const Access = () => {
    return (
        <section id="access" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">アクセス</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        {/* 施設外観画像 */}
                        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-white/60 bg-white/40 backdrop-blur-md">
                            <img 
                                src="/images/exterior.jpg" 
                                alt="施設外観" 
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* 施設情報 */}
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60">
                            <h3 className="text-2xl font-bold text-black mb-6 border-b border-black/10 pb-2">施設情報</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-black mb-1">所在地</h4>
                                        <p className="text-black/80 leading-relaxed">
                                            〒253-0054<br />
                                            神奈川県茅ヶ崎市常盤町6-54
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-black mb-1">営業時間</h4>
                                        <div className="text-black/80 space-y-1">
                                            <p><span className="inline-block w-24 font-bold">平日・祝日：</span> 09:00 〜 18:00</p>
                                            <p className="text-sm text-accent-dark mt-2 font-medium">※ 休業日：土曜日・日曜日・年末年始・お盆休み</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Info className="w-6 h-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-black mb-1">送迎について</h4>
                                        <p className="text-black/80 text-sm leading-relaxed">
                                            原則として、学校への迎え、ご自宅への送りを行っております。<br />
                                            送迎可能エリアについてはお気軽にお問い合わせください。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-white/60 relative group">
                        <iframe 
                            src="https://maps.google.com/maps?q=茅ヶ崎市常盤町6-54&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full bg-white/30 backdrop-blur-md"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Access;
