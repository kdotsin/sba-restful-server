import e from "express";
import * as movieController from '../controllers/movieController.js'

const route = e.Router();

route.get('/', movieController.searchMovie)

export default route;