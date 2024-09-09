import {ProductService} from "./product.service";
import {IncomingMessage, ServerResponse} from "http";
import {EndpointsEnum, EntrypointsEnum} from "../types";

export class ProductController {
  constructor(private readonly productService: ProductService = new ProductService()) {}

  async handleRequest(
    req: IncomingMessage,
    res: ServerResponse
  ) {
    const urlParts = req.url!.split('/').filter(Boolean)

    const endpoint = urlParts[1]

    if (endpoint === EndpointsEnum.GET_BY_ID && req.method === 'GET') {
      const productId = urlParts[2]

      if (!productId) {
        // TODO: move to some common module
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Bad Request');
      }

      const getByIdResult = this.productService.getProductById(productId)

      return res.end(JSON.stringify(getByIdResult))
    }

    if (endpoint === EndpointsEnum.BUY && req.method === 'POST') {
      const productId = urlParts[2]

      if (!productId) {
        // TODO: move to some common module
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Bad Request');
      }

      const buyResult = this.productService.buyProduct(productId)

      return res.end(JSON.stringify(buyResult))
    }

    if (endpoint === EndpointsEnum.ADD_TO_CART && req.method === 'POST') {
      const productId = urlParts[2]

      if (!productId) {
        // TODO: move to some common module
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Bad Request');
      }

      const addToCartResult = this.productService.addProductToCart(productId)

      return res.end(JSON.stringify(addToCartResult))
    }

    if (endpoint === EndpointsEnum.REMOVE_FROM_CART && req.method === 'DELETE') {
      const productId = urlParts[2]

      if (!productId) {
        // TODO: move to some common module
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Bad Request');
      }

      const addToCartResult = this.productService.removeProductFromCart(productId)

      return res.end(JSON.stringify(addToCartResult))
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('Not Found');
  }
}