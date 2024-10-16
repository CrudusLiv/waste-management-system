import express from 'express';
import mongoose from 'mongoose';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { CommonEngine } from '@angular/ssr';
import { APP_BASE_HREF } from '@angular/common';
import bootstrap from './src/main.server';
import wasteRoutes from './src/routes/waste.routes';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  // Connect to MongoDB
  mongoose.connect('mongodb+srv://CrudusLiv:pNqd4eHjHkWkMNND@cluster0.n2yin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);
  server.use('/api/waste', wasteRoutes);

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
run();