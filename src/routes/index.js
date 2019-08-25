import React from 'react';
import Categoria from '../views/Categoria';
import Produto from '../views/Produto';
import Subcategoria from '../views/Subcategoria'

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = (props)=>(
  <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => <Categoria {...props} />} />
            <Route path="/produto" render={props => <Produto {...props} />} />
            <Route path="/subcategoria" render={props => <Subcategoria {...props} />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;