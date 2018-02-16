import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import { Segment,Header,Grid } from 'semantic-ui-react';
import {fetchpuppies} from '../actions';
import ItemDog from '../Components/itemdog';

class ListDog extends Component {

componentDidMount(){
  this.props.fetchpuppies();
}



  render() {
    if(!this.props.puppies){
      <div>Loading!!!</div>;
    }

    console.log(this.props.puppies)

const Dog =_.map(this.props.puppies,Dog=>{
      return (
        <ItemDog key={Dog._id} Dog={Dog}/>
   )
 })


    return (
        <div className ="ListDog" >
      <Segment size={'massive'}  textAlign='center'>
          <Header as='h3'>Find your Furever best friend!!</Header>
          <Grid>
            <Grid.Row columns={3}>
            {Dog}

            </Grid.Row>
          </Grid>
      </Segment>

      </div>

    );
  }
}

function mapStateToProps({puppy}){
  return {puppies:puppy}
}

export default connect(mapStateToProps,{fetchpuppies})(ListDog)
