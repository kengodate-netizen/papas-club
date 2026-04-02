import React, { useState } from 'react';
import { Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xykbdgkd';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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

                        {/* Form */}
                        <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-lg relative">
                            <h3 className="text-xl font-bold text-black mb-6 text-center">メッセージを送る</h3>

                            {status === 'success' && (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-3xl p-6 text-center animate-in fade-in duration-300">
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h4 className="text-xl font-bold text-black mb-2">送信完了</h4>
                                    <p className="text-black/70">
                                        お問い合わせありがとうございます。<br />
                                        内容を確認次第、担当者よりご連絡いたします。
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 px-6 py-2 bg-secondary/10 text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-colors"
                                    >
                                        元の画面に戻る
                                    </button>
                                </div>
                            )}

                            <form
                                action={endpoint}
                                method="POST"
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="お名前"
                                        className="w-full px-4 py-3 bg-white/50 text-black border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder-black/40"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="メールアドレス"
                                        className="w-full px-4 py-3 bg-white/50 text-black border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder-black/40"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="お問い合わせ内容"
                                        className="w-full px-4 py-3 bg-white/50 text-black border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none placeholder-black/40"
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-start space-x-2 text-red-500 bg-red-50 p-3 rounded-xl text-sm">
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                        <p>送信に失敗しました。時間をおいて再度お試しいただくか、お電話にてご連絡ください。</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 bg-secondary text-white font-bold rounded-xl shadow-md hover:bg-secondary-light transition-colors flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span>送信中...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>送信する</span>
                                        </>
                                    )}
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
