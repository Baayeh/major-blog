import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);

    const [isLoading, setisLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect( () => {
        const abortCont = new AbortController();

        //To simulate process of fetching from a real database
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok) {
                        throw Error('could not fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setisLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setisLoading(false);
                    }
                });
        }, 1000);

        return () => abortCont.abort();
    }, [url] );

    return { data, isLoading, error }
}

export default useFetch;