import React from 'react'
import Container from '@mui/material/Container'
import Contact from './main/Contact';
import Produits from './main/Produits';
import Mission from './main/Mission';
import Apropos from './main/Apropos';
import Statistique from './main/Statistique';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

export default function InterMain() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
      return (
        <Container>
            <ScrollContainer>
              <ScrollPage page={0}>
                <Apropos/>
              </ScrollPage>
            </ScrollContainer>
                <Produits/>
                <Statistique/>
                <Mission/>
                <Contact/>       
        </Container>
    )
  }
