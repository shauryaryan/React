// ApiPage.js
import React, { useState } from 'react';



const ApiPage = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/api/data');
        const result = await response.json();
        setData(result);
    };

    return (
        <div>
            <h1>My name is Shaurya Aryan</h1>
            <p>
                I’m a full stack developer. I sincerely thank you for giving me an
                opportunity to showcase my technical skills to you through this interview process.
            </p>
            <button onClick={fetchData}>Fetch Data</button>
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
};

export default ApiPage;
