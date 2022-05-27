import React from 'react'
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Plastique from '../../Global/images/plastique.png'
import Papier from '../../Global/images/papier.png'
import Composte from '../../Global/images/composte.png'
import Canette from '../../Global/images/canette.png'
import 'react-circular-progressbar/dist/styles.css';
export default function CirculairePourcentage({image , color , percentage}) {
  return (

    
    <div>

        <CircularProgressbarWithChildren value={percentage}  strokeWidth={10} styles={buildStyles({
            backgroundColor: "red",
            pathColor:`${color}`,
            // trailColor: {color},
          })}>
          
            <img style={{ width: '60px', marginTop: -5 }} src={image} alt="img" />
            <br/>
            <div style={{ fontSize: 16, marginTop: -22,color:`#FEF1E6` }}>
                <strong>{percentage} %</strong> 
            </div>
        </CircularProgressbarWithChildren>
    </div>
)
}
