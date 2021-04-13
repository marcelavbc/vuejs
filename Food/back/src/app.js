import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import recipeRoutes from './routes/recipe.routes'



const app = express();

app.set('pkg', pkg)

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description
    })
})

app.use('/api/auth', authRoutes);
app.use('/api/recipe', recipeRoutes);



export default app;