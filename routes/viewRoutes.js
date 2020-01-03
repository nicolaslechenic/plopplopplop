const express = require('express');
const {
  alerts,
  getIndex,
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  getSignupForm,
  getMyTours,
  updateUserData,
  getApiDoc,
  getPasswordReset,
  getPasswordForgot
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');

const router = express.Router();

router.use(alerts);

router.get('/', isLoggedIn, getIndex);

router.get('/tours', isLoggedIn, getOverview);

router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/profile', protect, getAccount);
router.get('/signup', isLoggedIn, getSignupForm);

router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data', protect, updateUserData);

router.get('/api-doc', getApiDoc);

// password forgot
router.get('/forgot', getPasswordForgot);

// password reset route
router.get('/reset', getPasswordReset);
module.exports = router;
