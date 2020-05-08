const express = require('express');
const pdf = require('html-pdf');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/app/views')


app.get('/', (req, res) => {

    
    const nome =  "Felipe";
    const sobrenome = "Melo";
    const escola = "IFMS - campus Dourados";
      
       res.render("modelpdf",{ 
            nome: nome, 
            sobren: sobrenome,
            local: escola 
            }, (err, html) => 
                {
                    if(err)
                    {
                        console.log(err);
                    }
                        else
                        {
                             pdf
                            .create(html, {})
                            .toFile('./pdf.pdf', (err, res) => 
                            {
                                if(!err)
                                {
                                    console.log(res);
                                }else
                                {
                                    console.log(err);
                                }
                            })
                        }
                    })
                });


app.listen(3333, () =>{
    console.log("foi");
});