function Technologies() {
    const technologies = [
        { name: 'Ansys', logo: '🔷', category: 'FEA' },
        { name: 'Abaqus', logo: '🔶', category: 'Simulation' },
        { name: 'CATIA', logo: '🎯', category: 'CAD' },
        { name: 'SolidWorks', logo: '⚙️', category: 'Design' },
        { name: 'OpenFOAM', logo: '💨', category: 'CFD' },
        { name: 'Hyperworks', logo: '📊', category: 'Analysis' },
        { name: 'Matlab', logo: '🖥️', category: 'Computing' },
        { name: 'Python', logo: '🐍', category: 'Automation' }
    ];

    return (
        <section id="technologies" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full text-cyan-600 font-semibold text-sm mb-4">TECHNOLOGY STACK</div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">
                        Powered by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <div key={index} className="modern-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 text-center">
                            <div className="text-5xl mb-4">{tech.logo}</div>
                            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">{tech.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
window.Technologies = Technologies;