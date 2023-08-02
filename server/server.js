import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/drinks.js'

const { MONGO_URL, PORT } = process.env;

const corsPolicy = {
  origin: `http://localhost:3000`,
  allowedHeaders: 'Content-Type, Authorization',
  methods: 'GET, POST, PUT, DELETE',
};

const app = express();
app.use(cors(corsPolicy));
app.use(express.json());
app.use((req,res,next) => {
  console.log(req.path, req.method)
  next()
})

mongoose.connect(MONGO_URL)
.then(()=> {
  app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
      })
    })
   .catch ((error) => {
    console.error(error);
    app.close();
   })

app.use('/drinks', router)
  
export default app  







// PONIŻEJ SPRAWY KTÓRE MOGĄ SIĘ PRZYDAĆ.
// (async () => {
//   try {
//     await mongoose.connect(MONGO_URL, {});
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//       console.log(`Server running on: http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//     app.close();
//   }
// })();
  
//   try {
//       const name = req.body.name;
//       const surname = req.body.surname;
//       const username = req.body.username;
//       const city = req.body.city;
//       const email = req.body.email;
//       const password = req.body.password;
//       const user = new User ({
//          name,
//          surname,
//          username,
//          city,
//          email,
//          password,
//       })
//       await user.save();
//       res.status(200).json({success: true});
//   } catch (error) {
//       console.log(error)
//       res.status(500).json({ success: false, error: "Failed" })
//   }
//   }
//   )

// app.get('/', (req, res) => {
//   res.redirect('/mainpage');
// });

// app.get('/mainpage', (req, res) => {
//   res.send('MainPage');
// });

// app.get('/register', (req, res) => {
//   res.send('Register');
// });

// app.get('/user', (req, res) => {
//   res.send('user settings');
// });

// app.get('/user/mainpage', (req, res) => {
//   res.send('user mainpage');
// });

// app.get('/user/favorites', (req, res) => {
//   res.send('favorites');
// });

// app.get('/drink', (req, res) => {
//   res.send('drink');
// });

// app.get('/drink/:id', (req, res) => {
//   res.send('drink by name');
// });


// app.use((req, res) => {
//   res.status(404).send('Not Found');
// });


