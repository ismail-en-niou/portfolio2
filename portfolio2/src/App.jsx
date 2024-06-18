import Header from './components/1-header/headr';
import Hero from './components/2-hero/hero';
import Main from './components/3-main/Main';
import ContactUs  from'./components/4-contact/ContactUs';
import Footer from './components/5-footer/footer';
import Time from './components/timeline/Time'
import { useEffect, useState } from 'react';
function App() {
  const [button, setbutton] = useState(false)
useEffect(() => {
  window.addEventListener("scroll",() => {
       if(window.scrollY >="300"){
        setbutton(true);
       }else{
        setbutton(false)
       }
   })
}, [])

  return (
      <div id='up'  className='container' >
      <Header /> 
      <Hero /> 
      <div className="divider" id='project'></div>
      <Main />
      <div className="divider" id='contact'></div>
      <ContactUs />
      <div className="divider" id='contact'></div>
      <Time />
      <div className="divider" id='tech'></div>
      <Footer />
      
     
      <a style={{ opacity:button ?1 :0 ,transition:"1s ease-in-out",}} href="#up">
      <button type='button' className='icon-keyboard_arrow_up scroll2top'></button>
      </a>
 
   
      </div>
  );
}

export default App
