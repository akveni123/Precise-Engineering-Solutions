function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">PE</span>
                            </div>
                            <div>
                                <div className="font-bold text-xl">Precise Engineering</div>
                                <div className="text-sm text-gray-400">Solutions LLP</div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">Leading provider of innovative CAE solutions and engineering services.</p>
                        <div className="flex space-x-4">
                            {['📘', '📷', '💼', '🐦'].map((icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all">
                                    <span className="text-xl">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            {['CAE Simulations', 'CAD Modeling', 'CFD Analysis', 'Automation'].map((item, index) => (
                                <li key={index}><a href="#services" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center space-x-2"><span>📧</span><span>tech@preciseengineerings.tech</span></li>
                            <li className="flex items-center space-x-2"><span>📱</span><span>+91 9003837051</span></li>
                            <li className="flex items-center space-x-2"><span>📱</span><span>+91 9600403028</span></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
                    <p>© 2025 Precise Engineering Solutions LLP. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
window.Footer = Footer;