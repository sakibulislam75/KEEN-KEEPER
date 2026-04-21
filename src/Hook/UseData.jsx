import { useEffect, useState } from 'react';

const UseData = () => {
    const [fData, setFdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/Data.json');
            const dt = await res.json();
            setTimeout(() => {
                setFdata(dt);
                setLoading(false);
            }, 1000);
        };
        fetchData();
    }, []);

    return { fData, loading };
};

export default UseData;