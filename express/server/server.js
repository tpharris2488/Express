const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
let app = express();

const clientPath = path.join(__dirname, '../public');
const formSubmit = path.join(__dirname, '../formsubmisisons.json');

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(clientPath));                        

app.post('/formsubmissions', (req, res) => {                
    console.log(req.body);
    let formValue = JSON.stringify(req.body)
    fs.writeFile(formSubmit, formValue, (err) => {
        if (err) {console.log(err);} 
   })
    res.send('Thanks for submitting!');
});

// app.use((req, res, next) => {                            
//     console.log(req.originalUrl);
//     next();
// });



// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

app.listen(3000, () => {                                    
    console.log('listening to port 3000');
});
