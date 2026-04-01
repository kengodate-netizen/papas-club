import React from 'react';
import { Heart } from 'lucide-react';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-3xl font-serif font-bold text-black mb-4 flex justify-center items-center gap-2">
                        <Heart className="text-secondary" />
                        理念
                    </h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <h3 className="text-2xl font-bold text-black mb-8">Papas clubの思い</h3>
                </div>

                <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/60 space-y-6 text-black/90 leading-relaxed font-medium">
                    <p>
                        Papas clubのテーマはこれまで地域社会が担っていた「学校教育と実社会を繋ぐ架け橋」となること。
                    </p>
                    <p>
                        子どもたちは学校で、「足並みを揃えること」「ルールを守ること」を学び、授業は暗記ベースで進行します。これもまた大切な学びの一つですが、後々社会に出た際には「問題や疑問に取り組み、自分の正解を導き出す力」「能動的に考える力」「”Because”を伝える力」といった、学校の教育とはまた違った力が求められます。
                    </p>
                    <p>
                        後者の力はかつては近所の大人たちとの挨拶ややり取りといった交流を通して”大人の社会”を垣間見ることで自然と養われていた部分もありましたが、様々な理由から現代社会ではこうした機会が失われてしまっています。
                    </p>
                    <p>
                        私達は、幅広い分野の体験、多くの人や価値観との出会いの機会を生み出し、子供たちの財産となる貴重な経験を積んでもらうこと、そしてその積み重ねで、頑張りや努力を社会で生かすための「社会人基礎力」を身に付けてもらうことを目指します。
                    </p>
                    <p className="font-bold text-black">
                        「子どもたちにはいつまでも幸せに、笑顔で生きていってほしい」という、普遍的な親御さん達の願いに寄り添い、目まぐるしく変わる現代社会を自分らしく生き抜くために必要な力と健やかな心を育みます。
                    </p>
                    <div className="text-right pt-6 mt-6 border-t border-black/10">
                        <p className="font-bold text-lg text-secondary-dark">丸山　据</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
