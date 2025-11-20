function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
            <Header />
            <Hero />
            <Stats />
            <Services />
            <Features />
            <Technologies />
            <Process />
            <Industries />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);