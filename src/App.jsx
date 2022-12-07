import React from 'react';
import AppRouter from './router';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
