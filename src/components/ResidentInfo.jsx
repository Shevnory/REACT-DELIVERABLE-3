import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';



const residentInfo = ( {url}, {dimension} ) => {
    

    const  [ rickAndMorty, setRickAndMorty ] = useState ({});

    useEffect (() => {
        axios.get(url)
            .then(res => setRickAndMorty(res.data))
    }, [])

    console.log(rickAndMorty);

    

    return (
        <div className="card">
            <div className="card-image">
                <hr style={{background: rickAndMorty?.status === "Alive" ? "#00ff55" : "red" }}/>
                
                <img src={rickAndMorty?.image} alt=""  />
            </div>
            
            <div className="card-info">
                <h4> {rickAndMorty?.name} </h4>
                {/*<h4> {rickAndMorty?.status} {/* Alive |  Dead  | unknown */} {/*</h4>*/}
                <p>{rickAndMorty?.status} - {rickAndMorty?.species} </p>
                <p className='text-description' >Origin:</p>
                <p> {rickAndMorty.origin?.name} </p>
                <p className='text-description' >Appearance in episodes</p>
                <p>{rickAndMorty.episode?.length} </p>
            </div>
        </div>
    );
};

export default residentInfo;