const express = require('express');
const router = express.Router();
const { 
    homeRouteGet, 
    homeRouteParam, 
    homeRoutePost,
    apiError, 
} = require('../controller/controller');

router.get('/', homeRouteGet);
router.get('/:id', homeRouteParam);
router.get('/:id/*', apiError);
router.post('/', homeRoutePost);

module.exports = router;