const http = require('http');
const app = require('./app');
const port = process.env.PORT || 19010;

const server = http.createServer(app);

server.listen(port)
.on("listening", () => console.log(`backend 1 is running on port ${port}`))
.on("error", (err) =>{
    console.log(err);
    process.exit(1);
});

