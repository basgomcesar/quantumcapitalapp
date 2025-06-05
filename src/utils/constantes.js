const pathNames = {
    home: 'Home',
    logs: 'Bitacora',
    claim: 'Reclamos',
    loans: 'Creditos',
}

export const getPathName = (path) => {
    return pathNames[path] || 'Home';
};