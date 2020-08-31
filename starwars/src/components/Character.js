// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    width: 10vmax;
    height: 100vmax;
    border-style: solid;
    margin: 1rem;
    padding: 1rem;
`;
const Ele = styled.div`
margin: 1rem;
padding: 1rem;
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
    const name = "  " + data.name + "  ";
    const gender = data.gender;
    const status = data.status;
    const species = data.species;

    return (
        <div>
            {data.map((r) => <Card> <Ele>{r.name} </Ele>  <Ele>{r.gender}</Ele> </Card>)}
            {data.map((r) => <Card> {r.status} </Card>)} <br></br>
            {data.map((r) => <Card> <img src={r.image}></img> </Card>)} <br></br>
            {data.map((r) => <Card> {r.species} </Card>)} <br></br>
        </div>
    );
}
export default Character;