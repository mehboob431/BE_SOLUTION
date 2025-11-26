const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetch all products
 * @returns {Promise<Array>} Array of products
 */
export async function getAllProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetch a single product by ID
 * @param {string|number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export async function getProductById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

/**
 * Get all product IDs for static generation
 * @returns {Promise<Array>} Array of product IDs
 */
export async function getAllProductIds() {
  try {
    const products = await getAllProducts();
    return products.map((product) => ({
      params: {
        id: product.id.toString(),
      },
    }));
  } catch (error) {
    console.error('Error fetching product IDs:', error);
    return [];
  }
}
