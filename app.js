import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = process.env.port;
const link = process.env.link;
app.get('/', (req, res) => {
    // Fetch or generate the question here
    axios.get(link)
        .then((response) => {
            res.render('main', { response: response.data });

        })
        .catch((error) => {
            console.error(error);
        });
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});