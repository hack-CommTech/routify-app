'use client';

import React from 'react';
import { HomeContainer } from '@/components/commons/dataDisplay/HomeContainer';
import { Home1Schedule } from '@/components/domains/schedule/Home1Schedule';

export const SchedulePage: React.FC = () => (
  <HomeContainer>
    <Home1Schedule />
  </HomeContainer>
);
