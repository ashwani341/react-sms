import express from 'express';
const app = express();
const port = 5000;
import mongoose from 'mongoose';
mongoose.set('strictQuery', false); // Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
const dbName = 'cdac';
const uri = `mongodb://127.0.0.1/${dbName}`;
import bodyParser from 'body-parser';
import studentRouter from './routes/studentRouter.js';
import morgan from 'morgan';
import cors from 'cors';
import { createResult } from './utils/createResult.js';


// -- START app middlewares setup -----------------------------------------------------------------------------------------------------
const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

app.use(morgan('dev')); // http logger

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// -- END app middlewares setup -----------------------------------------------------------------------------------------------------


// -- START application routes -----------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.send('api working fine!');
});


app.use('/api/students', studentRouter);

app.route('*')
  .get((req, res) => res.status(404).send(createResult({ message: 'Wrong api end-point!' })))
  .post((req, res) => res.status(404).send(createResult({ message: 'Wrong api end-point!' })));
// -- END application routes -----------------------------------------------------------------------------------------------------


// -- START connecting to the database -----------------------------------------------------------------------------------------------------
try {
  await mongoose.connect(uri);
  // -- START server starting at -----------------------------------------------------------------------------------------------------
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
  // -- END server starting at -----------------------------------------------------------------------------------------------------
  console.log(`Connected to the database: ${dbName}`);
} catch (error) {
  console.log(error);
}
// -- END connecting to the database -----------------------------------------------------------------------------------------------------
