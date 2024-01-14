import React, { useEffect, useRef, useState } from 'react';
import './music.css';
import { useScroll, useTransform, motion, useMotionValue } from 'framer-motion';
import AiMusic from '../../assets/LofiMusic.mp3'
import pauseButton from '../../assets/pauseButton.svg'
import playButton from '../../assets/playButton.svg'
import musicCover from '../../assets/musicCover.jpeg'

function VerticalLine({tempo}) {
  const [isExpanded, setIsExpanded] = useState(false);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setIsExpanded(!isExpanded);
    }, 1000*(100/tempo)); // Toggle every 1 second
 
    return () => clearInterval(timer); // Clean up on unmount
  }, [isExpanded]);
 
  return (
    <div className="line">
      <div className="wrapper" style={{ transform: isExpanded ? 'scaleY(1)' : 'scaleY(0)' }}></div>
    </div>
  );
 }


const Music = () => {
    const sectionRef = useRef(null);
    const [translate, setTranslate] = useState([0,-100])
    const [style, setStyle] = useState("musicPlayer1 small")
    const [height, setHeight] = useState(80)
    const [play, setPlay] = useState(true);
    const musicRef = useRef(null);
    const [musicButton, setMusicButton] = useState(playButton)
    const [buttonState, setButtonState] = useState(false)

    useEffect(() => {
        if (sectionRef.current) {
            const rectTop = sectionRef.current.offsetHeight-550;
            const rectBottom = rectTop+ sectionRef.current.clientHeight-100;
            setTranslate([rectTop,rectBottom])
        }
    },[]);

    const { scrollY } = useScroll();
    const translateValueX = useTransform(scrollY, translate, [0, -100]);
    const translateValueY = useTransform(scrollY, translate, [0, 110]);
    const width = useTransform(scrollY, translate, [48,192]);
    

    useEffect(() => {
        const handleScroll=()=>{
          const translateEnd = (translateValueX.get() === -100)&&(translateValueY.get() === 110)
          width.get() <= 100
            ? translateEnd
                ? setStyle("musicPlayer0 small")
                : setStyle("musicPlayer1 small")
            : translateEnd 
                ? setStyle("musicPlayer0 big")
                : setStyle("musicPlayer1 big")
            setHeight(width.get()+32)
        }
        window.addEventListener('scroll',handleScroll);
    }, [])

    const handleClick = () =>{
      setPlay(!play)
      play ? void musicRef.current.play() : void musicRef.current.pause() 
      setMusicButton(buttonState ? playButton : pauseButton);
      setButtonState(!buttonState);
    }

 return (
  <div id="music" ref={sectionRef} className='music'>
    <div className='musicTitle'>
      <h1>Music</h1>
    </div>
    <div className='musicContent'>
     <motion.div onClick={handleClick} style={{width:width, translateY: translateValueY,translateX: translateValueX }} className={style} >
       <motion.div className='musicCover' style={{height:height,backgroundImage:`url(${musicCover})`,backgroundPosition:'center',backgroundRepeat:'no-repeat'}}></motion.div>
       <div className='musicInfos'>
            <h1 className='musicArtist'>DaGuy</h1>
            <h1 className='musicName'>DaZik</h1>
       </div>
       <div className='musicBars'>
        <VerticalLine tempo={70}/>
        <VerticalLine tempo={90}/>
        <VerticalLine tempo={80}/>
       </div>
       <div className='musicControls'>
        <img src={musicButton} width="32px" />
       </div>
     </motion.div>
     <div className='musicDesc'>
        <p>Here's some <span className='hard'>ambiant music</span> (turn up volume) to entertain you a little bit while looking at my stuff.</p>
        <p>This is a <span className='hard'>AI Generated</span> music made with a <span className='hard'>summer theme</span>.</p>
     </div>
   </div>
   <audio ref={musicRef} loop src={AiMusic} />
  </div>
 );
};

export default Music;