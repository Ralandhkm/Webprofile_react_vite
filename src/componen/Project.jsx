import React from 'react'
import ats from '../assets/img/atskarir.png'
import nes from '../assets/img/nesion.png'

const Project = () => {
  return (
    <section id="projek" className="projek">
        <h2 className="header2">Project</h2>
        <p className="paragrap">Here are some project that i made.</p>
        <div className="projeks">
            <div className="kartu">
                <div className="content">
                    <img src={nes} alt="#"/>
                    <h3>NESION</h3>
                    <div className="btn-box text-center">
                        <a href="https://www.figma.com/file/TAOFjFCY2Spx2KxgEl1Iet/NESION?type=design&mode=design&t=JuN15ABlAIZISfkI-1">View More</a>
                    </div>
                </div>
            </div>
            
            <div className="kartu">
                <div className="content">
                    <img src={ats} alt="#"/>
                    <h3>ATS Career</h3>
                </div>
                <div className="btn-box text-center">
                    <a href="https://www.figma.com/file/vZ78tO7BeOBhXpQKRD9IeH/ATS-Career-(Copy)?type=design&mode=design&t=JuN15ABlAIZISfkI-1">View More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project