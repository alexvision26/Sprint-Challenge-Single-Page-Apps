import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const Locations = props => {

    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/location/').then(res => {
            console.log(res)
        })

    }, [])

    return (
        <div>
            <h2>Locations</h2>
        </div>
    );
}

export default Locations;