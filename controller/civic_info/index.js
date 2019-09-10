require('dotenv').config();

const axios = require('axios');
const keys = require('../../config/keys');

exports.getCivicInfo = async (req, res) => {
    try {
        const address = req.params.address || ''

        if (address === '') {
            res.json({ message: 'no address given', body: null });
        }

        const URL = `https://www.googleapis.com/civicinfo/v2/representatives?key=${keys.google_civic_information_key}&address=${address}`;
        const response = await axios.get(URL);

        res.json({ message: "civic information api was successfully called", body: response.data });
    }
    catch(error) {
        res.json({ message: error, body: null });
    }
}