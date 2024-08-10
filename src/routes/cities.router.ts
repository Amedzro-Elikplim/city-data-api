import { Router } from 'express';
import { getAllCities } from '../controllers/cities.controller';

const router = Router();

router.get('/get-all-cities', getAllCities);


export default router;