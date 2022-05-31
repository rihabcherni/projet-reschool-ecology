import React from 'react'
import {  Segment } from 'semantic-ui-react'
import ProduitPoubelle from './ProduitPoubelle'


export default function Produits() {

  return (
    <Segment id='produits' style={{ padding: '10em 0em', height:"100vh" }} vertical>

        <p className='title-section' >Produits</p>

        <ProduitPoubelle />
           
    </Segment>  )

}