import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
}

const NewsSection = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // To fetch from Note safely via our proxy (solves CORS and fetches `eyecatch` images)
                // Cache-busting isn't necessary for the direct API endpoint
                const API_URL = `/api/note`;
                
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                if (data && data.data && data.data.contents) {
                    // Get latest 5 note posts
                    const items = data.data.contents.slice(0, 5).map((item: any) => {
                        // Formatting date to YYYY.MM.DD
                        const date = new Date(item.publishAt);
                        const formattedDate = date.getFullYear() 
                            ? `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
                            : '';
                        
                        // Extracting actual eyecatch (thumbnail provided natively by the Note JSON API)
                        const thumbnailUrl = item.eyecatch || '/images/about1.jpg';

                        return {
                            title: item.name,
                            link: item.noteUrl,
                            pubDate: formattedDate,
                            thumbnail: thumbnailUrl
                        };
                    });
                    setNews(items);
                } else {
                    throw new Error('Failed to parse Note API response');
                }
            } catch (err) {
                console.error("Error fetching news:", err);
                setError('お知らせの読み込みに失敗しました。');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <section id="news" className="py-20 bg-[#F5F1E7]/80 relative z-10 w-full overflow-hidden border-t border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">お知らせ</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-black/80">
                        Papas clubからの最新情報や活動報告（note）をお届けします。
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
                        <span className="ml-4 text-black/70 font-medium">お知らせを読み込み中...</span>
                    </div>
                ) : error ? (
                    <div className="text-center py-12 text-red-500 bg-white/50 rounded-2xl">
                        <p>{error}</p>
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-4 px-4 py-2 bg-white rounded-md text-black/70 font-bold shadow-sm"
                        >
                            再読み込み
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <a 
                                key={index} 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-black/5"
                            >
                                <div className="w-full aspect-video overflow-hidden bg-gray-50 relative">
                                    <img 
                                        src={item.thumbnail} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            // Fallback image if thumbnail fails
                                            (e.target as HTMLImageElement).src = '/logo.jpg';
                                            (e.target as HTMLImageElement).className = 'w-full h-full object-contain p-4 opacity-30';
                                        }}
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-sm">
                                        <ExternalLink size={16} className="text-secondary" />
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <time className="text-sm font-bold text-secondary tracking-widest mb-2 font-mono">
                                        {item.pubDate}
                                    </time>
                                    <h3 className="text-lg font-bold text-black leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                
                {!loading && !error && (
                    <div className="mt-12 text-center">
                        <a 
                            href="https://note.com/lush_willet4703" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white border-2 border-secondary text-secondary font-bold rounded-full hover:bg-secondary hover:text-white transition-colors shadow-sm hover:shadow-md"
                        >
                            <span>すべての記事をnoteで見る</span>
                            <ExternalLink size={18} className="ml-2" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSection;
