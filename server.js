import e from "express";
import 'dotenv/config';
import movieRoutes from './routes/movieRoutes.js';

const app = e();
const port = 3000;

app.use('/api', movieRoutes);
app.use('/api', movieRoutes)

app.listen(port, () => {
  console.log('Server is running on localhost:', port)
})
