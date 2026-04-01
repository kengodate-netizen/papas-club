import React from 'react';
import { Clock, Sun, Moon } from 'lucide-react';

const Schedule = () => {
    const childDevSchedule = [
        { time: '09:00', activity: 'お迎え', desc: '保育園、ご自宅へのお迎え' },
        { time: '09:30', activity: '朝の会', desc: '健康チェック' },
        { time: '09:50', activity: '個別療育', desc: '' },
        { time: '10:40', activity: '集団療育 or 戸外活動', desc: '' },
        { time: '11:15', activity: 'グループ活動、制作', desc: '' },
        { time: '11:30', activity: '帰りの会', desc: '' },
        { time: '11:45', activity: 'お送り', desc: '保育園、ご自宅への送り' },
    ];

    const afterSchoolSchedule = [
        { time: '14:30', activity: '学習', desc: '宿題や課題に取り組みます。' },
        { time: '15:00', activity: 'おやつ、SST', desc: 'おやつの時間、SST（ソーシャルスキルトレーニング）' },
        { time: '15:30', activity: '個別療育・集団療育・戸外活動', desc: '少人数、集団行動、お外遊びなど' },
        { time: '16:30', activity: '好きな時間', desc: '好きな遊びを通してのコミュニケーション' },
        { time: '16:50', activity: '帰りの会', desc: '一日の振り返り' },
    ];

    return (
        <section id="schedule" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">1日の流れ</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        学校がある日と学校がお休みの日で、リズムの異なるスケジュールを組んでいます。お子様の体力やペースに合わせて柔軟に対応します。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10"></div>
                        <div className="flex items-center space-x-3 mb-8">
                            <Clock className="w-8 h-8 text-secondary" />
                            <h3 className="text-2xl font-bold text-black border-b-2 border-secondary pb-1">平日・祝日</h3>
                        </div>

                        <div className="mb-10">
                            <h4 className="text-xl font-bold text-secondary-dark mb-6 border-l-4 border-secondary pl-3">児童発達支援</h4>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:-left-3 before:ml-5 before:w-0.5 before:bg-secondary/30">
                                {childDevSchedule.map((item, index) => (
                                    <div key={index} className="relative flex items-start">
                                        <div className="absolute -left-3 mt-1.5 w-3 h-3 bg-secondary rounded-full ring-4 ring-white shadow-sm"></div>
                                        <div className="ml-8">
                                            <div className="flex items-end mb-1">
                                                <span className="text-lg font-bold text-secondary-dark w-16">{item.time}</span>
                                                <span className="text-lg font-bold text-black ml-2">{item.activity}</span>
                                            </div>
                                            {item.desc && <p className="text-black/70 text-sm ml-18">{item.desc}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold text-secondary-dark mb-6 border-l-4 border-secondary pl-3">放課後等デイサービス</h4>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:-left-3 before:ml-5 before:w-0.5 before:bg-secondary/30">
                                {afterSchoolSchedule.map((item, index) => (
                                    <div key={index} className="relative flex items-start">
                                        <div className="absolute -left-3 mt-1.5 w-3 h-3 bg-secondary rounded-full ring-4 ring-white shadow-sm"></div>
                                        <div className="ml-8">
                                            <div className="flex items-end mb-1">
                                                <span className="text-lg font-bold text-secondary-dark w-16">{item.time}</span>
                                                <span className="text-lg font-bold text-black ml-2">{item.activity}</span>
                                            </div>
                                            {item.desc && <p className="text-black/70 text-sm ml-18">{item.desc}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10"></div>
                        <div className="flex items-center space-x-3 mb-8">
                            <Sun className="w-8 h-8 text-accent-DEFAULT" />
                            <h3 className="text-2xl font-bold text-black border-b-2 border-accent pb-1">土日</h3>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full min-h-[250px] text-center">
                            <Moon className="w-16 h-16 text-accent/50 mb-4" />
                            <p className="text-xl font-bold text-black/80 mb-2">休業日</p>
                            <p className="text-black/60 text-sm leading-relaxed">
                                土曜日・日曜日は施設がお休みとなります。<br />
                                ご家族での時間を大切にお過ごしください。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
