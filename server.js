const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = 8080;
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

http
  .createServer((request, response) => {
    const requestedPath = request.url === "/" ? "/index.html" : request.url;
    const filePath = path.join(root, decodeURIComponent(requestedPath));

    fs.readFile(filePath, (error, content) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Arquivo não encontrado");
        return;
      }

      const contentType = mimeTypes[path.extname(filePath)] || "application/octet-stream";
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content);
    });
  })
  .listen(port, () => {
    console.log(`Servidor disponível em http://localhost:${port}`);
  });