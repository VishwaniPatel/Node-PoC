
const fs = require('fs');

// const textIn = fs.readFileSync('./txt/input.txt','utf-8')
// console.log(textIn);

// const textOut = `This is Output: ${textIn}.\nCreated Date ${Date.now()}`

//  fs.writeFileSync('./txt/output.txt', textOut)
//  console.log("Something written");


// server 
const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.end('Hello')
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log("Listing port");
// })
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8') ; 
    const dataObj = JSON.parse(data);

 
const server = http.createServer((req, res)=>{
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview') {
        res.end('This is Overview')
    } else if(pathName === '/product'){
        res.end('This is product')
    } else if(pathName === '/api'){
        fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err, data)=>{
            const productsData = JSON.parse(data);
        res.writeHead(200,{'Content-type':'application/json'})
            res.end(data)
        })
    }
    else {
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        })
        res.end('<h1>Page not found</h1>')
    }
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("Listing port");
})