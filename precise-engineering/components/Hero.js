function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-semibold text-gray-700">🚀 Innovative CAE Solutions</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
                            <span className="block text-gray-900">Engineering</span>
                            <span className="block gradient-text">Excellence</span>
                            <span className="block text-gray-900">Redefined</span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            Empowering industries with cutting-edge CAE simulations, multiphysics solutions, 
                            and AI-powered engineering services across automotive, aerospace, and electronics sectors.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="btn-modern px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-center shadow-xl">
                                Start Your Project
                            </a>
                            <a href="#services" className="btn-modern px-8 py-4 bg-white text-gray-800 rounded-xl font-bold border-2 border-gray-200 text-center hover:border-blue-600">
                                Explore Services
                            </a>
                        </div>

                        <div className="flex items-center space-x-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">500+</div>
                                <div className="text-sm text-gray-600">Projects</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">50+</div>
                                <div className="text-sm text-gray-600">Partners</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300"></div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">98%</div>
                                <div className="text-sm text-gray-600">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative float-animation">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" 
                                 alt="Engineering" className="rounded-2xl w-full" />
                        </div>
                        
                        <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">✓</span>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">99.9%</div>
                                    <div className="text-xs text-gray-600">Accuracy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
window.Hero = Hero;