export class ProductService {
  getProductById(productId: string) {
    // TODO: implement get product logic here
    return {
      productId,
      name: 'Name',
      description: 'Product',
      img: 'https://image.png',
      at: new Date()
    }
  }

  addProductToCart(productId: string) {
    // TODO: implement add to cart logic here
    return {
      productId,
      at: new Date()
    }
  }

  removeProductFromCart(productId: string) {
    // TODO: implement remove from cart logic here
    return {
      productId,
      at: new Date()
    }
  }

  buyProduct(productId: string) {
    // TODO: implement buy logic here
    return {
      productId,
      quantity: 2,
      at: new Date()
    }
  }
}