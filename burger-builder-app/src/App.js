import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="container">
     <Layout>
       <BurgerBuilder>Test</BurgerBuilder>
     </Layout>
    </div>
  );
}

export default App;
