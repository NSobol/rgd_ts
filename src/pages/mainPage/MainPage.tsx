import React from 'react';
import { Header } from '../../components/headerBlock/header/Header';
import { MainContent } from '../../components/main/mainContent/MainContent';
import { FooterContainer } from '../../components/footerBlock/footerContainer/FooterContainer';

export const MainPage = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <FooterContainer />
    </div>
  );
};
