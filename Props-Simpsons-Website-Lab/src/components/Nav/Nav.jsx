import './Nav.css'
import MenuItem from '../MenuItem/MenuItem.jsx'
import {useState} from 'react'

export default function Nav(props) {

    let [state] = useState({
       items: ['Shrek Facts','Fiona Facts','Donkey Facts','encyclopedia','Games','Food']
     })  

    return(
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger"><a href="/#">VISIT SPRINGFIELD!</a></li>
                            <li className="trigger"><a href="/#">VISIT SHREK SWAMP</a>
                                <ul className="submenu">
                                    <li><a href="/#">Link 1</a></li>
                                    <li><a href="/#">Link 2</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                     {/* {state.items.map(item =>{
                <MenuItem key={item} title={item}/>   
                })}     */}
                     <MenuItem title={state.items[0]}/>
                     <MenuItem title={state.items[1]}/>
                     <MenuItem title={state.items[2]}/>
                     <MenuItem title={state.items[3]}/>
                     <MenuItem title={state.items[4]}/>
                     <MenuItem title={state.items[5]}/>
                     
                    <i className="fa fa-search"></i>  
                </ul>
                
            </div>
        </nav>
    );
}