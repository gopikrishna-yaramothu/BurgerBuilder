import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/checkout/Checkout';
import {Route, Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div>
     <Layout>
       <Switch>
       <Route path="/" exact component={BurgerBuilder} />
       <Route path="/checkout" component={Checkout} />
       <Route path='/orders' component={Orders} />
       </Switch>
     </Layout>
    </div>
  );
}

export default App;
