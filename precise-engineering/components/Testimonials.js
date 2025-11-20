function Testimonials() {
    const testimonials = [
        { quote: "Exceptional CAE solutions that reduced our development time by 40%.", author: "Dr. Sarah Chen", position: "VP Engineering", company: "TechCorp", avatar: "👩‍💼", rating: 5 },
        { quote: "Outstanding results and professional service throughout.", author: "Michael Rodriguez", position: "Lead Engineer", company: "AeroSpace", avatar: "👨‍💼", rating: 5 },
        { quote: "AI-powered automation transformed our workflow efficiency.", author: "Emma Thompson", position: "CTO", company: "Innovation Labs", avatar: "👩‍🔬", rating: 5 }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-pink-100 rounded-full text-pink-600 font-semibold text-sm mb-4">CLIENT TESTIMONIALS</div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Trusted by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="modern-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl">
                            <div className="flex space-x-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold">{testimonial.author}</div>
                                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
window.Testimonials = Testimonials;