import { useEffect, useState } from 'react';
import api from '@/shared/api'; // Используем наш красивый импорт Axios!

export function NewsList() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Делаем запрос к публичному роуту Laravel
        api.get('/api/public-news')
            .then((response) => {
                setNews(response.data);
                console.log(setNews)
                setLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка при получении новостей:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка публичных новостей...</p>;

    return (
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <h3>Публичные новости (Сущность из Laravel)</h3>
            {news.length === 0 ? (
                <p>Новостей пока нет.</p>
            ) : (
                <ul style={{ paddingLeft: '20px' }}>
                    {news.map((item) => (
                        <li key={item.id} style={{ marginBottom: '10px', color: '#333' }}>
                            <strong>{item.title}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
