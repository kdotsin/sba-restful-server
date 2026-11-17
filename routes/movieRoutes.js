import e from "express";
import * as movieController from '../controllers/movieController.js'

const route = e.Router();

route.get('/search', movieController.searchMovie);
route.get('/movies/:id', movieController.getMovieDetails);

export default route;