// Write your Character component here
import React, { useState, useEffect } from 'react';
import App from '../App.js';
import axios from 'axios';


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
    return;
}
export default Character;