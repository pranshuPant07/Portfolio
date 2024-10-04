import React from 'react'
import '../Style/Explore.css'

function Explore() {
    return (
        <div className='container'>
            <div className='mainContainer'>
                <div className='Heading'>
        
                </div>
                <div className='Button-Explore'>
                    <button className='button1' onClick={(() => {
                        window.scrollTo({
                            top: 560,
                            behavior: 'smooth',
                        });
                    })} alt="Explore">
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
    )
}

export default Explore
