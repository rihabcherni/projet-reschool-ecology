import React from 'react'
import Carousel from 'react-material-ui-carousel'
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg" 
import img3 from "../assets/images/img3.jpg" 
import img4 from "../assets/images/img4.png" 

    function Item(props){
        return ( <img src={props.item.image} style={{height:"102%", width:"100%"}}/>  )
    }
    export default  function NavCarousel(props)  {
        var items = [ { image:img1}, { image:img2 }, { image:img3 }, { image:img4 }]
        return (
            <Carousel height="96vh">
                { items.map( (item, i) => <Item key={i} item={item} /> )  }
            </Carousel>
        )
    }
