import _ from 'lodash';
import {FETCHPUPPIES,FETCHPUPPY} from '../actions/index';


export default function(state={},action){
  switch(action.type){
    case FETCHPUPPIES:
      return _.mapKeys(action.payload.data,'_id');
    case FETCHPUPPY:
      return { ...state, [action.payload.data._id]: action.payload.data}


      default:
       return state
     }

}
