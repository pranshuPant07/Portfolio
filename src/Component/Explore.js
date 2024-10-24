import React, { useEffect, useRef } from 'react';
import '../Style/Explore.css';
import img2 from '../Images/—Pngtree—cartoon disabled man saying hello_5568699.png'

function Explore() {
    const headingRefs = useRef([]);

    useEffect(() => {
        headingRefs.current.forEach((heading, index) => {
            setTimeout(() => {
                if (heading) {
                    heading.style.opacity = 1;
                    heading.style.transform = 'translateX(0)';
                }
            }, index * 800);
        });
    }, []);

    return (
        <div className='container'>
            <div className='mainContainer'>
                <div className='Heading'>
                    <h2 ref={el => headingRefs.current[0] = el} style={{ opacity: 0, transform: 'translateX(-100%)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>Hi There,</h2>
                    <h2 ref={el => headingRefs.current[1] = el} style={{ opacity: 0, transform: 'translateX(-100%)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>I'm Pranshu Pant</h2>
                    <h4 ref={el => headingRefs.current[2] = el} style={{ opacity: 0, transform: 'translateX(-100%)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>I'm a Frontend Developer</h4>

                    <div ref={el => headingRefs.current[3] = el} style={{ opacity: 0, transform: 'translateX(-100%)', transition: 'opacity 0.5s ease, transform 0.5s ease' }} className='PhotoPlace'>
                        <img className='imgFor' src={img2} />
                    </div>
                </div>
                <div className='Button-Explore'>
                    <button className='button1' onClick={() => {
                        window.scrollTo({
                            top: 560,
                            behavior: 'smooth',
                        });
                    }} alt="Explore">
                        <i>E</i>
                        <i>x</i>
                        <i>p</i>
                        <i>l</i>
                        <i>o</i>
                        <i>r</i>
                        <i>e</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Explore;
