'use client';

import Navbar from "@/components/Navbar";
import MenuItem from '@/components/MenuItem';
import Image from 'next/image';

const menuItems = [
    { name: "Korean BBQ", description: "", price: 24.1, category: "Pizza", image: "/menu_images/Korean-BBQ-Pizza.jpeg" },
    { name: "Naga Habanero Chicken", description: "", price: 23.34, category: "Pizza", image: "/menu_images/Naga-Habanero-Chicken-Pizza.jpeg" },
    { name: "Beef Taco Pizza", description: "", price: 22.96, category: "Pizza", image: "/menu_images/Beef-Taco-Pizza.jpeg" },
    { name: "Meatlovers Pizza", description: "", price: 25.82, category: "Pizza", image: "/menu_images/Meat-Lovers-Pizza.jpeg" },
    { name: "Beef Pepperoni", description: "", price: 20.92, category: "Pizza", image: "/menu_images/beef-pepperoni-beef-pepperoni.jpg" },
    { name: "Harissa Chicken", description: "", price: 22.27, category: "Pizza", image: "/menu_images/Harissa-Chicken-Pizza.jpeg" },
    { name: "Bengali Beef Pesto (Contains Nuts)", description: "", price: 25.42, category: "Pizza", image: "/menu_images/bengali-(jhura)-beef-pesto-contains.jpg" },
    { name: "Alfredo Chicken", description: "", price: 20.58, category: "Pizza", image: "/menu_images/alfredo-chicken-pizza.jpg" },
    { name: "Naga Habanero Paneer", description: "", price: 21.67, category: "Pizza", image: "/menu_images/Naga-Habanero-Paneer-Pizza.jpeg" },
    { name: "Naga Habanero Mushroom", description: "", price: 19.54, category: "Pizza", image: "/menu_images/Naga-Habanero-Mushroom-Pizza.jpeg" },
    { name: "Garlic Artichoke", description: "", price: 20.36, category: "Pizza", image: "/menu_images/garlic-artichoke.jpg" },
    { name: "Garlic Ghee Mushroom", description: "", price: 20.06, category: "Pizza", image: "/menu_images/garlic-ghee-mushroom.jpg" },
    { name: "Veggie Pizza", description: "", price: 20.09, category: "Pizza", image: "/menu_images/veggie-pizza.jpg" },
    { name: "4 Cheez with Hot Honey", description: "", price: 20.22, category: "Pizza", image: "/menu_images/4cheez-with-hot-honey.jpg" },
    { name: "Classic Cheese Pizza", description: "", price: 18.72, category: "Pizza", image: "/menu_images/classic-cheese-pizza.jpg" },
    { name: "Alfredo Cheese Pizza", description: "", price: 19.06, category: "Pizza", image: "/menu_images/alfredo-cheese-pizza.jpg" },
    { name: "Margarita", description: "Classic tomato, mozzarella, and basil", price: 18.44, category: "Pizza", image: "/menu_images/margherita.jpg" },
    { name: "Naga Habanero Balachao", description: "", price: 17.91, category: "Pizza", image: "/menu_images/Naga-Habanero-Balachao-Pizza.jpeg" },
    { name: "Customized Pizza", description: "Choose your toppings!", price: 24.06, category: "Pizza", image: "/menu_images/customize.jpeg" },
    { name: "Half & Half", description: "Two pizzas in one!", price: 26.08, category: "Pizza", image: "/menu_images/half-half.jpg" },
    { name: "Alfredo Pasta", description: "", price: 12.64, category: "Pizza", image: "/menu_images/alfredo-pasta.png" },
    { name: "Tomato Basil Pasta", description: "", price: 11.65, category: "Pizza", image: "/menu_images/tomato-basil-pasta.jpg" },
    { name: "Naga Habanero Pasta", description: "", price: 12.18, category: "Pizza", image: "/menu_images/Naga-Habanero-Pasta.jpg" },
    { name: "Beef Chopped Cheese", description: "", price: 8.32, category: "Pizza", image: "/menu_images/beef-chopped-cheese-wrap.jpg" },
    { name: "Chicken Wrap", description: "", price: 8.34, category: "Pizza", image: "/menu_images/chicken-wrap.jpg" },
    { name: "Mushroom Wrap", description: "", price: 8.89, category: "Pizza", image: "/menu_images/mushroom-wrap.jpg" },
    { name: "Paneer Wrap", description: "", price: 8.29, category: "Pizza", image: "/menu_images/paneer-wrap.jpg" },
    { name: "Soda (Can)", description: "", price: 2.55, category: "Pizza", image: "/menu_images/soda.jpg" },
    { name: "Water (small)", description: "", price: 1.99, category: "Pizza", image: "/menu_images/water.jpg" },
    { name: "Hot Honey", description: "", price: 1.99, category: "Pizza", image: "/menu_images/hot-honey.jpg" },
    { name: "Ranch", description: "", price: 0.99, category: "Pizza", image: "/menu_images/ranch.jpg" },
    { name: "Naga Dip", description: "", price: 1.99, category: "Pizza", image: "/menu_images/naga-dip.jpg" },
    { name: "Red Peppers Bags 3", description: "", price: 0.99, category: "Pizza", image: "/menu_images/red-pepper.jpg" },
    { name: "Parmesan Bags 3", description: "", price: 0.99, category: "Pizza", image: "/menu_images/parmesan.jpg" },
    { name: "Side Olives", description: "", price: 0.99, category: "Pizza", image: "/menu_images/side-olives.jpg" },
    { name: "Side Jalapeno", description: "", price: 0.99, category: "Pizza", image: "/menu_images/side-jalapeno.jpg" },
    { name: "Side Garlic Mayo", description: "", price: 0.99, category: "Pizza", image: "/menu_images/Garlic-Mayo.jpg" },
    { name: "Marinara Sauce", description: "", price: 1.99, category: "Pizza", image: "/menu_images/marinara-sauce.jpg" },
    { name: "14\" Pie", description: "", price: 12, category: "Pizza", image: "/menu_images/14-pie.jpg" },
    { name: "Aged Parmesan", description: "", price: 1.99, category: "Pizza", image: "/menu_images/aged-parmesan.jpg" },
    { name: "Side Cilantro", description: "", price: 0.99, category: "Pizza", image: "/menu_images/side-cilantro.jpg" },
    { name: "Side Basil", description: "", price: 0.99, category: "Pizza", image: "/menu_images/side-basil.jpg" },
];

export default function MenuPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex justify-center items-start p-8 pt-20">
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-7xl w-full p-8">
                    <h1 className="text-3xl font-bold text-[#3e2c1c] mb-6 text-center">The Menu</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuItems.map((item) => (
                            <MenuItem key={item.name} item={item} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
