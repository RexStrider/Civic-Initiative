export const getArticles = async (query, pageNum) => {
    const url = `/api/news/${pageNum}`
    
    const response = fetch(url, {
            method: "POST",
            body:{ query },
            headers:{ 'Content-Type': 'application/json' }
        });
    const data = response.json();
    return data;
}