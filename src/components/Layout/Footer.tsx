import React from 'react';
import { Camera, MessageCircle, FileText } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="bg-primary-dark text-white py-12 border-t-4 border-secondary relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(rgba(60, 40, 30, 0.85), rgba(60, 40, 30, 0.85)), var(--footer-wood-url)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold">
                            <span className="text-secondary-light">Papas</span> club
                        </h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            もうひとつの、安心できる居場所。<br />
                            ハワイアンリゾートのような温かい雰囲気の<br />
                            児童発達支援・放課後等デイサービス。
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold border-b border-white/20 pb-2">公式SNS・リンク</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="Instagram">
                                <Camera size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="Official LINE">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors" aria-label="note">
                                <FileText size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold border-b border-white/20 pb-2">情報公開</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>
                                <a href="#" className="hover:text-secondary-light transition-colors inline-block">
                                    自己評価結果等公表（PDF）
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-secondary-light transition-colors inline-block">
                                    プライバシーポリシー
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} Papas club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
