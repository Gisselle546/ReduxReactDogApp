import React from 'react';
import { Segment,Header,Card,Image,Grid } from 'semantic-ui-react';
import {Link } from 'react-router-dom';
import '../Styles/image.css'

const ItemDog=({Dog})=>(

  <div className='ItemDog'>
    <Card.Group>

      <Card as={Link} to={`/api/puppy/${Dog._id}`}>

          <Card.Content>
              <Image  src={Dog.image} />
            <Card.Header>
              {Dog.name}
            </Card.Header>
            <Card.Description>
                {Dog.breed}
            </Card.Description>

          </Card.Content>

        </Card>
      </Card.Group>


</div>

)

export default ItemDog;
