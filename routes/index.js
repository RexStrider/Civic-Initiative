const express = require('express');
const controller = require('../controller');

const router = express.Router();


router.get('/civic_info/:address', controller.CivicInfo.getCivicInfo);

router.post('/news/:pageNum', controller.News.getNews);


module.exports = router;