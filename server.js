const http = require("http");
const aboutMe = require("./api/about_me");

http
    .createServer((req, res) => {
        if (req.url === "/api/about_me") return aboutMe(req, res);
        res.statusCode = 404;
        res.end("Not found");
    })
    .listen(4000, () => console.log("http://localhost:4000/api/about_me"));