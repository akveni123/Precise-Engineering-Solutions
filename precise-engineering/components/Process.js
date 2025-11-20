function Process() {
    const steps = [
        { number: '01', title: 'Discovery', description: 'Deep dive into requirements', icon: '🔍' },
        { number: '02', title: 'Strategy', description: 'Develop comprehensive approach', icon: '📋' },
        { number: '03', title: 'Execution', description: 'Implement advanced solutions', icon: '⚡' },
        { number: '04', title: 'Validation', description: 'Rigorous testing', icon: '✓' },
        { number: '05', title: 'Delivery', description: 'Actionable insights', icon: '🚀' }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-600 font-semibold text-sm mb-4">OUR PROCESS</div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        From Concept to <span className="gradient-text">Reality</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-black mb-4 mx-auto">
                                {step.number}
                            </div>
                            <div className="text-4xl text-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
                            <p className="text-gray-600 text-center text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
window.Process = Process;