import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

//import './assets/css/normalize.css'
import './assets/css/style.css'
import styles from './assets/css/style.module.css'

import Header from './pages2/Header';
import HiddenSVGs from './pages2/HiddenSVGs';
import Levels from './pages2/Levels';
import MallNav from './pages2/MallNav';
import SearchButton from './pages2/SearchButton';
import SideBarNav from './pages2/SideBarNav';
import Surroundings from './pages2/Surroundings';
import Content from './pages2/Content';
import TheWizard from './pages2/route-pages/TheWizard';
import AppleHeart from './pages2/route-pages/AppleHeart';
import Breathe from './pages2/route-pages/Breathe';
import CrazyBanana from './pages2/route-pages/CrazyBanana';
import TheEggplanthead from './pages2/route-pages/TheEggplanthead';
import SmoothiesSoul from './pages2/route-pages/SmoothiesSoul';
import SeedofLife from './pages2/route-pages/SeedofLife';
import RawDelight from './pages2/route-pages/RawDelight';
import GrilledChipotle from './pages2/route-pages/GrilledChipotle';
import OolongHouse from './pages2/route-pages/OolongHouse';
import ColdSoupKitchen from './pages2/route-pages/ColdSoupKitchen';
import Superfood from './pages2/route-pages/Superfood';
import Cognitio from './pages2/route-pages/Cognitio';
import DocuDome from './pages2/route-pages/DocuDome';
import Dressmenot from './pages2/route-pages/Dressmenot';
import EnlightendPath from './pages2/route-pages/EnlightendPath';
import FeelTheGrass from './pages2/route-pages/FeelTheGrass';
import FoldingLife from './pages2/route-pages/FoldingLife';
import HotTubFestival from './pages2/route-pages/HotTubFestival';
import LittleArtist from './pages2/route-pages/LittleArtist';
import Love2Cook from './pages2/route-pages/Love2Cook';
import NoPrincess from './pages2/route-pages/NoPrincess';
import PermacultureHub from './pages2/route-pages/PermacultureHub';
import RocketshipTech from './pages2/route-pages/RocketshipTech';
import Space16 from './pages2/route-pages/Space16';
import StarGazer from './pages2/route-pages/StarGazer';
import ToolExchange from './pages2/route-pages/ToolExchange';
import WhatMakesUsWalk from './pages2/route-pages/WhatMakesUsWalk';
// import WhichBug from './pages2/route-pages/WhichBug';
import YourLastShirt from './pages2/route-pages/YourLastShirt';


class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {

    return (
      <div className="App">
        <HiddenSVGs />
        <div className='container'>
          <div className='main'>
            {/* <Header /> */}  
            <div className='mall'>
              {/* <Surroundings /> */}
              <Levels />
            </div>
            {/* <SearchButton /> */}
            <MallNav />
            <div className='content'>
            <div className='content__item'>
            <Routes>
            <Route path='/' element={ <Content /> }></Route>
                <Route path='/The-Wizard' element={ <TheWizard /> }></Route>
                <Route path='/Apple-Heart' element={ <AppleHeart /> }></Route>
                <Route path='/Breathe' element={ <Breathe /> }  ></Route>
                <Route path='/Crazy-Banana' element={ <CrazyBanana /> }></Route>
                <Route path='/The-Eggplanthead' element={ <TheEggplanthead /> }></Route>
                <Route path='/Smoothies-Soul' element={ <SmoothiesSoul /> }></Route>
                <Route path='/Seed-of-Life' element={ <SeedofLife /> }></Route>
                <Route path='/Raw-Delight' element={ <RawDelight /> }></Route>
                <Route path='/Grilled-Chipotle' element={ <GrilledChipotle /> }></Route>
                <Route path='/Oolong-House' element={ <OolongHouse /> }></Route>
                <Route path='/Cold-Soup-Kitchen' element={ <ColdSoupKitchen /> }></Route>
                <Route path='/Superfood' element={ <Superfood /> }></Route>
                <Route path='/Love-2-Cook' element={ <Love2Cook /> }></Route>
                <Route path='/Permaculture-Hub' element={ <PermacultureHub /> }></Route>
                <Route path='/Folding-Life' element={ <FoldingLife /> }></Route>
                <Route path='/Rocketship-Tech' element={ <RocketshipTech /> }></Route>
                {/* <Route path='/Which-Bug' element={ <WhichBug /> }></Route> */}
                <Route path='/Enlightend-Path' element={ <EnlightendPath /> }></Route>
                <Route path='/Docu-Dome' element={ <DocuDome /> }></Route>
                <Route path='/Little-Artist' element={ <LittleArtist /> }></Route>
                <Route path='/Your-Last-Shirt' element={ <YourLastShirt /> }></Route>
                <Route path='/Tool-Exchange' element={ <ToolExchange /> }></Route>
                <Route path='/Dress-me-not' element={ <Dressmenot /> }></Route>
                <Route path='/Cognitio' element={ <Cognitio /> }></Route>
                <Route path='/What-makes-us-walk' element={ <WhatMakesUsWalk /> }></Route>
                <Route path='/No-Princess' element={ <NoPrincess /> }></Route>
                <Route path='/Star-Gazer' element={ <StarGazer /> }></Route>
                <Route path='/Space-16' element={ <Space16 /> }></Route>
                <Route path='/Hot-Tub-Festival' element={ <HotTubFestival /> }></Route>
                <Route path='/Feel-the-Grass' element={ <FeelTheGrass /> }></Route>
            </Routes>
            
            </div>
            <Content />
            </div>
          </div>
          {/* <SideBarNav /> */}
        </div>
      </div>
    );

  }
  
}

export default Map;