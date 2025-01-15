import React, { useEffect, useState } from 'react';
import { fetchData } from './api/api'; // путь к вашему файлу api.ts

const App: React.FC = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Данные из MongoDB</h1>
            <ul>
                {/* {data.map((item) => (
                    <li key={item._id}>{item.name} - {item.age} - {item.city}</li>
                ))} */}
            </ul>
        </div>
    );
};

export default App;