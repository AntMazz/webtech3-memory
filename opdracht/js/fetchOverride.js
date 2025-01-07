const originalFetch = window.fetch;
window.fetch = function(url, options = {}) {
    const token = localStorage.getItem('jwt');
    if (token) {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };
    }
    return originalFetch(url, options).then(response => {
        if (response.status === 401) {
            alert('Session expired. Please log in again.');
            window.location.href = 'login.html';
        }
        return response;
    });
};
