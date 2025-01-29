import { useEffect, useState } from "react";

type Data<T> = null | T;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ErrorType>(null)

    useEffect(() => {
        let controller = new AbortController()

        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch(url, controller)

                if (!response.ok) throw new Error("Network response was not ok")

                const json: T = await response.json()

                setData(json)
                setError(null)
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

        return () => controller.abort()
    }, [url])

    return { data, loading, error }
}
