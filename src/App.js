import './App.css';
import TextComponent from './components/TextComponent';
import TextComponent2 from './components/TextComponent2';
import ImageComponent from './components/ImageComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <header className='animation-top'>
            <div className="logo">
              <img className="logo" src="icon.png" />
            </div>
            <ul className="navbar">
              <a href="#" className="navItens">
                <li>
                  <input className='button' type="button" value="Home" />
                </li>
              </a>
              <a href="#" className="navItens">
                <li>
                  <input className='button' type="button" value="Content" />
                </li>
              </a>
              <a href="#" className="navItens">
                <li>
                  <input className='button' type="button" value="About" />
                </li>
              </a>
              <a href="#" className="navItens">
                <li>
                  <input className='button' type="button" value="Contact Us" />
                </li>
              </a>
            </ul>
          </header>
        </div>
        <div className="item content animation-left"> <TextComponent /></div>
        <div className="item content2 animation-right"><ImageComponent img={require('./assets/pride.svg').default} /></div>
        <div className="item content3 animation-left"><ImageComponent img={require('./assets/love.svg').default} /></div>
        <div className="item content4 animation-right" ><TextComponent2 /> </div>
        <div className="item content5 animation-left"><TextComponent2 /></div>
        <div className="item content6 animation-right"><ImageComponent img={require('./assets/happy.svg').default} /></div>
        <div className="item content7 animation-left"><ImageComponent img={require('./assets/cadaster.svg').default} /></div>
        <div className="item content8 animation-right"><h1 className='form-title'>Contact Us</h1><ContactComponent /></div>
        <div className="item footer1"><FooterComponent x="Contact" y="Adress" /></div>
        <div className="item footer2"><FooterComponent x="Policy" y="Company" /></div>
        <div className="item footer3">
          <img className='footerimg' src="icon.png" />

          <div className='social-media'>

            <a href="#"><img className='footerimg2' src="instagram.png"/></a> 
            <a href="#"><img className='footerimg2' src="linkedin.png"/></a> 
            <a href="#"><img className='footerimg2' src="facebook.png"/></a>
            <a href="#"><img className='footerimg2' src="twitter.png"/></a>
            <a href="#"><img className='footerimg2' src="whatsapp.png"/></a>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
