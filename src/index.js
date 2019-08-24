import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Categoria from './views/Categoria';
import Produto from './views/Produto'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={props => <Categoria {...props} />} />
            <Route path="/produto" render={props => <Produto {...props} />} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
