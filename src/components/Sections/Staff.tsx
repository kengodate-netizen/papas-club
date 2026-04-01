import React from 'react';
import { UserCircle } from 'lucide-react';

const Staff = () => {
    const staffMembers = [
        {
            name: '丸谷 据',
            role: '管理者／保育士',
            image: '/images/sueru.jpg',
            message: '「保育士資格を持ち、介護施設や放課後等デイサービスで経験を積んできました。子どもたちの発達段階や個性に合わせた遊びを取り入れ、安全で楽しく学べる環境づくりを大切にしています。私自身、サーフィンやスノーボードなど体を動かすことが大好きで、スポーツを通じたコミュニケーションが得意です。運動あそびやグループ活動を通して、子どもたちの自信や協調性、チャレンジ精神を育んでいきたいと思っています！」'
        },
        {
            name: '男澤 美帆',
            role: '保育士',
            image: '/images/miho.jpg',
            message: '「放課後等デイサービスでの経験を活かし、特性をもつ子どもたちの生活支援や個別支援計画に沿った活動を提供しています。集団でのルール理解や友だちとの関わり方、自己表現のサポートを丁寧に行い、子どもたちの『自信』と『自立』を後押しすることを大切にしています。プライベートではアウトドアや海が大好きで、キャンプや浜辺の散歩で自然と触れ合う時間を楽しんでいます！」'
        }
    ];

    return (
        <section id="staff" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">スタッフ紹介</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        Papas clubを支える、温かく専門的なスタッフたち。子どもたち一人ひとりに寄り添い、安心できる居場所を作ります。
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {staffMembers.map((staff, index) => (
                        <div key={index} className="bg-white/40 backdrop-blur-md p-8 rounded-3xl text-center shadow-xl border border-white/60 hover:bg-white/50 transition-all flex flex-col justify-start">
                            <div className="w-48 h-48 mx-auto bg-white/50 rounded-full flex items-center justify-center text-black/30 mb-6 border-4 border-white shadow-inner overflow-hidden">
                                {staff.image ? (
                                    <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                                ) : (
                                    <UserCircle size={128} />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-black mb-1">{staff.name}</h3>
                            <p className="text-sm font-bold text-secondary mb-4">{staff.role}</p>
                            <div className="text-black/80 text-sm italic leading-relaxed text-left inline-block w-full">
                                {staff.message}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;
