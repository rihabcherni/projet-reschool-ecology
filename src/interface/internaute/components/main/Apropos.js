import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import img5 from "../../../../Global/images/img5.png" 
import AproposImage from "../../../../Global/images/apropos.png" 

export default function Apropos() {
  return (
    <Segment  id='a-propos' style={{ padding: '10em 0em', height:"90vh" }} vertical>
      <p className='title-section apropos-title'> A Propos  </p>
      <div style={{display:"grid", gridTemplateColumns:'1fr 60%' , columnGap:'5%'}}>
          <p style={{ fontSize: '1.5em', padding:"10% 0", fontFamily:"fredoka" }}> 
          <b><i>RE:SCHOOL ECOLOGY</i></b> est un projet sous  <b><i>RE:SCHOOL EDUCATION</i></b> qui est une société qui vise à se servir des nouvelles technologies non seulement au niveau 
              professionnel mais aussi au niveau éducatif et de changer les mentalités et les habitudes des futurs générations,
              et de rendre notre pays plus vert, plus propre et précurseur dans le domaine de l'ÉCO-TECH en Afrique et pourquoi pas dans le monde. 
          </p>
          <img src={AproposImage} alt='map tunisie recyclage' style={{width:"100%", height:"400px"}}/>
      </div>
 
    </Segment>
  )
}
