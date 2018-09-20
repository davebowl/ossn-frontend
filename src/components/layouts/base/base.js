import React from 'react';
import {Provider} from 'react-redux';

// improt local modules
import Navigation from './../../navigation/main-navigation';
import SecondaryNavigation from './../../navigation/small-navigation';
import FooterNavigation from './../../navigation/footer-navigation';
import store from './../../../store';

const Basic = ({children}) =>{
  return(

    <Provider store={store} >
      <center>
        <br /><br /><br /><br /><br /><br />
        <div> <SecondaryNavigation /> </div>
        <br />
        <div>
          <Navigation />
          <br /><br /><br /><br />
         </div>

          {children}

        <br /><br /><br /><br /><br /><br />
        <div> <FooterNavigation /> </div>
        <div> This is the copyrights </div>
      </center>
    </Provider>
  );
}

export default Basic;