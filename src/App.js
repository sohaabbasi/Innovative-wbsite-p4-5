import React, { useEffect } from 'react';
import useWebAnimations ,{slideInDown, flipInX, bounceIn, tada} from "@wellyshen/use-web-animations";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';
import p1 from './a3.webp';
import p2 from './a1.webp';
import p3 from './a2.webp';
import p4 from './a4.webp';
import p5 from './a5.webp';
import p6 from './a6.webp'; 
import logo from './logo.png';

function App() {
  useEffect(()=>{
   AOS.init({duration:2500});
  },[])
  const navAnim = useWebAnimations({...slideInDown});
  const p2Anim = useWebAnimations({
    keyframes:flipInX.keyframes,
    timing:{
      ...flipInX.timing,
      iterations:Infinity,
      delay:1000,
      duration:3000,
      direction:'alternate',
    }
  });
  const p3Anim = useWebAnimations({
    keyframes:bounceIn.keyframes,
    timing:{
      ...bounceIn.timing,
      iterations:Infinity,
      duration:4000,
      direction:'alternate',
    }
  });
  const p4Anim = useWebAnimations({
    keyframes:tada.keyframes,
    timing:{
      ...tada.timing,
      iterations:Infinity,
      duration:5000,
      direction:'alternate',
    }
  });
  const img1 = useWebAnimations({
    keyframes:[
      {transform: 'scale(1)'},
      {transform: 'scale(1.15)'}
    ],
    timing:{
      duration:4000,
      iterations:Infinity,
      direction:"alternate",
      easing: 'ease-in-out'
    }
  });

  return (
    <div>
      <div className='navWrapper'>
        <div className='mainNav' ref={navAnim.ref}>
          <a href='./'><img src={logo} alt='logo' style={{width:'130px'}}/></a>
          <div className='nav'>
            <div>Home</div>
            <div>Our Services</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>

      <div className='main text' style={{marginTop:60}}>
      <img src={p3} alt='illustration' ref={img1.ref} style={{minWidth:'300px', maxWidth:'40vw'}}/>
        <div data-aos='fade-left' style={{minWidth:'300px', maxWidth:'34vw'}}>
          <h1>Innovative and intelligent
          technology solutions
          and services.</h1>
          <div style={{textAlign:"center"}} data-aos='slide-right'><button>Product Management</button></div>
        </div>
      </div>

      <div className='section1'>
        <div style={{textAlign:"center", margin:6}} data-aos='flip-right'>
          <img src={p2} ref={p2Anim.ref} alt='illustration' style={{minWidth:'300px', maxWidth:'40vw'}}/>
          <div style={{minWidth:'300px', maxWidth:'40vw', color:'#ed9600'}}>
            <h1>We're here to help you
                optimize conversions</h1>
            <div style={{textAlign:"center"}}><button>Let's Make it Happen</button></div>
          </div>
        </div>
        <div style={{textAlign:"center", margin:6}} data-aos='flip-left'>
          <img src={p1} ref={p3Anim.ref} alt='illustration' style={{minWidth:'300px', maxWidth:'35vw'}}/>
          <div style={{minWidth:'300px', maxWidth:'40vw', color:'#ed9600'}}>
            <h1>Scalable extended
              business office
              services</h1>
            <div style={{textAlign:"center"}}><button>Staff Augmentation</button></div>
          </div>
        </div>
      </div>
       
      <div className='section2 text'>
        <div style={{minWidth:'300px', maxWidth:'34vw'}} data-aos='fade-right'>
          <h1>Customized solutions
              to meet the needs of
              the changing market</h1>
          <div style={{textAlign:"center"}}  data-aos='slide-right'><button>Revenue Cycle Management</button></div>
        </div>
        <img src={p4} ref={p4Anim.ref} alt='illustration' style={{minWidth:'300px', maxWidth:'40vw'}}/>
      </div>

      <div >
        <h1 style={{textAlign:"center", color:'#ed9600'}} data-aos='fade-up'>Our Featured Services</h1>
        <div className='section3 text'>
          <div className='cols' data-aos='flip-up'>
            <img src={p5} alt='illustration' style={{width:'100%'}}/>
            <h2 style={{textAlign:"center"}}>Automation with Cloud Infrastructure</h2>
          </div>
          <div className='cols' data-aos='flip-up'>
            <img src={p6} alt='illustration' style={{width:'100%'}}/>
            <h2 style={{textAlign:"center"}}>Internet of Things for End User Applications</h2>
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default App;
