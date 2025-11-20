function Industries() {
    const industries = [
        { icon: '🚗', title: 'Automotive', description: 'EV systems, crash simulations', gradient: 'from-blue-500 to-cyan-500' },
        { icon: '✈️', title: 'Aerospace', description: 'Structural analysis, CFD', gradient: 'from-indigo-500 to-blue-500' },
        { icon: '🛡️', title: 'Defense', description: 'Ballistic testing', gradient: 'from-red-500 to-orange-500' },
        { icon: '🏭', title: 'Manufacturing', description: 'Process optimization', gradient: 'from-gray-500 to-slate-500' },
        { icon: '⚡', title: 'Energy', description: 'Renewable systems', gradient: 'from-yellow-500 to-orange-500' },
        { icon: '💻', title: 'Electronics', description: 'Thermal management', gradient: 'from-green-500 to-emerald-500' }
    ];

    return (
        <section id="industries" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">INDUSTRIES WE SERVE</div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        <span className="gradient-text">Specialized</span> Industry Solutions
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="modern-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                                {industry.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                            <p className="text-gray-600">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
window.Industries = Industries;