'use client';

import React from 'react';
import { HomeContainer } from '@/components/commons/dataDisplay/HomeContainer';
import { Home2Profile } from '@/components/domains/home/Home2Profile';

export const ListPage: React.FC = () => (
  <HomeContainer>
    <Home2Profile />
  </HomeContainer>
);
