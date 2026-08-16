import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-accent pt-14 pb-8 border-t border-accent/20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Brand & Section Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-3">
                        <span className="text-2xl font-black tracking-tight text-accent">
                            Next Animix
                        </span>
                        <p className="text-xs leading-relaxed opacity-80">
                            Your definitive hub for anime insights, character backstories, and curated manga recommendations.
                        </p>
                    </div>

                    {/* Content Columns */}
                    <div className="bg-secondary/40 border border-accent/15 p-5 rounded-2xl backdrop-blur-sm transition-all hover:border-accent/40 hover:-translate-y-0.5">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                                Character Info
                            </h3>
                        </div>
                        <p className="text-xs leading-relaxed opacity-75">
                            Explore comprehensive profiles, rich lore, backstories, and signature abilities.
                        </p>
                    </div>

                    <div className="bg-secondary/40 border border-accent/15 p-5 rounded-2xl backdrop-blur-sm transition-all hover:border-accent/40 hover:-translate-y-0.5">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                                Manga Info
                            </h3>
                        </div>
                        <p className="text-xs leading-relaxed opacity-75">
                            Track latest chapter drops, arc summaries, and tailored reading recommendations.
                        </p>
                    </div>

                    <div className="bg-secondary/40 border border-accent/15 p-5 rounded-2xl backdrop-blur-sm transition-all hover:border-accent/40 hover:-translate-y-0.5">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                                Anime Info
                            </h3>
                        </div>
                        <p className="text-xs leading-relaxed opacity-75">
                            Stay synced with seasonal broadcasts, episode guides, and community reviews.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-accent/10 flex flex-col sm:flex-row items-center justify-between text-xs opacity-70 gap-3">
                    <p>&copy; {new Date().getFullYear()} Next Animix. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:opacity-100 hover:text-accent transition-colors">Privacy</a>
                        <a href="#terms" className="hover:opacity-100 hover:text-accent transition-colors">Terms</a>
                        <a href="#contact" className="hover:opacity-100 hover:text-accent transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;