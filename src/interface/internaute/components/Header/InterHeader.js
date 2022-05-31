import React, { Component } from 'react'
import { Container, Menu, Button, Visibility, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from 'styled-components'
import '../../assets/css/Interheader.css'
import Carousel from 'react-material-ui-carousel'
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg" 
import img3 from "../../assets/images/img3.jpg" 
import img4 from "../../assets/images/img4.png" 
import Logo from "../../../../Global/images/reschool-blanc.png" 

function Item(props){
    return ( <img src={props.item.image} style={{height:"102%", width:"100%"}}/>  )
}
export default class InterHeader extends Component {
    
    state = {}
    state = { activeItem: 'accueil' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    
    render() {
        var items = [ { image:img1}, { image:img2 }, { image:img3 }, { image:img4 }]
        const { children } = this.props
        const { fixed } = this.state
        const { activeItem } = this.state
        return (     
            <>        
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>  
                        <Menu className="ui top fixed menu horizontale" inverted={!fixed} style={{ padding: '1em 1em 1em 3%' }} pointing={!fixed} secondary={!fixed} size='large' borderless>                        
                            <div style={{textAlign:"center"}}>  
                                <img src={Logo} alt="log" style={{width:"80px" , borderRadius:"50%"}} /> 
                                <h3 style={{marginTop:"-2px", fontFamily:"Fredoka",textAlign:"center", color:"white", textShadow:"1px 1px 2px green, 0 0 25px #98FB98	, 0 0 5px #006400"}}>
                                    RE:SCHOOL Ecology 
                                </h3> 
                                </div>
                            <Container className="menu-header"> 
                                <Menu.Item as='a' href='#accueil' name='accueil'  active={activeItem === 'accueil'} onClick={this.handleItemClick}>  Accueil </Menu.Item>  
                                <Menu.Item as='a' href='#a-propos' name='a-propos'  active={activeItem === 'a-propos'} onClick={this.handleItemClick}>A Propos</Menu.Item>
                                <Menu.Item as='a' href='#produits' name='produits'  active={activeItem === 'produits'} onClick={this.handleItemClick}>Produits</Menu.Item>
                                <Menu.Item as='a' href='#statistiques' name='statistiques'  active={activeItem === 'statistiques'} onClick={this.handleItemClick}> Statistiques </Menu.Item>

                                <Menu.Item as='a' href='#mission' name='mission'  active={activeItem === 'mission'} onClick={this.handleItemClick}>Mission</Menu.Item>
                                <Menu.Item as='a' href='#contact' name='contact'  active={activeItem === 'contact'} onClick={this.handleItemClick}>Contact</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as={Link} to="/responsable-etablissement/login"  color='green'>
                                    Se connecter
                                    </Button>
                                </Menu.Item>
                            </Container>  
                        </Menu>
                    <Segment id="accueil" inverted textAlign='center' style={{ padding: '0em 0em' }} vertical>
                        <Carousel height="98vh">
                            { items.map( (item, i) => <Item key={i} item={item} /> )  }
                        </Carousel>
                    </Segment>
                </Visibility>
            </>
        ) 
    }
}