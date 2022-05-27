import React, { useState } from 'react'
import { Container, Dropdown, Menu, Button, Segment } from 'semantic-ui-react'
import { BrowserRouter , Link } from "react-router-dom"
import '../../assets/css/Interheader.css'
import Carousel from 'react-material-ui-carousel'
import img1 from "../../assets/images/img1.jpg"
import img2 from "../../assets/images/img2.jpg" 
import img3 from "../../assets/images/img3.jpg" 
import img4 from "../../assets/images/img4.png" 

    function Item(props){
        return ( <img src={props.item.image} style={{height:"102%", width:"100%"}}/>  )
    }
export default function InterHeader() {
    const [showFixedMenu, setSowFixedMenu] = useState(false)
    var items = [ { image:img1}, { image:img2 }, { image:img3 }, { image:img4 }]

        return (      
              
                <Segment id="accueil" inverted textAlign='center' style={{ minHeight: 100, padding: '0em 0em' }} vertical>
                    <Menu fixed="top" id='#top'  style={{ padding: '1em 1em' }} pointing={!showFixedMenu} secondary={!showFixedMenu} size='large' borderless>
                        <Container> 
                            <Menu.Item id='headertitle' as='a' style={{ color:"red" ,fontSize: '1.33em' }} position='left' header>
                                <i className="fas fa-recycle"></i>
                                RE:SCHOOL Ecology
                            </Menu.Item>
                            <Menu.Item as='a' href='#accueil' active>
                                Accueil
                            </Menu.Item>
                            <Dropdown item simple text='Produits' href='#produits'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Header>Header Item</Dropdown.Header>
                                    <Dropdown.Item>
                                        <i className='dropdown icon' />
                                        <span className='text'>Submenu</span>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item as='a' href='#mission'>Mission</Menu.Item>
                            <Menu.Item as='a' href='#partenaires'>Partenaires</Menu.Item>
                            <Menu.Item as='a' href='#a-propos'>A Propos</Menu.Item>
                            <Menu.Item as='a' href='#contact'>Contact</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as={Link} to="/responsable-etablissement/login" inverted={!showFixedMenu} color='green'>
                                Se connecter
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                    <Carousel height="96vh">
                        { items.map( (item, i) => <Item key={i} item={item} /> )  }
                    </Carousel>                
            </Segment>
        ) 
}
