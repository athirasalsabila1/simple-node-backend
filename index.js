const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res)=>{
    //request handler goes here
    if (req.url ==="/"){
        res.writeHead(200, {
            "Content-Type": "text/plain"
        })
        res.end("HALLOOOO");
    }
    // content with JSON format

    else if (req.url === "/contacts"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        })

        let contacts = JSON.stringify([
            {name: "caca", phone: "083808170060"},
            {name: "cici", phone : "93363553572"}
            
        ]);

        res.end(contacts);
    }

    else if (req.url === "/about"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.end("<h1> HALOOO CACACA ini HTML");
    }

    //content with HTML
    else if (req.url === "/products"){
        fs.readFile("./public/index.html", (err, data)=>{
            if (err){
                res.writeHead(404);
                res.write("Not Found");
            } else {
                res.writeHead(200);
                res.end(data);
            }
        });
    }
});

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});