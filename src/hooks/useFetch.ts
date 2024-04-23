import { useState } from "react";

type FetchRequest = () => Promise<void>;

type IFetching = [
  fetching: () => Promise<void>,
  isLoading: boolean,
  error: string,
]

export function useFetching(fetchRequest: FetchRequest): IFetching {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetching() {
    try {
      setIsLoading(true);
      await fetchRequest()
    } catch(err: any) {
      setError(err)
    } finally {
      setIsLoading(false);
    }  
  }

  return [fetching, isLoading, error]
}