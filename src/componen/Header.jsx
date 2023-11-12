import React, { useState, useEffect } from 'react';
import Alan from '../assets/img/3-removebg-preview.png'

const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Roshans Aland Hakim", "Web Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section id="home" className="home ">
      <div className='row pt-5'>
        <div className='col'>
        <span className="blur border"></span>
             <span className="blur"></span>
             <div classNameName='hero-content col'>
               <h1>Hi, I'm <span classNameName='wrap'> {text} </span></h1>
               <p>I am an informatics engineering student, Semarang State University. I'm interested in web developers who are committed to creating engaging and functional online experiences. I am passionate about developing ideas about advanced web technology, so I am currently focused on continuing to develop my skills.</p>
               <div className="btn-box">
                <a href="#skill">Get Started </a>
              </div>
             </div>
        </div>
        <div className='col home-jpg text-center'>
        <div className="background-image">
              <p className="teks">O</p>
              <img src={Alan} alt="#"/>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Header