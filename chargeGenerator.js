//chargeGenerator.js

const url = 'https://api.commerce.coinbase.com/charges';

const requestBody = {
   local_price: {
     amount: '1.50', //price of charge
     currency: 'USD', //currency
  },
  pricing_type: 'fixed_price',
 
 name: 'Name of the charge',
  description: 'Small description',
  redirect_url: 'https:/google.com', //optional redirect URL

   metadata: { //optional charge metadata
     id: 'Customer id,
     email: 'bobby@axecapital.com',
     address: '123 Satoshi Lane',
   },
};

const payload = {
  method: 'POST',
  mode: 'cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CC-Api-Key': process.env.COMMERCE_API_KEY,//API key from Commerce
  },
  body: JSON.stringify(requestBody),
};

async function createCharge() {
  try {
    const response = await fetch(url, payload);
    if (!response.ok) {
      throw new Error(`HTTP error Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating charge:", error);
  }
}

export { createCharge };
