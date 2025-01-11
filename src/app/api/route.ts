import { NextResponse } from 'next/server';

const products = [
    {
      "id": "1",
      "name": "Stylish T-Shirt",
      "price": 25,
      "description": "This is a high-quality, comfortable cotton T-shirt. Perfect for casual outings or as a gift. Soft to the touch and breathable, this shirt comes in a variety of colors to suit every style.",
      "image": "tshirt.jpg"
    },
    {
      "id": "2",
      "name": "Running Shoes",
      "price": 65,
      "description": "These durable running shoes are designed for comfort and performance. They feature a lightweight design, responsive cushioning, and a breathable mesh upper. Ideal for long-distance runs or intense workouts.",
      "image": "shoes.jpg"
    },
    {
      "id": "3",
      "name": "Wireless Earbuds",
      "price": 40,
      "description": "Enjoy your music with these sleek, wireless earbuds. Equipped with noise-canceling technology, they deliver clear sound and a comfortable fit, making them perfect for commuting, exercising, or everyday use.",
      "image": "earbuds.jpg"
    },
    {
      "id": "4",
      "name": "Smartwatch",
      "price": 150,
      "description": "Track your fitness and stay connected with this advanced smartwatch. With heart rate monitoring, GPS, sleep tracking, and notifications, this device is your personal health and activity assistant.",
      "image": "smartwatch.jpg"
    },
    {
      "id": "5",
      "name": "Leather Wallet",
      "price": 45,
      "description": "Crafted from premium leather, this wallet offers ample space for your cards, cash, and IDs. Its sleek and stylish design ensures it fits easily in your pocket while providing durability and luxury.",
      "image": "wallet.jpg"
    },
    {
      "id": "6",
      "name": "Bluetooth Speaker",
      "price": 60,
      "description": "Experience rich, high-quality sound with this portable Bluetooth speaker. Perfect for indoor and outdoor use, it connects easily to your devices and delivers exceptional audio performance for any occasion.",
      "image": "speaker.jpg"
    },
    {
      "id": "7",
      "name": "Backpack",
      "price": 35,
      "description": "This versatile backpack is designed for both comfort and practicality. With multiple compartments, it’s perfect for carrying your laptop, books, or travel essentials. The adjustable straps ensure a perfect fit.",
      "image": "backpack.jpg"
    },
    {
      "id": "8",
      "name": "Gaming Headset",
      "price": 80,
      "description": "Take your gaming experience to the next level with this immersive gaming headset. Equipped with 7.1 surround sound, a noise-canceling microphone, and soft ear cushions, it ensures comfort during long gaming sessions.",
      "image": "headset.jpg"
    },
    {
      "id": "9",
      "name": "Coffee Maker",
      "price": 55,
      "description": "Brew the perfect cup of coffee every time with this user-friendly coffee maker. With customizable settings, it brews a range of coffee styles, from espresso to drip coffee, ensuring your morning starts off right.",
      "image": "coffeemaker.jpg"
    },
    {
      "id": "10",
      "name": "Electric Toothbrush",
      "price": 30,
      "description": "Maintain your oral hygiene with this advanced electric toothbrush. Featuring multiple cleaning modes, a built-in timer, and rechargeable batteries, this toothbrush ensures a deeper clean compared to manual brushing.",
      "image": "toothbrush.jpg"
    },
    {
      "id": "11",
      "name": "Portable Power Bank",
      "price": 25,
      "description": "Never run out of power with this portable power bank. It provides fast and efficient charging for your smartphones, tablets, and other devices on the go. Compact and lightweight, it’s the perfect travel companion.",
      "image": "powerbank.jpg"
    },
    {
      "id": "12",
      "name": "Portable Heater",
      "price": 50,
      "description": "Stay warm during cold weather with this efficient portable heater. It features multiple heat settings and an adjustable thermostat, making it ideal for small rooms, offices, or personal use during winter months.",
      "image": "heater.jpg"
    }
  ]
  

// When someone requests this route, return the product list as a response
export async function GET() {
  return NextResponse.json(products);
}
