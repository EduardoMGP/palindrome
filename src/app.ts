import express from 'express';
import path from 'path';
export class App {

  private readonly application: express.Application;
  constructor() {
    this.application = express();
    this.application.set('views', path.join(__dirname, '..' + path.sep + 'views'));
    this.application.set('view engine', 'ejs');
    this.application.use(express.json());
    this.application.use(express.urlencoded({ extended: false }));
    this.application.use(express.static(path.join(__dirname,  '..' + path.sep + 'public')));
    this.application.use("/axios", express.static(path.join(__dirname,  '..' + path.sep + 'node_modules' + path.sep + 'axios' + path.sep + 'dist')));
  }

  public listen(port: number) {
    this.application.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }

  public app(): express.Application {
    return this.application;
  }

}