import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Episodes = props => {

    const [episode, setEpisode] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/episode/').then(res => {
            // console.log(res.data.results)
            setEpisode(res.data.results)
        })

    }, []);

    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/location/').then(res => {
            console.log(res.data.results)
            setLocations(res.data.results)
        })

    }, []);

    return (
        <div className='episode-info'>
            <div className='episode-box'>
                {episode.map(e => {
                    return (
                        <div>
                        <h3>Title: {e.name} ({e.episode})</h3>
                        <h5>Aired: {e.air_date}</h5>
                        </div>
                    );
                })}
            </div>
            <div className='location-box'>
                {locations.map(l => {
                    return (
                        <div>
                            <h4>Location: {l.name}</h4>
                            <h5>Type: {l.type}</h5>
                            <h5>Dimension: {l.dimension}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Episodes;