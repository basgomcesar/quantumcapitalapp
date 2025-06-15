import { useState, useEffect } from 'react';
import { fetchLoans } from '@/lib/services/loansService';

const useLoans = () => {
    const [creditos, setCreditos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCreditos = async () => {
            setLoading(true);
            try {
                const data = await fetchLoans();
                setCreditos(data);
                setError(null);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadCreditos();
    }, []);

    const addCredito = (nuevoCredito) => {
        setCreditos((prev) => [...prev, nuevoCredito]);
    };

    const updateCredito = (id, updatedFields) => {
        setCreditos((prev) =>
            prev.map((credito) =>
                credito.id === id ? { ...credito, ...updatedFields } : credito
            )
        );
    };

    const removeCredito = (id) => {
        setCreditos((prev) => prev.filter((credito) => credito.id !== id));
    };

    return {
        creditos,
        loading,
        error,
        addCredito,
        updateCredito,
        removeCredito,
    };
};

export default useLoans;