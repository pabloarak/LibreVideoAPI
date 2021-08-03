const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

const moviesApi = (app) => {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async (req, res, next) => {
        try {
            const movies = await Promise.resolve(moviesMock);

            res.status(200).json({
                data: movies,
                message: 'Movies listed'
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieID', async (req, res, next) => {
        try {
            const movie = await Promise.resolve(moviesMock[0]);

            res.status(200).json({
                data: movie,
                message: 'Movies retrieve'
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async (req, res, next) => {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: createdMovieId,
                message: 'Movie created'
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:movieId', async (req, res, next) => {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: updatedMovieId,
                message: 'Movie updated'
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:movieId', async (req, res, next) => {
        try {
            const deletedMovieId = await Promise.resolve(moviesMock[0].id);

            res.status(200).json({
                data: deletedMovieId,
                message: 'Movie updated'
            });
        } catch (error) {
            next(error);
        }
    });
};

module.exports = moviesApi;