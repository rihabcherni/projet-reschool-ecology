import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import image1 from '../../../../Global/images/mission1.png'
import image2 from '../../../../Global/images/mission2.png'
import image3 from '../../../../Global/images/mission3.png'

export default function Mission() {
  return (
    <Segment id='mission' style={{padding: '10em 0em', height:"100vh" }} vertical>
      <p className='title-section' > Notre Mission  </p>
      <div >
          <p style={{fontSize:"18px", fontFamily:"Fredoka"}}>
          RE:SCHOOL ECOLOGY a pour mission d’innover en proposant sa solution technologique adaptée au besoin du marché local 
          tunisien afin d’effectuer le tri, le recyclage des déchets d’une manière structurelle, professionnelle, 
          dynamique et technologique afin de travailler sur une dimension macro-économique et d’optimiser le temps d’exploitation 
          et de gestion des déchets poubelles.
          </p>
          <div  style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', alignContent:"center", alignItems:"center",textAlign:"center"}}>
              <div>
                <img src={image1} alt="image" style={{width:"200px" , height:"200px", borderRadius:"50%"}}  />
                <p style={{fontSize:"18px", fontFamily:"Fredoka"}}>Proteger l'environnement</p> 
              </div>
              <div>
                <img src={image2} alt="image" style={{width:"200px" , height:"200px", borderRadius:"50%"}}  />
                <p style={{fontSize:"18px", fontFamily:"Fredoka"}}>Eduquer les futurs générations</p> 
              </div> 
              <div>
                <img src={image3} alt="image" style={{width:"200px" , height:"200px", borderRadius:"50%"}}  />
                <p style={{fontSize:"18px",fontFamily:"Fredoka"}}>Exploitation des déchets sans pertes</p> 
              </div> 
          </div>     
      </div>
    </Segment> 
  )
}
