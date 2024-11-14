const colors = require('./colors');

module.exports = {
    theme: {
        extend: {
            colors,
            // Add more theme customizations here
            borderRadius: {
                'custom': '0.625rem',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            fontSize: {
                'xxs': '0.625rem',
            },
            boxShadow: {
                'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
        },
    },
};