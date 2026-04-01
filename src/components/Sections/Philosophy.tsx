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
                        私たちは、子ども一人ひとりの個性や発達段階、生きづらさを丁寧に見つめ、安心して「自分らしく過ごせる居場所」と感じてもらえる環境づくりを目指します。
                    </p>
                    <p>
                        遊びや日常の体験に加え、運動やスポーツ、屋外活動、体を動かすゲームなどを通じて、身体の使い方やバランス感覚、持久力や協調性を段階的に育みながら、心の安定や自信、達成感を大切にした療育を行います。
                    </p>
                    <p>
                        生活能力や社会性、コミュニケーション力、自己肯定感を高めることで、子どもが将来、家庭・学校・地域の中であたたかくつながりを持ちながら、自立した生活を送れるよう支援します。
                    </p>
                    <p>
                        学校や家庭との連携を重視し、保護者や先生と情報共有をしながら、子どもにとって「切れ目のない支援」が実現できるように努めます。
                    </p>
                    <p className="font-bold text-black">
                        また、地域社会ともつながりを持ち、子どもとその家族が孤立せず、悩みを共有できるように、相談や調整の場としても機能することで、子どもと家族が安心して未来に向かって歩めるよう、ともに寄り添う支援を行います。
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
