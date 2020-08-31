// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    width: 90vmax;
    height: 70vmax;
    border-style: solid;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column; 
    align: center;

`;
const Ele = styled.div`
display: flex; 
flex-direction: column; 
`;
const Img = styled.img`

object-fit: cover;
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
    const [showText, setShowText] = useState(false);
    return (
        <div>
            {data.map((r) =>
                <Card>
                    <button onClick={() => setShowText(!showText)}>Toggle Text</button>
                    {showText && <div>
                        <Ele>{r.name} </Ele>
                        <br></br>
                        <Ele>{r.gender}</Ele>
                        <br></br>
                        <Ele> {r.status} </Ele>
                        <br></br>
                        <Ele> {r.species} </Ele>
                        <br></br>
                        <Ele> <Img src={r.image}></Img> </Ele>
                    </div>}
                </Card>
            )
            }
        </div >

    );
}
export default Character;