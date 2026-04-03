import React from 'react';
import { Users, BookOpen, CheckSquare, MessageCircle, Activity } from 'lucide-react';

const Services = () => {
    const servicesList = [
        {
            title: "療育の形式",
            description: "個別療育は、支援者とお子さまが1対1や少人数で行います。本人の苦手な部分に集中してアプローチしたり、得意なことを伸ばします。\n集団療育は、お友達とのグループ活動（遊び、制作、ゲームなど）を通じた支援です。順番を待つ、ルールを守る、協力するといった「社会性」を育みます。",
            icon: <Users className="w-8 h-8 text-secondary" />
        },
        {
            title: "学習支援",
            description: "学校の宿題のサポートだけでなく、読み書き、計算の基礎、集中力の持続などの習得を支援します。\n「できた！」という成功体験を積み重ね、学習への苦手意識を減らすこと、またその子に合った「学び方（視覚的な工夫など）」を見つけることを目指します。",
            icon: <BookOpen className="w-8 h-8 text-secondary" />
        },
        {
            title: "生活スキルトレーニング\n※ADL/IADL支援",
            description: "身支度や、食事のマナー、手洗い、整理整頓、買い物の練習など、日常生活に直結する動作の訓練です。\n将来、できるだけ周りの手助けを借りずに自分らしく生活できる「自立」の基盤を作ります。",
            icon: <CheckSquare className="w-8 h-8 text-secondary" />
        },
        {
            title: "社会性支援\n※SST(ｿｰｼｬﾙｽｷﾙﾄﾚｰﾆﾝｸﾞ)",
            description: "挨拶、適切な断り方、相手の気持ちを推察する練習、公共交通機関の利用マナーなどを学びます。\n社会の中でのコミュニケーションを学び、対人関係のトラブルを減らして円滑に集団生活を送れるよう支援します。",
            icon: <MessageCircle className="w-8 h-8 text-secondary" />
        },
        {
            title: "運動療育",
            description: "走る、跳ぶ、ボール投げなどの粗大運動や指先を使う微細運動を遊びとして取り入れます。\n体幹を鍛え姿勢を安定させ、脳に刺激を与えることで情緒の安定や集中力の向上に繋げます。感覚統合の改善も期待できます。",
            icon: <Activity className="w-8 h-8 text-secondary" />
        }
    ];

    return (
        <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">提供サービス</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        子どもたちの成長、自立、そして日々の笑顔を育むための多角的なサポートプログラムです。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {servicesList.map((service, index) => (
                        <div 
                            key={index} 
                            className={`bg-white/40 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 hover:bg-white/50 transition-all hover:-translate-y-1 flex flex-col md:col-span-1 lg:col-span-2 ${
                                servicesList.length === 5 && index === 3 ? 'lg:col-start-2' : ''
                            }`}
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-4 bg-white/60 rounded-2xl shadow-inner border border-white">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-black ml-4 whitespace-pre-line leading-tight">{service.title}</h3>
                            </div>

                            <p className="text-black/80 leading-relaxed font-medium text-sm whitespace-pre-wrap flex-grow">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
