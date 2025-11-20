function Features() {
    const features = [
        { icon: '⚡', title: 'Lightning Fast', description: 'Accelerate your time-to-market with optimized workflows' },
        { icon: '🎯', title: 'Precision Accuracy', description: 'Industry-leading accuracy validated against testing' },
        { icon: '🔒', title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime' },
        { icon: '🌐', title: 'Global Support', description: '24/7 expert support across all time zones' }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                             alt="Team" className="rounded-3xl shadow-2xl" />
                    </div>
                    <div>
                        <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-semibold text-sm mb-4">WHY CHOOSE US</div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Built for <span className="gradient-text">Performance</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Experience the difference of working with industry experts.
                        </p>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
window.Features = Features;