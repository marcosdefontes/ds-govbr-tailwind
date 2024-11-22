const colors = require('./theme/colors');
const screens = require('./theme/screens');
module.exports = {
    theme: {
        extend: {
            colors: { ...colors },
        },
        screens: {
            ...screens
        }
    },
};