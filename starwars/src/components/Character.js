// Write your Character component here
import React, { useState, useEffect } from 'react';
import App from '../App.js';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    width: 10vmax;
    height: 10vmax;
`;
const Name = styled.p`
border-style: solid;
margin : 10rem;
`;



const Character = () => {
    const [data, setData] = useState(["Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...", "Loading...",])
    const getData = () => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(res => setData(res.data.results))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(data);
    const name = data.map(r => r.name);
    const gender = data.map(r => r.gender);
    const image = data.map(r => r.image);
    const status = data.map(r => r.status);
    const species = data.map(r => r.species);

    return (
        <Card>
            <Name> {name} </Name>
        </Card>
    );
}
export default Character;