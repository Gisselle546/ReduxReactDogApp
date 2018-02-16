import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Container} from 'semantic-ui-react'
import AdoptDog from './adoptDog';
import ListDog from '../Containers/Listofdogs';
import ShowDog from '../Containers/showdog';
import '../Styles/MainComponent.css';

class MainComponent extends Component{

  render() {
    return (
        <div className="MainComponent">
            <Container>
              <Switch>
                  <Route path ="/adopthere"  component={AdoptDog}/>
                  <Route exact path="/api/puppy" component={ListDog}/>
                  <Route path="/api/puppy/:id" component={ShowDog}/>
              </Switch>


            </Container>
        </div>

    );
  }


}

export default MainComponent;
