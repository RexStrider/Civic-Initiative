require('dotenv').config();

const axios = require('axios');
const keys = require('../../config/keys');

exports.getNews = async (req, res) => {
    try {
        const pageNum = req.params.pageNum || 1;
        const query = req.body.query || '';
        const pageSize = req.body.pageSize || 20;

        if (query === '') {
            res.json({ message: 'query was not provided', body: null });
        }

        const URL = `https://newsapi.org/v2/everything?` +
                    `q=(${query})&` +
                    `page=${pageNum}&` +
                    `pageSize=${pageSize}&` +
                    `apiKey=${keys.news_api_key}`;
        const response = await axios.get(URL);

        res.json({ message: "successfully called news api", body: response.data });
    }
    catch (error) {
        res.json({ message: error, body: null });
    }
}