const http = require('http');
const app = require('./app');
const port = process.env.PORT || 19000;

const server = http.createServer(app);

server.listen(port)
.on("listening", () => console.log(`fron344\tend is running on port ${port}`))
.on("error", (err) =>{
    console.log(err);
    process.exit(1);
});