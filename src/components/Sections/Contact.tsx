import React from 'react';
import { Send, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/60 relative overflow-hidden">
                    {/* Decorative accents */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-secondary via-accent to-primary pl-4"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">お問い合わせ</h2>
                        <p className="text-lg text-black/80">
                            ご質問や施設見学のご予約など、まずはお気軽にご連絡ください。<br />Ohanaへのご参加を心よりお待ちしております。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        {/* Phone CTA */}
                        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-lg text-center flex flex-col justify-center transform transition-all hover:-translate-y-1">
                            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                                <Phone size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-2">お電話でのご相談</h3>
                            <p className="text-black/60 text-sm mb-4">平日 10:00〜18:00</p>
                            <a href="tel:0467-33-4240" className="text-3xl font-black text-secondary hover:text-secondary-light transition-colors">
                                0467-33-4240
                            </a>
                        </div>

                        {/* Form Placeholder */}
                        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-6 text-center">メッセージを送る</h3>
                            <form className="space-y-4">
                                <div>
                                    <input type="text" placeholder="お名前" className="w-full px-4 py-3 bg-white/50 text-black border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder-black/40" />
                                </div>
                                <div>
                                    <input type="email" placeholder="メールアドレス" className="w-full px-4 py-3 bg-white/50 text-black border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder-black/40" />
                                </div>
                                <div>
                                    <textarea rows={4} placeholder="お問い合わせ内容" className="w-full px-4 py-3 bg-white/50 text-black border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none placeholder-black/40"></textarea>
                                </div>
                                <button type="button" className="w-full py-4 bg-secondary text-white font-bold rounded-xl shadow-md hover:bg-secondary-light transition-colors flex items-center justify-center space-x-2">
                                    <Send size={18} />
                                    <span>送信する</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
