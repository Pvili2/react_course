import { useEffect, useState, useCallback } from "react";

export function useFetch(fetchFn, inittialValue) {
    const [fetchedData, setFetchedData] = useState(inittialValue);
    const [errors, setErrors] = useState();
    useEffect(() => {
        async function FetchData() {
            try {
                const data = await fetchFn();
                setFetchedData(data);
            } catch (error) {
                setErrors(error);
            }
        }
        FetchData();
    }, [fetchFn])

    return {
        data: fetchedData,
        setFetchedData,
        errors,
        setErrors
    }
}