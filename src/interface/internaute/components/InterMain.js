import React from 'react'
import Container from '@mui/material/Container'
import { Image ,Segment, Grid, Header, Button, Icon} from 'semantic-ui-react'
import images from '../assets/images/greys.jpg'
import Contact from './main/Contact';

export default function InterMain() {

      return (
        <Container>
            {/* produits*/}
            <Segment  id='produits'  style={{ padding: '8em 0em' }} vertical>
                <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                    Nos Produits
                </Header>   
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <br/>
                        <p style={{ fontSize: '1.33em' }}> 
                            Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            ... L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.Un texte est une série orale ou écrite de mots perçus comme constituant un
                            ensemble cohérent, porteur de sens et utilisant les structures propres à 
                            une langue (conjugaisons, construction et association des phrases…).
                            L'étude formelle des textes s'appuie sur la linguistique, qui est 
                            l'approche scientifique du langage.
                        </p>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                            <Button size='huge' color='green'>
                                En savoir plus
                                <Icon name='right arrow' />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/* mission*/}
            <Segment id='mission' style={{ padding: '8em 0em' }} vertical>
                <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                    Notre Mission
                </Header>
                <p>
                RE:SCHOOL ECOLOGY a pour mission d’innover en proposant sa solution technologique adaptée au besoin du marché local 
                tunisien afin d’effectuer le tri, le recyclage des déchets d’une manière structurelle, professionnelle, 
                dynamique et technologique afin de travailler sur une dimension macro-économique et d’optimiser le temps d’exploitation 
                et de gestion des déchets poubelles.
                </p>
                <Grid  container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='left' width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column width={3}><Image src={images} size='large' circular /></Grid.Column>
                        <Grid.Column floated='right' width={3}><Image src={images} size='large' circular /></Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/*partenaires */}
            <Segment id='partenaires' style={{padding: '8em 0em' }} vertical>
                 <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                    Partenaires
                </Header>
                <br/><br/>
                <Grid  container stackable verticalAlign='middle'>
                    <Grid.Row>      
                        <Grid.Column width={7} textAlign='center' >
                            <p style={{ fontSize: '1.33em' , textAlign:'left' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
                            </p>
                            {/* <Header as='h3' style={{ fontSize: '2em' }} textAlign='left'>
                                Titre 4
                            </Header> */}
                            <p style={{ fontSize: '1.33em', textAlign:'left' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                            </p>
                            <Grid.Row>
                                <Grid.Column textAlign='center' style={{ padding: '3em 0em' }}> 
                                    <Button size='huge' color='green'>
                                        En savoir plus
                                        <Icon name='right arrow' />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={images} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/*  apropos*/}
            <Segment id='a-propos' style={{ padding: '8em 0em' }} vertical>
                        <Header as='h1' style={{ fontSize: '3em' }} textAlign='center'>
                            A Propos
                        </Header>
                        <br/><br/>
                        <p style={{ fontSize: '1.33em' }}> 
                            RE:SCHOOL EDUCATION est une société qui vise à se servir des nouvelles technologies non seulement au niveau 
                            professionnel mais aussi au niveau éducatif et de changer les mentalités et les habitudes des futurs générations,
                            et de rendre notre pays plus vert, plus propre et précurseur dans le domaine de l'ÉCO-TECH en Afrique et pourquoi pas dans le monde. 
                        </p>
            </Segment> 
            {/*contact */}  
             <Contact/>       
        </Container>
    )
  }
