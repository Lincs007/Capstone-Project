import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      description:
        "The iPhone 15 Pro Max is Apple’s top-tier 2023 model, designed for high performance and photography enthusiasts. It features a 6.7-inch Super Retina XDR display with ProMotion technology for smooth 120Hz refresh rates, making it ideal for crisp visuals and immersive viewing. Available with 1TB storage.",
      src: "/images/iPhone/iphone_15_pro_max.webp",
      srcSet:
        "/images/iPhone/iphone_15_pro_max.webp 500w, /images/iPhone/iphone_15_pro_max.webp 1000w, /images/iPhone/iphone_15_pro_max.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 25,459.99",
      color: ["blue", "red", "gold"], // Available colors for the product
      selectedColor: "Choose Color", // Default selected color text
    },
    {
      id: 2,
      title: "Samsung S23 Ultra",
      description:
        "The Samsung S23 Ultra features a 6.8-inch AMOLED display with a dynamic 120Hz refresh rate. Comes with 1TB storage, ideal for stunning visuals and immersive gaming experiences.",
      image: "/images/samsung/eberhard-grossgasteiger-XTZpzxFY4Z4-unsplash.jpg",
      price: "R 18,299.00",
      color: ["black", "white", "green"],
      selectedColor: "Choose Color",
    },
    {
      id: 3,
      title: "Huawei Mate 50 Pro",
      description:
        "Daring design and innovative features with a 6.74-inch OLED display and 120Hz refresh rate for vibrant colors. Powered by Qualcomm Snapdragon 8+ Gen 1 4G processor.",
      image: "/images/huawei/428_428_80B7248C6592F0C4E572B24458424FD1mp.jpg",
      price: "R 11,599.00",
      color: ["blue", "silver", "black"],
      selectedColor: "Choose Color",
    },
    {
      id: 4,
      title: "Nokia g20",
      description:
        "A budget-friendly smartphone with a 6.5-inch HD+ display, quad-camera setup, and MediaTek Helio G35 processor, ideal for smooth everyday tasks.",
      image: "/images/nokia/g20_1_1.jpeg",
      price: "R 6,199.00",
      color: ["purple", "gray", "black"],
      selectedColor: "Choose Color",
    },
    {
      id: 5,
      title: "HTC U23 Pro",
      description:
        "Features a 108MP OIS main camera, 120Hz OLED display, and IP67 rating with all-day battery life, powered by 12GB RAM and 256GB storage.",
      image:
        "/images/htc/Untitled1_06ea7c4e-a16c-4868-a04a-60674719fce2_600x600.jpeg",
      price: "R 22,359.90",
      color: ["black", "green", "white"],
      selectedColor: "Choose Color",
    },
    {
      id: 6,
      title: "iPhone 12",
      description:
        "Powered by the A14 Bionic chip, offering fast performance and improved efficiency with 5G support. Comes with 256GB storage.",
      image: "/images/iPhone/iPhone_12_Black.jpeg",
      price: "R 10,899.00",
      color: ["black", "blue", "red"],
      selectedColor: "Choose Color",
    },
    {
      id: 7,
      title: "Samsung A55 5G",
      description:
        "The Samsung Galaxy A55 5G with 120Hz refresh rate, 8GB RAM, 256GB internal storage, and 64MP main sensor camera. Ideal for fast internet speeds with 5G support.",
      image:
        "/images/samsung/za-galaxy-a55-5g-sm-a556-sm-a556ezkwafa-thumb-540434528.jpeg",
      price: "R 7,799.90",
      color: ["blue", "pink", "gray"],
      selectedColor: "Choose Color",
    },
    {
      id: 8,
      title: "Xiaomi Redmi Note 13 Pro 4G",
      description:
        "A versatile device with 108MP main sensor, 512GB internal storage, and 8GB RAM, featuring a 6.67-inch AMOLED display and fast charging capabilities.",
      image: "/images/redmi/Xiaomi-Redmi-Note-13-Pro-4G-Black-512GB.jpg",
      price: "R 10,199.00",
      color: ["black", "gold", "blue"],
      selectedColor: "Choose Color",
    },
    {
      id: 9,
      title: "Google Pixel 8 Pro",
      description:
        "Exceptional camera capabilities and AI features with a 6.7-inch LTPO OLED display, powered by Google’s custom Tensor G3 chip for impressive performance.",
      image: "/images/googlePixel/71h9zq4viSL.jpg",
      price: "R 19,289.00",
      color: ["black", "white", "green"],
      selectedColor: "Choose Color",
    },
    {
      id: 10,
      title: "iPhone SE 3rd Generation",
      description:
        "Featuring a 4.7-inch Retina HD display with A15 Bionic chip for fast performance and 5G support, along with a 12MP wide camera.",
      image:
        "/images/iPhone/iPhone-SE-2-Black_d3a9f88a-62ed-4a98-bac3-b8c08f1722f1.jpeg",
      price: "R 7,089.00",
      color: ["black", "red", "white"],
      selectedColor: "Choose Color",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
