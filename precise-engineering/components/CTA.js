function CTA() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm mb-8">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span>Ready to Transform Your Projects?</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Let's Build Something Extraordinary Together
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Partner with us for cutting-edge CAE solutions. Get started with a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="btn-modern px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-2xl">
                            Schedule Free Consultation
                        </button>
                        <button className="btn-modern px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600">
                            View Case Studies
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-white/80">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">📧</span>
                            <span>tech@preciseengineerings.tech</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">📱</span>
                            <span>+91 9003837051</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
window.CTA = CTA;