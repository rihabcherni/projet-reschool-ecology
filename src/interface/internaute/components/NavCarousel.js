import React from 'react'
import Carousel from 'react-material-ui-carousel'
import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png" 
import img3 from "../assets/images/3.png" 

    function Item(props){
        return ( <img src={props.item.image} style={{height:"102%", width:"100%"}}/>  )
    }
    export default  function NavCarousel(props)  {
        var items = [ { image:img1}, { image:img2 }, { image:img3 }]
        return (
            <Carousel height="96vh">
                { items.map( (item, i) => <Item key={i} item={item} /> )  }
            </Carousel>
        )
    }
