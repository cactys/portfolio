'use client';

import { useRef } from 'react';

import { Promo } from '../Promo/Promo'
import { Navigation } from '../Navigation/Navigation'
import { AboutProject } from '../AboutProject/AboutProject'
import { Techs } from '../Techs/Techs'
import { AboutAuthor } from '../AboutAuthor/AboutAuthor'

const App = () => {
  const scrollRef = useRef<HTMLOListElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  console.log(scrollRef);

  const onScroll = () => {
    const scrollY = scrollRef.current?.getBoundingClientRect().y || 0;
    const aboutOffSetY = Math.abs(
      (aboutRef.current?.getBoundingClientRect().y || 0) - scrollY
    );

    if (aboutOffSetY) {}
  }

  return (
    <div>
      <Promo />
      <Navigation scrollRef={scrollRef} onScroll={onScroll} />
      <AboutProject aboutRef={aboutRef} />
      <Techs />
      <AboutAuthor />
    </div>
  )
}

export default App

