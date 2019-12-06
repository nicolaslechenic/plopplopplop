const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
    // 1. Get tours data from collection
    const tours = await Tour.find();

    // 2. Build template
    // 3. Render template using tour data from 1.
    res.status(200).render('overview', {
        title: 'All Tours',
        tours
    });
});

exports.getTour = catchAsync(async (req, res, next) => {
    // 1. Get data for the requested tour (including reviews and guides)
    const tour = await Tour.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
    });

    // 2. Build template
    // 3. Render template using datas from 1.
    res.status(200).render('tour', {
        title: `${tour.name} Tour`,
        tour
    });
});

exports.getLoginForm = (req, res) => {
    res.status(200).render('login', {
        title: 'Log into your account'
    });
};

exports.getSignupForm = (req, res) => {
    res.status(200).render('signup', {
        title: 'Sign up for an account'
    });
};