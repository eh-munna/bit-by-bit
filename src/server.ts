// Creating a simple Node Server
import http, { IncomingMessage, Server, ServerResponse } from 'http';
import { config } from './config/index';

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' }).end(
        JSON.stringify({
          message: 'Welcome to the Bit By Bit API',
          path: req.url,
        })
      );
    }

    if (req.url === '/api/users' && req.method === 'POST') {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        try {
          const user = JSON.parse(body);
          res
            .writeHead(201, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ message: 'User data received', data: user }));
        } catch (error: any) {
          res
            .writeHead(400, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ message: error?.message }));
        }
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(
    `Server is listening on port ${config.port} in ${config.env} mode.`
  );
});
