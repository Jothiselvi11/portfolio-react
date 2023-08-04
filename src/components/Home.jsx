import React from "react";
import {Link} from "react-router-dom";
import Header from "./Header";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typed from 'typed.js';
import pic from "./img/pic.jpeg"
function Home(){
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current,
        {
            strings:["Frontend Developer","Active Learner"],
            typeSpeed:100,
            backSpeed:100,
            backDelay:1000,
            loop:true
        }
    );
    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return(

    <div>
        <Header/>
        <section className="home">
        <div className="home-content">
        <h3>Hello,It's me</h3>
        <h1>Jothiselvi J</h1>
        <h3>And I'm a <span ref={el}/></h3>
        <p>I am a keen, hard working, reliable and excellent time keeper. 
        I am a bright and receptive person, able to communicate well with people at all 
        levels. I am good at working using my own initiative and I am flexible in my approach to work duties. I have a good sense
         of humour and a pleasant approach. </p>
        <div className="social-media">
        <Link to="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><LinkedInIcon/></Link>
        <Link to="https://instagram.com/jothi_selvi_11?igshid=MzNlNGNkZWQ4Mg=="><InstagramIcon/></Link>
        <Link to="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"><EmailIcon/></Link>
        <Link to="https://www.whatsapp.com/"><WhatsAppIcon/></Link>
             
          </div>
        <Link to="/" className="btn">Download CV</Link>
        </div>
         <div className="home-img">
          <img src={pic} alt="" className="mypic"/>
         </div>
        </section>
    </div>
  )
}


export default Home;