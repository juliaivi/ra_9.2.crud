import { useState, useEffect } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}${opts}`);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, opts]);

    return [data, isLoading, error];
}
