import React, { useState, useEffect } from 'react';
import Header from './Components/Header/index';
import './App.css'

import Accessories from './assets/images/Desktop-Accessories.jpg';
import ModelS from './assets/images/Desktop-ModelS.jpeg';
import Model3 from './assets/images/Desktop-Model3.jpeg';
import ModelX from './assets/images/Desktop-ModelY.jpeg';
import SolarPanels from './assets/images/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/images/Desktop-SolarRoof.jpeg'
import Item from './Components/Item';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>Tesla Ui Clone</h1>
      <div className=' app_itemsContainer'>

      <Item
      title='Preço mais baixo do mundo'
      desc='Dinheiro economizado'
      descLink=''
      backgroundImg={SolarPanels}
      leftBtnTxt='OrderNOW!'
      leftBtnLink=''
      rightBtnTxt='Aprenda mais'
      rightBtnLink = ''
      twoButtons='true'
      first

      />

<Item
      title='ModelS'
      desc='$70,000'
      descLink=''
      backgroundImg={ModelS}
      leftBtnTxt='OrderNOW!'
      leftBtnLink=''
      rightBtnTxt='Aprenda mais'
      rightBtnLink = ''
      twoButtons='true'
      

      />

<Item
      title='Model3'
      desc='$85,000'
      descLink=''
      backgroundImg={Model3}
      leftBtnTxt='OrderNOW!'
      leftBtnLink=''
      rightBtnTxt='Aprenda mais'
      rightBtnLink = ''
      twoButtons='true'
      

      />

<Item
      title='ModelX'
      desc='$100,000'
      descLink=''
      backgroundImg={ModelX}
      leftBtnTxt='OrderNOW!'
      leftBtnLink=''
      rightBtnTxt='Aprenda mais'
      rightBtnLink = ''
      twoButtons='true'
      

      />

<Item
      title='Preço mais baixo do mundo'
      desc='Dinheiro economizado'
      descLink=''
      backgroundImg={Accessories}
      leftBtnTxt='OrderNOW!'
      leftBtnLink=''
      rightBtnTxt='Aprenda mais'
      rightBtnLink = ''
      twoButtons='false'
      

      />



      </div>
    </div>
  );
}

export default App;
