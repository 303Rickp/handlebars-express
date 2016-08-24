const express = require('express');
const hbs = require('hbs');

let app = express();

app.set("view engine","hbs");
hbs.localsAsTemplateData(app);

app.locals.cohortName = 'g31';
app.locals.title = 'My Handlebars eample';

app.get('/',(req,res) => {
  res.render('home',{
    //cohortName:'g31',
    foods:[
      'chicken',
      'fish',
      'steak'
    ]
  });
});
app.get('/page2',(req,res) => {
  res.render('page2')
})

app.listen(3000,() => {
  console.log('server running on 3K');
})
