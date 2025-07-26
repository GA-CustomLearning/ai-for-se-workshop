// large_project_file.js - Simulating a large project file for token counting

// --- Section 1: Utility Functions ---

/**
 * Generates a unique ID.
 * @returns {string} A unique ID string.
 */
function generateUniqueId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Formats a date object into a readable string.
 * @param {Date} date - The date object to format.
 * @returns {string} Formatted date string.
 */
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Validates an email address.
 * @param {string} email - The email string to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function isValidEmail(email) {
  const re = /^(([^<>()[\\]\\.,;:\s@\"]+(\.[^<>()[\\]\\.,;:\s@\"]+)*)|(\".+\"))@((\\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// --- Section 2: Data Models ---

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  get userInfo() {
    return `User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }

  updateEmail(newEmail) {
    if (isValidEmail(newEmail)) {
      this.email = newEmail;
      return true;
    }
    return false;
  }
}

class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  get productDetails() {
    return `${this.name} - $${this.price} (Stock: ${this.stock})`;
  }

  sell(quantity) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return true;
    }
    return false;
  }
}

// --- Section 3: API Service Simulation ---

const API_BASE_URL = 'https://api.example.com/v1';

async function fetchUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function createProduct(productData) {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

// --- Section 4: Complex Business Logic ---

/**
 * Processes an order, updating stock and generating an invoice.
 * @param {Array<Object>} items - Array of items in the order.
 * @param {User} customer - The customer placing the order.
 * @returns {Object|null} Invoice details or null if order fails.
 */
function processOrder(items, customer) {
  let totalAmount = 0;
  const purchasedItems = [];

  for (const item of items) {
    const product = getProductById(item.productId); // Assume getProductById exists
    if (!product || !product.sell(item.quantity)) {
      console.warn(`Could not process item ${item.productId} - insufficient stock or invalid product.`);
      return null; // Order failed
    }
    totalAmount += product.price * item.quantity;
    purchasedItems.push({ name: product.name, quantity: item.quantity, price: product.price });
  }

  const invoice = {
    invoiceId: generateUniqueId(),
    customerId: customer.id,
    customerName: customer.name,
    items: purchasedItems,
    total: totalAmount,
    orderDate: formatDate(new Date()),
  };

  console.log(`Order processed for ${customer.name}. Invoice ID: ${invoice.invoiceId}`);
  return invoice;
}

// Dummy function for demonstration
function getProductById(id) {
  // In a real app, this would fetch from a database
  const products = [
    new Product('prod001', 'Laptop', 1200, 50),
    new Product('prod002', 'Mouse', 25, 200),
    new Product('prod003', 'Keyboard', 75, 100),
  ];
  return products.find(p => p.id === id);
}

// --- Section 5: Event Handling and UI Logic (Simplified) ---

function setupEventListeners() {
  const buyButtons = document.querySelectorAll('.buy-button');
  buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = event.target.dataset.productId;
      const quantity = parseInt(event.target.dataset.quantity || '1');
      // Simulate adding to cart or direct purchase
      console.log(`User wants to buy ${quantity} of product ${productId}`);
      // In a real app, this would trigger API calls or state updates
    });
  });
}

function renderProductList(products) {
  const container = document.getElementById('product-list-container');
  if (!container) return;

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Stock: ${product.stock}</p>
      <button class="buy-button" data-product-id="${product.id}" data-quantity="1">Add to Cart</button>
    </div>
  `).join('');
}

// --- Section 6: Initialization and Main Execution Flow ---

async function initializeApp() {
  console.log('Application initializing...');
  const allUsers = await fetchUsers();
  console.log(`Fetched ${allUsers.length} users.`);

  // Simulate some initial data setup
  const newProduct = await createProduct({ name: 'Webcam', price: 50, stock: 75 });
  if (newProduct) {
    console.log(`New product created: ${newProduct.name}`);
  }

  // Example usage of business logic
  const customer = new User(generateUniqueId(), 'Alice Wonderland', 'alice@example.com');
  const orderItems = [
    { productId: 'prod001', quantity: 1 },
    { productId: 'prod002', quantity: 2 },
  ];
  const invoice = processOrder(orderItems, customer);

  if (invoice) {
    console.log('Invoice generated:', invoice);
  }

  // Simulate rendering UI
  renderProductList(getProductById('prod001') ? [getProductById('prod001')] : []); // Just render one for simplicity
  setupEventListeners();

  console.log('Application initialized.');
}

// Run the application
initializeApp();

// --- Section 7: More Dummy Code for Token Count ---

function utilityFunctionA() { /* ... */ }
function utilityFunctionB() { /* ... */ }
function utilityFunctionC() { /* ... */ }
function utilityFunctionD() { /* ... */ }
function utilityFunctionE() { /* ... */ }
function utilityFunctionF() { /* ... */ }
function utilityFunctionG() { /* ... */ }
function utilityFunctionH() { /* ... */ }
function utilityFunctionI() { /* ... */ }
function utilityFunctionJ() { /* ... */ }
function utilityFunctionK() { /* ... */ }
function utilityFunctionL() { /* ... */ }
function utilityFunctionM() { /* ... */ }
function utilityFunctionN() { /* ... */ }
function utilityFunctionO() { /* ... */ }
function utilityFunctionP() { /* ... */ }
function utilityFunctionQ() { /* ... */ }
function utilityFunctionR() { /* ... */ }
function utilityFunctionS() { /* ... */ }
function utilityFunctionT() { /* ... */ }
function utilityFunctionU() { /* ... */ }
function utilityFunctionV() { /* ... */ }
function utilityFunctionW() { /* ... */ }
function utilityFunctionX() { /* ... */ }
function utilityFunctionY() { /* ... */ }
function utilityFunctionZ() { /* ... */ }

// More repetitive code to reach token count
const dataSet1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const dataSet2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const dataSet3 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const dataSet4 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
const dataSet5 = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const dataSet6 = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
const dataSet7 = [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140];
const dataSet8 = [141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160];
const dataSet9 = [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180];
const dataSet10 = [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200];

function processData(data) {
  let sum = 0;
  for (const item of data) {
    sum += item;
  }
  return sum;
}

console.log('Processing data sets...');
processData(dataSet1);
processData(dataSet2);
processData(dataSet3);
processData(dataSet4);
processData(dataSet5);
processData(dataSet6);
processData(dataSet7);
processData(dataSet8);
processData(dataSet9);
processData(dataSet10);
console.log('Data processing complete.');

// End of large_project_file.js
