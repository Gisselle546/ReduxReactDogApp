import axios from '../axiosbase';

export const FETCHPUPPIES ='FETCHPUPPIES';
export const FETCHPUPPY   ='FETCHPUPPY';

const url ='/api/puppy';

export function fetchpuppies(){

      const request=axios.get(url);

      return{
        type:FETCHPUPPIES,
        payload:request
      };
}

export function fetchpuppy(id){
    const request = axios.get(`${url}/${id}`);

    return{
        type:FETCHPUPPY,
        payload:request
    };

}
