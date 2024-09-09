import {IncomingMessage, ServerResponse} from "http";
import {ProductController} from "./product/product.controller";
import {EntrypointsEnum} from "./types";

export class Modules {
  constructor(
    req: IncomingMessage,
    res: ServerResponse,
  ) {
    void this.init(req, res)
  }

  async init(
    req: IncomingMessage,
    res: ServerResponse
  ): Promise<void> {
    const url = req.url

    if (!url) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');

      return
    }

    if (url.startsWith(EntrypointsEnum.PRODUCT)) {
      const productController = new ProductController()

      await productController.handleRequest(req, res)

      return
    }

    if (url.startsWith(EntrypointsEnum.CLIENT_PROFILE)) {
      // TODO: add client profile controller
      console.log(url)
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');

    return
  }
}