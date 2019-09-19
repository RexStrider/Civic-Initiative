export const getArticles = async (query, pageNum) => {
    const url = `/api/news/${pageNum}`
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( { query, pageSize: 50 } )
    });
    const data = await response.json();
    return data;
}