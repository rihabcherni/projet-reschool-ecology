import React from 'react'
import InterHeader from './components/InterHeader';
import Interfooter from './components/InterFooter';
import InterMain from './components/InterMain';
import Header from './components/Header';

export default function InterfaceInternaute() {
  return (
    <>
      <Header/>
      <InterHeader/> 
      <InterMain/>
      <Interfooter/>
    </> 
  )
}
