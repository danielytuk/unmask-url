const axios = require('axios');

const unmask = async (website) => {
    try {
        const { data } = await axios(`https://script.google.com/macros/s/AKfycbzWY3tvDeNSww3WT20YSSg2fQbvLTSx3xGe9wIAE-rD-3CstUqSCA__V1jPuT5xK-3H6Q/exec?url=${website}`);
        return data;
    } catch (err) {
        return JSON.parse(`{"error": "${err.message}"}`)
    }
};

module.exports = unmask