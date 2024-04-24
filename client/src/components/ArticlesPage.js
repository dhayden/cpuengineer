import React, { useEffect, useState } from 'react';

function ArticlesPage() {
    const [article, setArticle] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/generate-article')  // Adjust the URL if your Flask app is on a different port
            .then(response => response.json())
            .then(data => setArticle(data.article))
            .catch(error => console.error('Error fetching article:', error));
    }, []);  // This effect runs only once after the initial render

    return (
        <div>
            <h1>Programming Article</h1>
            {/* Here we use dangerouslySetInnerHTML to render the HTML content */}
            <div dangerouslySetInnerHTML={{ __html: article }} />
        </div>
    );
}

export default ArticlesPage;
