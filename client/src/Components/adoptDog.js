import React from 'react';
import doggypreview from '../Containers/Data/Petrescuepreview.png';
import { Segment,Header,Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const AdoptDog=(props)=>(

  <div className='AdoptDog'>
        <Segment raised>
          <Header as='h4' textAlign="center"> Fill out the Form today!!</Header>
            <Image src={doggypreview} size='medium' centered />
                <Link to="http://members.petfinder.com/~MN186/DogForm.doc">
                       <Header size='small'>Get your form here</Header>

                      </Link>


                                                    </Segment>
                                              </div>

                                              )

  export default AdoptDog;
