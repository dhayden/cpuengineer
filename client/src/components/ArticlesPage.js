import React, { useEffect, useState } from 'react';

function ArticlesPage() {
    const [article, setArticle] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/get-txt')
            .then(response => response.json())
            .then(data => setArticle(data.content))
            .catch(error => console.error('Error fetching article:', error));
    }, []);

    return (
        <div>
            <div className="article">
                {article}
            </div>
        </div>
    );
}

export default ArticlesPage;