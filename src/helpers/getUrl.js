export const getUrl = (value, type = '') => {
    if (value.includes('http') || value.includes('https')) {
        return value;
    }

    if (type === 'company') {
        if (value.charAt(0) === '@') {
            value = value.slice(1);
            return `https://github.com/${ value }`;
        }

        return '';
    }

    return `http://${ value }`;
};