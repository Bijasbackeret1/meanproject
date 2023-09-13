const mongoose = require('mongoose');
const app = require('./app');


mongoose.connect('mongodb://localhost:27017/project', {
    useNewUrlParser: true
}).then((conn) => {
    console.log('DB Connection Successful');
}).catch((error) => {
    console.log('Some error has occured');
});

app.listen(5000, () => {
    console.log('server has started...');
});

