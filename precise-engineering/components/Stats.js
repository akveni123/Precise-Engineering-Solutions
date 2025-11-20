function Stats() {
    const stats = [
        { icon: '🎯', value: '500+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
        { icon: '⚡', value: '50+', label: 'Industry Partners', color: 'from-purple-500 to-pink-500' },
        { icon: '🏆', value: '15+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },
        { icon: '🌍', value: '25+', label: 'Countries Served', color: 'from-green-500 to-emerald-500' }
    ];

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                            <div className="text-5xl mb-4">{stat.icon}</div>
                            <div className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                            </div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
window.Stats = Stats;