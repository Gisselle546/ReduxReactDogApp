import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchpuppy} from '../actions';
import {Link} from 'react-router-dom';
import { Segment,Header,Image} from 'semantic-ui-react';
import '../Styles/ShowDog.css';


class ShowDog extends Component{


  componentDidMount(){
    const{id} = this.props.match.params;
    this.props.fetchpuppy(id);
  }



  render() {
      console.log(this.props.pup)

      if(!this.props.pup){
        return <div>Loading!!!!</div>
      }


    return (
          <div className="ShowDog">
            <Segment size={'massive'}>
            <Link to={'/api/puppy'}>
              <Header as='h4'  textAlign='right'>
                Go back
                </Header>
              </Link>
              <Image src={this.props.pup.image} size='Large'  />
              <Header as='h1'><strong>Name: </strong>{this.props.pup.name}</Header>
              <Header as='h3'><strong>Breed: </strong>{this.props.pup.breed}</Header>
              <Header as='h6'><strong>Description: </strong>{this.props.pup.description}</Header>



            </Segment>
        </div>
    );
  }

}

function mapStateToProps({puppy},ownProps){
    return{pup:puppy[ownProps.match.params.id]}



}



export default connect(mapStateToProps,{fetchpuppy})(ShowDog)
