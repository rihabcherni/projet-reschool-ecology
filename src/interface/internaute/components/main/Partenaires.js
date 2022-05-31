import React from 'react'
import { Button, Grid,Icon, Header, Image, Segment } from 'semantic-ui-react'
import images from '../../assets/images/greys.jpg'

export default function Partenaires() {
  return (
    <Segment id='partenaires' style={{ padding: '10em 0em', height:"100vh" }} vertical>
        <p className='title-section' > Partenaires  </p>
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
    </Segment>  )
}
