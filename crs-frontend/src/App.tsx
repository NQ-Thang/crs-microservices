import { useEffect, useState } from 'react';
import { getCourses } from './api/courseApi';
import type { Course } from './types/course';

function App() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('APP USE EFFECT CHAY');

        getCourses()
            .then((res) => {
                console.log('API RESPONSE:', res.data);
                setCourses(res.data);
            })
            .catch((err) => {
                console.error('API ERROR:', err);
                setError(
                    'Khong ket noi duoc toi he thong. Kiem tra lai api-gateway da chay chua.'
                );
            });
    }, []);

    return (
        <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
            <h1>Kiem tra ket noi CRS qua Gateway</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <pre>{JSON.stringify(courses, null, 2)}</pre>
        </div>
    );
}

export default App;