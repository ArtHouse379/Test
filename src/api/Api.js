const BASE_URL = 'http://localhost:3010';

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  return data;
};

export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

//updateProduct

//deleteProduct