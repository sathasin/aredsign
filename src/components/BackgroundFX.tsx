

const BackgroundFX = () => {
    // Generate random particles (fewer for professional look)
    const particles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        width: Math.random() * 3 + 1 + 'px',
        height: Math.random() * 3 + 1 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDuration: Math.random() * 10 + 15 + 's', // Slower
        animationDelay: Math.random() * 5 + 's',
    }));

    return (
        <>
            <div className="fx-grid opacity-30" /> {/* Reduced opacity */}
            <div className="fx-glow">
                <div className="blob-1 w-[60vw] h-[40vh] left-[-10vw] top-[10vh] opacity-10" /> {/* Very subtle */}
                <div className="blob-2 w-[50vw] h-[35vh] right-[-8vw] bottom-[10vh] opacity-10" />
                
                {/* Render Particles */}
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle opacity-20" 
                        style={{
                            width: p.width,
                            height: p.height,
                            left: p.left,
                            top: p.top,
                            animation: `float-particle ${p.animationDuration} linear infinite`,
                            animationDelay: p.animationDelay,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default BackgroundFX;
