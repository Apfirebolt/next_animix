import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-accent py-8 px-4">
            <div className="container mx-auto text-center mb-6 border-4 border-accent rounded-lg py-4 shadow-lg">
                <p className="text-2xl font-bold">&copy; {new Date().getFullYear()} Next Animix. All rights reserved.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                <div className="bg-secondary p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Character Info</h3>
                    <p className="text-sm">
                        Explore detailed information about your favorite characters, their backstories, and unique traits.
                    </p>
                </div>

                <div className="bg-secondary p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Manga Info</h3>
                    <p className="text-sm">
                        Discover the latest manga releases, summaries, and recommendations tailored for you.
                    </p>
                </div>

                <div className="bg-secondary p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Anime Info</h3>
                    <p className="text-sm">
                        Stay updated with trending anime, episode guides, and exclusive reviews.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;