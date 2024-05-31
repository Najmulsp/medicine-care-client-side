import { useEffect, useState } from 'react';




const PopularCamps = () => {
    const [camps, setCamps] = useState([]);
    console.log(camps)
    useEffect(()=>{
        fetch('camps.json')
        .then(res=> res.json())
        .then(data=>{
            setCamps(data)
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default PopularCamps;
