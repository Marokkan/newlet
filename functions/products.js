

const stripe = require('stripe')('sk_test_51MOp9mAGo9H7uACc481sF4zu1Z27h6STGyok9LTAKGqNhWcc08W0q7zkyQZxMEfFtHQWZHGx53NAVA8EbyBqMvyd00QCKUqeRk');






exports.handler = async function (event, context) {
    
    try{
      const products = await stripe.products.list({ limit: 3, })

      return {
        statusCode: 200,
        body: JSON.stringify(products),
      }

    }catch(error){
      return {
        statusCode: 500,
        body: 'Server Error',
      }
    }

};
