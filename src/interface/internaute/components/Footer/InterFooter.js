import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube , faInstagramSquare, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import "../../assets/css/Footer.css"
import Logo from '../../../../Global/images/reschool-blanc.png'
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Interfooter = () => {
  return (
    < >
        <div className="footerSection">
            <div className='logo-footer'>
                    <img src={Logo} alt="logo image" className='logo'/>
                    <p className='title-logo-footer'>RE:School Ecology</p>
            </div>

            <div className='section'>
                <p className='title-footer'>Menu</p>
                <a className="footerLink" href="#accueil">Accueil</a> <br></br>
                <a className="footerLink" href="#statistique">Statistique</a> <br></br>
                <a className="footerLink" href="#produits">Produits </a> <br></br>
                <a className="footerLink" href="#mission">Mission </a> <br></br>
                <a className="footerLink" href="#a-propos">A propos </a> <br></br>
                <a className="footerLink" href="#contact">Contactez-nous </a> <br></br>
    
            </div>
                        
            <div className='section'>
                <p className='title-footer'>Policies</p>   
                <a className="footerLink" href="#faq">FAQ </a> <br></br>
                <a className="footerLink" href="#expedition-retours">Expédition & retours </a> <br></br>
                <a className="footerLink" href="#politique-cookies">Politique de Cookies </a> <br></br>  
                <a className="footerLink" href="#politique-confidentialite">Politique de confidentialité du magasin </a> <br></br>
      
             </div>

            <div className='section-last'>
                 <p className='title-footer'>Information Contact</p>  
                <div class="section-last-left">
                        <li><FontAwesomeIcon icon={faMap} className="icon" /><b>Adresse :</b>  42 Rue 8603,Charguia 1, 2035 Tunis</li>
                        <li><FontAwesomeIcon icon={faPhone} className="icon"/><b>Téléphone :</b> +216 58 080 333 | 58 080 111 | 31 148 488</li>                 
                        <li><FontAwesomeIcon icon={faEnvelope} className="icon"  /><b>Email :</b>info@reschool.education</li> 
                </div>
                <div class="wrapper">
                  <ul>
                    <li class="facebook"><a class="facebook" to="https://www.facebook.com/RESCHOOL.EDUCATION"><FontAwesomeIcon icon={faFacebookF} className='fa fa-facebook'/></a></li>                 
                    <li class="youtube"><a href=" https://www.youtube.com/channel/UCVz1D9WyNVZAFCB6cxqpDGQ"><FontAwesomeIcon icon={faYoutube} className='fa fa-youtube'/></a></li>                 
                    <li class="google"><a href="https://reschoolwethink.education/"><FontAwesomeIcon icon={faGoogle} className='fa fa-google'/></a></li>                 
                    <li class="instagram"><a href="https://www.instagram.com/reschool.la.boutique/"><FontAwesomeIcon icon={faInstagramSquare} className='fa fa-instagram '/></a></li>                   
                  </ul>
                </div>
            </div>
            <div className='scroll-icon'>
                <a href='#bottom' className='top-btn'><KeyboardArrowDownIcon  sx={{ fontSize: 40 }}/></a> 
                <a href='#top' className='bottom-btn'><KeyboardArrowDownIcon  sx={{ fontSize: 40 }}/></a> 
            </div>
        </div>
             

        <div id="bottom" className='copy-right'>
            <p className='copy-right-text'>@copyright 2021 par l'équipe de RE:SCHOOL ECOLOGY, Tous droits réservés</p>
        </div>
                  
     </>
    );
}
export default Interfooter;

