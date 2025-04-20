'use client';

import Navbar from "@/components/Navbar";
import MenuItem from '@/components/MenuItem';
import Image from 'next/image';

const menuItems = [
    { name: "Korean BBQ", description: "Spicy and savory Korean BBQ pizza.", price: 24.1, category: "Pizza", image: "/menu_images/Korean-BBQ-Pizza.jpeg" },
    { name: "Naga Habanero Chicken", description: "Bold taste with a fiery kick of Naga Habanero chicken.", price: 23.34, category: "Pizza", image: "/menu_images/Naga-Habanero-Chicken-Pizza.jpeg" },
    { name: "Beef Taco Pizza", description: "Fusion of classic beef taco flavors on a pizza base.", price: 22.96, category: "Pizza", image: "/menu_images/Beef-Taco-Pizza.jpeg" },
    { name: "Meatlovers Pizza", description: "Loaded with a variety of meats for hearty flavor.", price: 25.82, category: "Pizza", image: "/menu_images/Meat-Lovers-Pizza.jpeg" },
    { name: "Beef Pepperoni", description: "A twist on classic pepperoni with a beefy flavor.", price: 20.92, category: "Pizza", image: "/menu_images/beef-pepperoni-beef-pepperoni.jpg" },
    { name: "Harissa Chicken", description: "Flavorful chicken infused with spicy harissa.", price: 22.27, category: "Pizza", image: "/menu_images/Harissa-Chicken-Pizza.jpeg" },
    { name: "Bengali Beef Pesto (Contains Nuts)", description: "Unique blend of Bengali spices with a rich beef pesto.", price: 25.42, category: "Pizza", image: "/menu_images/bengali-(jhura)-beef-pesto-contains.jpg" },
    { name: "Alfredo Chicken", description: "Creamy Alfredo sauce combined with tender chicken.", price: 20.58, category: "Pizza", image: "/menu_images/alfredo-chicken-pizza.jpg" },
    { name: "Naga Habanero Paneer", description: "A fusion of spicy Naga Habanero and soft paneer cheese.", price: 21.67, category: "Pizza", image: "/menu_images/Naga-Habanero-Paneer-Pizza.jpeg" },
    { name: "Naga Habanero Mushroom", description: "Spicy kick meets earthy mushrooms.", price: 19.54, category: "Pizza", image: "/menu_images/Naga-Habanero-Mushroom-Pizza.jpeg" },
    { name: "Garlic Artichoke", description: "Savory garlic combined with artichoke goodness.", price: 20.36, category: "Pizza", image: "/menu_images/garlic-artichoke.jpg" },
    { name: "Garlic Ghee Mushroom", description: "Rich garlic ghee flavor enhanced by mushrooms.", price: 20.06, category: "Pizza", image: "/menu_images/garlic-ghee-mushroom.jpg" },
    { name: "Veggie Pizza", description: "Bursting with fresh vegetables and classic flavors.", price: 20.09, category: "Pizza", image: "/menu_images/veggie-pizza.jpg" },
    { name: "4 Cheez with Hot Honey", description: "An indulgent mix of four cheeses drizzled with hot honey.", price: 20.22, category: "Pizza", image: "/menu_images/4cheez-with-hot-honey.jpg" },
    { name: "Classic Cheese Pizza", description: "Traditional blend of cheeses for a timeless taste.", price: 18.72, category: "Pizza", image: "/menu_images/classic-cheese-pizza.jpg" },
    { name: "Alfredo Cheese Pizza", description: "Cheesy delight with a creamy Alfredo sauce twist.", price: 19.06, category: "Pizza", image: "/menu_images/alfredo-cheese-pizza.jpg" },
    { name: "Margarita", description: "Classic tomato, mozzarella, and basil.", price: 18.44, category: "Pizza", image: "/menu_images/margherita.jpg" },
    { name: "Naga Habanero Balachao", description: "Robust flavors with a spicy Naga Habanero kick.", price: 17.91, category: "Pizza", image: "/menu_images/Naga-Habanero-Balachao-Pizza.jpeg" },
    { name: "Customized Pizza", description: "Build your perfect pizza with our customizable options.", price: 24.06, category: "Pizza", image: "/menu_images/customize.jpeg" },
    { name: "Half & Half", description: "Enjoy two different pizzas in one with our Half & Half.", price: 26.08, category: "Pizza", image: "/menu_images/half-half.jpg" },
    { name: "Alfredo Pasta", description: "Creamy pasta cooked to rich perfection.", price: 12.64, category: "Pizza", image: "/menu_images/alfredo-pasta.png" },
    { name: "Tomato Basil Pasta", description: "Fresh tomato paired with aromatic basil pasta.", price: 11.65, category: "Pizza", image: "/menu_images/tomato-basil-pasta.jpg" },
    { name: "Naga Habanero Pasta", description: "Pasta with a fiery touch of Naga Habanero.", price: 12.18, category: "Pizza", image: "/menu_images/Naga-Habanero-Pasta.jpg" },
    { name: "Beef Chopped Cheese", description: "Hearty beef chopped cheese, perfect for a quick bite.", price: 8.32, category: "Pizza", image: "/menu_images/beef-chopped-cheese-wrap.jpg" },
    { name: "Chicken Wrap", description: "Tender chicken wrapped with fresh vegetables.", price: 8.34, category: "Pizza", image: "/menu_images/chicken-wrap.jpg" },
    { name: "Mushroom Wrap", description: "Savory mushrooms and herbs enveloped in a wrap.", price: 8.89, category: "Pizza", image: "/menu_images/mushroom-wrap.jpg" },
    { name: "Paneer Wrap", description: "Indian-inspired paneer wrapped with spices and veggies.", price: 8.29, category: "Pizza", image: "/menu_images/paneer-wrap.jpg" },
    { name: "Soda (Can)", description: "A refreshing soda served in a can.", price: 2.55, category: "Pizza", image: "/menu_images/soda.jpg" },
    { name: "Water (small)", description: "Crisp and refreshing small water bottle.", price: 1.99, category: "Pizza", image: "/menu_images/water.jpg" },
    { name: "Hot Honey", description: "Sweet and spicy hot honey drizzle to elevate flavors.", price: 1.99, category: "Pizza", image: "/menu_images/hot-honey.jpg" },
    { name: "Ranch", description: "Creamy ranch dressing, perfect for dipping.", price: 0.99, category: "Pizza", image: "/menu_images/ranch.jpg" },
    { name: "Naga Dip", description: "A spicy dip made with Naga ingredients for extra heat.", price: 1.99, category: "Pizza", image: "/menu_images/naga-dip.jpg" },
    { name: "Red Peppers Bags 3", description: "Crunchy red pepper bags for a zesty snack.", price: 0.99, category: "Pizza", image: "/menu_images/red-pepper.jpg" },
    { name: "Parmesan Bags 3", description: "Rich Parmesan bags to add a cheesy touch.", price: 0.99, category: "Pizza", image: "/menu_images/parmesan.jpg" },
    { name: "Side Olives", description: "Tangy olives, a classic side for pizzas.", price: 0.99, category: "Pizza", image: "/menu_images/side-olives.jpg" },
    { name: "Side Jalapeno", description: "Spicy jalapeno slices to kick up the flavor.", price: 0.99, category: "Pizza", image: "/menu_images/side-jalapeno.jpg" },
    { name: "Side Garlic Mayo", description: "Smooth and creamy garlic mayo for dipping.", price: 0.99, category: "Pizza", image: "/menu_images/Garlic-Mayo.jpg" },
    { name: "Marinara Sauce", description: "Traditional marinara sauce bursting with Italian herbs.", price: 1.99, category: "Pizza", image: "/menu_images/marinara-sauce.jpg" },
    { name: "14\" Pie", description: "A large 14-inch pizza, perfect for sharing.", price: 12, category: "Pizza", image: "/menu_images/14-pie.jpg" },
    { name: "Aged Parmesan", description: "Finely aged Parmesan for a robust and savory flavor.", price: 1.99, category: "Pizza", image: "/menu_images/aged-parmesan.jpg" },
    { name: "Side Cilantro", description: "Fresh cilantro leaves to brighten up any dish.", price: 0.99, category: "Pizza", image: "/menu_images/side-cilantro.jpg" },
    { name: "Side Basil", description: "Fragrant basil to complete your pizza experience.", price: 0.99, category: "Pizza", image: "/menu_images/side-basil.jpg" },
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
