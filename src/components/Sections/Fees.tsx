import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Fees = () => {
    return (
        <section id="fees" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">ご利用料金</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        児童福祉法に基づく明瞭な料金体系です。
                        各ご家庭の所得に応じて設定された「負担上限月額」の範囲内でご利用いただけます（原則1割負担）。
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/60">
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl font-bold text-black mb-2">負担上限月額（例）</h3>
                        <p className="text-black/70 text-sm">
                            上限額は世帯の所得税の区分によって異なります。詳しくはお住まいの自治体へお問い合わせください。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm">
                            <div className="flex items-start mb-4 md:mb-0">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-bold text-black text-lg">生活保護受給世帯・市町村民税非課税世帯</h4>
                                    <p className="text-sm text-black/60">生活保護受給されているご家庭、または非課税のご家庭</p>
                                </div>
                            </div>
                            <div className="text-left md:text-right">
                                <span className="text-3xl font-black text-black">¥0</span>
                                <span className="text-black/60 text-sm"> / 月</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm">
                            <div className="flex items-start mb-4 md:mb-0">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-bold text-black text-lg">一般1</h4>
                                    <p className="text-sm text-black/60">市町村民税課税世帯（世帯収入が900万円以下のご家庭）</p>
                                </div>
                            </div>
                            <div className="text-left md:text-right">
                                <span className="text-3xl font-black text-black">¥4,600</span>
                                <span className="text-black/60 text-sm"> / 月</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm">
                            <div className="flex items-start mb-4 md:mb-0">
                                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1 mr-4" />
                                <div>
                                    <h4 className="font-bold text-black text-lg">一般2</h4>
                                    <p className="text-sm text-black/60">上記以外（世帯収入が900万円を超えるご家庭）</p>
                                </div>
                            </div>
                            <div className="text-left md:text-right">
                                <span className="text-3xl font-black text-black">¥37,200</span>
                                <span className="text-black/60 text-sm"> / 月</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm">
                        <h4 className="font-bold text-accent-dark mb-2">その他にかかる費用について</h4>
                        <ul className="list-disc list-inside text-black/80 space-y-2 text-sm">
                            <li>おやつ代：1回120円</li>
                            <li>お出かけ・イベント参加費：実費負担となります</li>
                            <li>創作活動費：実費が発生する場合があります</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fees;
