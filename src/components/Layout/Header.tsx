import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'ホーム', path: '/' },
        { name: '理念', path: '/philosophy' },
        { name: '施設について', path: '/about' },
        { name: '提供サービス', path: '/services' },
        { name: 'ご利用料金', path: '/fees' },
        { name: '1日の流れ', path: '/schedule' },
        { name: 'スタッフ紹介', path: '/staff' },
        { name: 'ご利用の流れ', path: '/flow' },
        { name: 'アクセス', path: '/access' },
        { name: 'お問い合わせ', path: '/contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-background-paper/90 backdrop-blur-md shadow-sm">
            <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center gap-4">
                            <img src="/logo.jpg" alt="Papas club logo" className="h-20 md:h-24 w-auto mix-blend-multiply object-contain rounded-full" />
                            <div className="hidden sm:flex flex-col items-center justify-center">
                                <span className="text-sm md:text-base font-bold text-black/60 tracking-widest mb-0.5">児童発達支援・放課後等デイサービス</span>
                                <span className="font-serif text-3xl md:text-4xl font-bold text-black">
                                    <span className="text-secondary">Papas</span> club
                                </span>
                            </div>
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-6 lg:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-sm font-medium transition-colors hover:text-secondary whitespace-nowrap ${location.pathname === item.path ? 'text-secondary font-bold' : 'text-black'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-black hover:text-secondary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-background-paper border-t border-primary/10 shadow-lg absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`block px-3 py-3 rounded-md text-base font-medium hover:bg-secondary/10 hover:text-secondary ${location.pathname === item.path ? 'text-secondary font-bold bg-secondary/5' : 'text-black'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
