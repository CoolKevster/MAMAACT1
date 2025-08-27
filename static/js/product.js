const products = {
  // Existing products
  1: {
    id: 1,
    name: "Premium Batik Shirt",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 49.99,
    description: "Hand-dyed with traditional patterns"
  },
  2: {
    id: 2,
    name: "Batik Sarong",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    price: 29.99,
    description: "Hand-dyed Cotton"
  },
  3: {
    id: 3,
    name: "Handloom Shawl",
    image: "https://images.unsplash.com/photo-1610526668905-2f6a4a0f1b2e?auto=format&fit=crop&w=200&q=80",
    price: 45.99,
    description: "Pure cotton weave with traditional patterns"
  },
  4: {
    id: 4,
    name: "Batik Shirt",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    price: 39.99,
    description: "Traditional Design"
  },
  5: {
    id: 5,
    name: "Wooden Mask",
    image: "https://images.unsplash.com/photo-1623849855073-4c1b5f4d1d7a?auto=format&fit=crop&w=200&q=80",
    price: 34.99,
    description: "Hand-carved traditional Sri Lankan mask"
  },

  // Men's Collection - Sarongs
  101: {
    id: 101,
    name: "Traditional Cotton Sarong",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 34.99,
    description: "Breathable fabric with batik patterns"
  },
  102: {
    id: 102,
    name: "Formal Silk Sarong",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 59.99,
    description: "Elegant silk with gold accents"
  },
  103: {
    id: 103,
    name: "Casual Linen Sarong",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 42.99,
    description: "Lightweight for everyday comfort"
  },
  104: {
    id: 104,
    name: "Wedding Sarong Set",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 89.99,
    description: "Luxury fabric with embroidery"
  },

  // Men's Collection - Shirts
  105: {
    id: 105,
    name: "Premium Batik Shirt",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 49.99,
    description: "Hand-dyed with traditional patterns"
  },
  106: {
    id: 106,
    name: "Casual Batik Shirt",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 39.99,
    description: "Lightweight for everyday wear"
  },
  107: {
    id: 107,
    name: "Formal Batik Shirt",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 54.99,
    description: "Elegant design for special occasions"
  },
  108: {
    id: 108,
    name: "Short Sleeve Batik",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc极?auto=format&fit=crop&w=200&q=80",
    price: 37.99,
    description: "Cool and comfortable for warm weather"
  },

  // Men's Collection - Jackets
  109: {
    id: 109,
    name: "Batik Nehru Jacket",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 79.99,
    description: "Formal wear with traditional patterns"
  },
  110: {
    id: 110,
    name: "Cotton Casual Jacket",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 65.99,
    description: "Lightweight for cooler evenings"
  },
  111: {
    id: 111,
    name: "Formal Silk Jacket",
    image: "https://images.unsplash.com/photo-162228843极0-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 99.99,
    description: "Elegant silk with gold embroidery"
  },
  112: {
    id: 112,
    name: "Linen Blend Jacket",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 72.99,
    description: "Breathable fabric for warm weather"
  },

  // Men's Collection - T-Shirts
  113: {
    id: 113,
    name: "Cotton Batik T-Shirt",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&极fit=crop&w=200&q=80",
    price: 29.99,
    description: "Traditional patterns, modern comfort"
  },
  114: {
    id: 114,
    name: "V-Neck Traditional Tee",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 26.99,
    description: "Subtle cultural motifs"
  },
  115: {
    id: 115,
    name: "Graphic Print T-Shirt",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 31.99,
    description: "Contemporary designs with cultural elements"
  },
  116: {
    id: 116,
    name: "Organic Cotton Tee",
    image: "https://images.unsplash.com/photo-1622288432450-277d0b6b1dc6?auto=format&fit=crop&w=200&q=80",
    price: 34.99,
    description: "Sustainable fabric with traditional patterns"
  }
};

window.products = products;