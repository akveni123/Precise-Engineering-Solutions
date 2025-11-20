function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">PE</span>
                        </div>
                        <div>
                            <div className="font-bold text-xl gradient-text">Precise Engineering</div>
                            <div className="text-xs text-gray-500">Solutions LLP</div>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center space-x-1">
                        {['Home', 'Services', 'Technologies', 'Industries', 'About'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}
                               className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
                                {item}
                            </a>
                        ))}
                        <a href="#contact"
                           className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
                            Get Started
                        </a>
                    </nav>

                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
                        <div className="space-y-1.5">
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 space-y-2">
                        {['Home', 'Services', 'Technologies', 'Industries', 'About'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                               className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                                {item}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}
                           className="block px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold mt-2">
                            Get Started
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}
window.Header = Header;

