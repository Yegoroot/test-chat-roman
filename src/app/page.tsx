'use client'

import React from 'react';
import { Button } from 'antd';
import { useBears } from '@/hooks/useBears';

const Home = () => {
  const increasePopulation = useBears((state) => state.increasePopulation)
  const bears = useBears((state) => state.bears)
  return <div className="App">
      <h1>{bears} around here...</h1>
      <Button type="primary" onClick={increasePopulation}>Button</Button>
  </div>
};

export default Home;