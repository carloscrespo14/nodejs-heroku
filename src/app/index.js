'use strict'

import React , { Component }from 'react';
import { render } from 'react-dom';


class App extends Component {

    render(){
        return (
        <div className="app__Body">
            <header>
                .header
            </header>
            <main>
                .main
            </main>
            <footer>
                .footer
            </footer>
        </div>    
        );
    }
}


render(<App/>, document.getElementById('app'))