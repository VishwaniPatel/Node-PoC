const express = require('express');
const app = express();

const morgan = require('morgan');
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
//middleware
app.use(express.json());

app.unsubscribe((req, res, next) => {
  console.log('middleware');
  next();
});

// app.get('/api/v1/tours', getAllTours)
// app.post('/api/v1/tours',createTour)
// app.get('/api/v1/tours/:id',getTour)
// app.patch('/api/v1/tours/:id',updateTour)
// app.delete('/api/v1/tours/:id',deleteTour)

//routes
//middleware

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'Hello from server', app:'Natours'});
// })
// app.post('/',(req,res)=>{
//     res.send("Post")
// })

module.exports = app;
