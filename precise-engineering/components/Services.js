function Services() {
    const services = [
        { icon: '🔬', title: 'CAE Simulations', description: 'Advanced finite element analysis and computational fluid dynamics.', gradient: 'from-blue-500 to-cyan-500', features: ['FEA Analysis', 'CFD Modeling', 'Thermal Analysis'] },
        { icon: '🎨', title: 'CAD Modeling', description: 'Precision 3D modeling and design optimization.', gradient: 'from-purple-500 to-pink-500', features: ['3D Design', 'Parametric Modeling', 'Assembly Design'] },
        { icon: '⚙️', title: 'Process Automation', description: 'Streamline workflows with AI-powered optimization.', gradient: 'from-orange-500 to-red-500', features: ['Workflow Automation', 'AI Integration', 'Custom Scripts'] },
        { icon: '🤖', title: 'AI/ML Solutions', description: 'Machine learning models for predictive analysis.', gradient: 'from-green-500 to-emerald-500', features: ['Predictive Models', 'Data Analysis', 'Neural Networks'] },
        { icon: '🔋', title: 'Battery Design', description: 'Battery simulation and thermal management for EVs.', gradient: 'from-indigo-500 to-purple-500', features: ['Cell Design', 'Pack Optimization', 'Thermal Management'] },
        { icon: '📊', title: 'Consulting', description: 'End-to-end project consulting with expert guidance.', gradient: 'from-pink-500 to-rose-500', features: ['Project Planning', 'Risk Analysis', 'Quality Assurance'] }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm mb-4">OUR SERVICES</div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Comprehensive <span className="gradient-text">Engineering Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From concept to deployment, we deliver world-class engineering services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="modern-card group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
window.Services = Services;