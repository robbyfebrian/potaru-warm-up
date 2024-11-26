export const fetcher = async <T>(url: string, options: RequestInit): Promise<T> => {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`failed to fetch: ${response.statusText}`);
    return await response.json();
}