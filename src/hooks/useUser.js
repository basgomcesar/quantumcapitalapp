import { useState, useEffect } from 'react';
import { fetchCurrentUser } from '@/lib/services/userService';

const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            setLoading(true);
            try {
                const data = await fetchCurrentUser();
                setUser(data);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    return { user, loading, error };
}

export default useUser;