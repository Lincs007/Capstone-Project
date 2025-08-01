import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 16 Pro Max",
      description:
        "The iPhone 16 Pro Max is Apple's flagship 2024 model, designed for users demanding cutting-edge performance and professional photography. It features a 6.9-inch Super Retina XDR display with ProMotion technology for smooth 120Hz refresh rates, making it ideal for immersive viewing and seamless multitasking. Available from 256GB - 2TB storage, powered by the A18 Pro chip, and equipped with a triple-camera system including 48MP main, 48MP ultra-wide, and 12MP telephoto cameras.",
      src: "/images/iPhone/iPhone_16_Pro_Black.webp",
      srcSet:
        "/images/iPhone/iPhone_16_Pro_Black.webp 500w, /images/iPhone/iPhone_16_Pro_Black.webp 1000w, /images/iPhone/iPhone_16_Pro_Black.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 29, 999.99",
      color: ["space gray", "rose gold", "jet black"],
      selectedColor: "Choose Color",
    },
    {
      id: 2,
      title: "Samsung Galaxy S25 Ultra",
      description:
        "The Samsung Galaxy S25 Ultra is Samsung's flagship 2025 model, designed for users demanding cutting-edge AI capabilities and professional photography. It features a 6.9-inch Dynamic AMOLED 2X display with adaptive refresh rates up to 120Hz, making it ideal for immersive viewing and smooth performance. Available from 256GB - 1TB storage options and powered by the Snapdragon 8 Elite processor. Equipped with a quad-camera system and 5000mAh battery for all-day performance.",
      src: "/images/samsung/Samsung-Galaxy-S25-Ultra-Titanium-Gray.webp",
      srcSet:
        "/images/samsung/Samsung-Galaxy-S25-Ultra-Titanium-Gray.webp 500w, /images/samsung/Samsung-Galaxy-S25-Ultra-Titanium-Gray.webp 1000w, /images/samsung/Samsung-Galaxy-S25-Ultra-Titanium-Gray.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 27,999.00",
      color: ["titanium gray", "phantom black", "sky blue"],
      selectedColor: "Choose Color",
    },
    {
      id: 3,
      title: "Huawei Pura 80 Pro",
      description:
        "The Huawei Pura 80 Pro is Huawei's flagship 2025 model, designed for users demanding cutting-edge photography capabilities and AI-powered features. It features a 6.8-inch LTPO OLED display with adaptive refresh rates up to 120Hz, making it ideal for immersive viewing and smooth performance. Available from 256GB - 1TB storage options and powered by the Kirin 9020 processor with HarmonyOS 5.1. Equipped with advanced camera system including 1-inch main sensor and 5700mAh battery with 100W fast charging support.",
      src: "/images/huawei/Huawei-Pura-80-Pro-in-Black.webp",
      srcSet:
        "/images/huawei/Huawei-Pura-80-Pro-in-Black.webp 500w, /images/huawei/Huawei-Pura-80-Pro-in-Black.webp 1000w, /images/huawei/Huawei-Pura-80-Pro-in-Black.webp 1500w",
      sizez: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 36,999.00",
      color: ["graphite black", " silver frost", "ruby purple"],
      selectedColor: "Choose Color",
    },
    {
      id: 4,
      title: "HTC u24 Pro",
      description:
        "The HTC U24 Pro is HTC's flagship 2024 model, designed for users demanding premium performance and professional photography capabilities. It features a 6.8-inch FHD+ OLED display with 120Hz refresh rate, making it ideal for smooth scrolling and immersive viewing experiences. Available with 256GB or 512GB storage options and powered by the Snapdragon 7 Gen 3 processor with 12GB RAM. Equipped with a triple-camera system including 50MP main, 8MP ultra-wide, and 50MP telephoto cameras with 4600mAh battery and wireless charging.",
      src: "/images/htc/HTC u24 pro.webp",
      srcSet:
        "/images/htc/HTC u24 pro.webp 500w, /images/htc/HTC u24 pro.webp 1000w, /images/htc/HTC u24 pro.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 22,359.90",
      color: ["black", "aluninum silver", "milky white"],
      selectedColor: "Choose Color",
    },
    {
      id: 5,
      title: "iPhone 15 Pro Max",
      description:
        "The iPhone 15 Pro Max is Apple's top-tier 2023 model, designed for high performance and photography enthusiasts. It features a 6.7-inch Super Retina XDR display with ProMotion technology for smooth 120Hz refresh rates, making it ideal for crisp visuals and immersive viewing. Available from 256GB - 1TB storage.",
      src: "/images/iPhone/iphone_15_pro_max.webp",
      srcSet:
        "/images/iPhone/iphone_15_pro_max.webp 500w, /images/iPhone/iphone_15_pro_max.webp 1000w, /images/iPhone/iphone_15_pro_max.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 25,459.99",
      color: ["blue", "red", "rose gold"], // Available colors for the product
      selectedColor: "Choose Color", // Default selected color text
    },
    {
      id: 6,
      title: "Samsung S24 Ultra",
      description:
        "The Samsung Galaxy S24 Ultra is Samsung's flagship 2024 model, designed for users demanding premium performance and advanced photography capabilities. It features a 6.8-inch Dynamic AMOLED 2X display with adaptive refresh rates up to 120Hz, making it ideal for immersive viewing and smooth scrolling. Available from 256GB - 1TB storage options and powered by the Snapdragon 8 Gen 3 processor. Equipped with a quad-camera system including 200MP main camera, ultra-wide, and dual telephoto lenses with up to 100x Space Zoom.",
      src: "/images/samsung/Samsung s24 Ultra.webp",
      srcSet:
        "/images/samsung/Samsung s24 Ultra.webp 500w, /images/samsung/Samsung s24 Ultra.webp 1000w, /images/samsung/Samsung s24 Ultra.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 22,599.00",
      color: ["titanium black", "sky blue", "phantom white"],
      selectedColor: "Choose Color",
    },
    {
      id: 7,
      title: "Samsung S23 Ultra",
      description:
        "The Samsung S23 Ultra features a 6.8-inch AMOLED display with a dynamic 120Hz refresh rate. Comes with 1TB storage, ideal for stunning visuals and immersive gaming experiences.",
      src: "/images/samsung/s23-ultra-black.webp",
      srcSet:
        "/images/samsung/s23-ultra-black.webp 500w, /images/samsung/s23-ultra-black.webp 1000w, /images/samsung/s23-ultra-black.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 18,299.00",
      color: ["black", "white", "green"],
      selectedColor: "Choose Color",
    },
    {
      id: 8,
      title: "Huawei Mate 50 Pro",
      description:
        "Daring design and innovative features with a 6.74-inch OLED display and 120Hz refresh rate for vibrant colors. Powered by Qualcomm Snapdragon 8+ Gen 1 4G processor.",
      src: "/images/huawei/Huawei Mate 50 Pro.webp",
      srcSet:
        "/images/Huawei Mate 50 Pro.webp 500w, /images/Huawei Mate 50 Pro.webp 1000w, /images/Huawei Mate 50 Pro.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 11,599.00",
      color: ["blue", "silver", "black"],
      selectedColor: "Choose Color",
    },
    {
      id: 9,
      title: "Nokia g20",
      description:
        "A budget-friendly smartphone with a 6.5-inch HD+ display, quad-camera setup, and MediaTek Helio G35 processor, ideal for smooth everyday tasks.",
      src: "/images/nokia/g20_1_1.webp",
      srcSet:
        "/images/g20_1_1.webp 500w, /images/g20_1_1.webp 1000w, /images/g20_1_1.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 6,199.00",
      color: ["purple", "gray", "black"],
      selectedColor: "Choose Color",
    },
    {
      id: 10,
      title: "HTC U23 Pro",
      description:
        "Features a 108MP OIS main camera, 120Hz OLED display, and IP67 rating with all-day battery life, powered by 12GB RAM and 256GB storage.",
      src: "/images/htc/HTC U23 Pro.webp",
      srcSet:
        "/images/HTC U23 Pro.webp 500w, /images/HTC U23 Pro.webp 1000w, /images/HTC U23 Pro.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 22,359.90",
      color: ["black", "green", "white"],
      selectedColor: "Choose Color",
    },
    {
      id: 11,
      title: "iPhone 12",
      description:
        "Powered by the A14 Bionic chip, offering fast performance and improved efficiency with 5G support. Comes with 256GB storage.",
      src: "/images/iPhone/iPhone_12_Black.webp",
      srcSet:
        "/images/iPhone_12_Black.webp 500w, /images/iPhone_12_Black.webp 1000w, /images/iPhone_12_Black.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 10,899.00",
      color: ["black", "blue", "red"],
      selectedColor: "Choose Color",
    },
    {
      id: 12,
      title: "Samsung A55 5G",
      description:
        "The Samsung Galaxy A55 5G with 120Hz refresh rate, 8GB RAM, 256GB internal storage, and 64MP main sensor camera. Ideal for fast internet speeds with 5G support.",
      src: "/images/samsung/Samsung A55 5G.webp",
      srcSet:
        "/images/Samsung A55 5G.webp 500w, /images/Samsung A55 5G.webp 1000w, /images/Samsung A55 5G.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 7,799.90",
      color: ["blue", "pink", "gray"],
      selectedColor: "Choose Color",
    },
    {
      id: 13,
      title: "Xiaomi Redmi Note 13 Pro 4G",
      description:
        "A versatile device with 108MP main sensor, 512GB internal storage, and 8GB RAM, featuring a 6.67-inch AMOLED display and fast charging capabilities.",
      src: "/images/redmi/Xiaomi-Redmi-Note-13-Pro-Black.webp",
      srcSet:
        "/images/Xiaomi-Redmi-Note-13-Pro-Black.webp 500w, /images/Xiaomi-Redmi-Note-13-Pro-Black.webp 1000w, /images/Xiaomi-Redmi-Note-13-Pro-Black.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 10,199.00",
      color: ["black", "gold", "blue"],
      selectedColor: "Choose Color",
    },
    {
      id: 14,
      title: "Google Pixel 8 Pro",
      description:
        "Exceptional camera capabilities and AI features with a 6.7-inch LTPO OLED display, powered by Google’s custom Tensor G3 chip for impressive performance.",
      src: "/images/googlePixel/71h9zq4viSL.webp",
      srcSet:
        "/images/71h9zq4viSL.webp 500w, /images/71h9zq4viSL.webp 1000w, /images/71h9zq4viSL.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50vw, 33vw",
      price: "R 19,289.00",
      color: ["black", "white", "green"],
      selectedColor: "Choose Color",
    },
    {
      id: 15,
      title: "iPhone SE 3rd Generation",
      description:
        "Featuring a 4.7-inch Retina HD display with A15 Bionic chip for fast performance and 5G support, along with a 12MP wide camera.",
      src: "/images/iPhone/iPhone-SE-2-Black.webp",
      srcSet:
        "/images/iPhone-SE-2-Black.webp 500w, /images/iPhone-SE-2-Black.webp 1000w, /images/iPhone-SE-2-Black.webp 1500w",
      sizes: "(max-width: 600px) 100vw, (max-width:960px) 50 vw, 33vw",
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
