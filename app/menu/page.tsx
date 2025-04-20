'use client';

import Navbar from "@/components/Navbar";
import MenuItem from '@/components/MenuItem';

// Full Menu based on OCR
const menuItems = [
    { name: "Korean BE Pizza", description: "", price: 18.99, category: "Pizza", image: "/images/korean-be.jpg" }, // Replace with actual image
    { name: "Naga Hab Pizza", description: "", price: 19.99, category: "Pizza", image: "/images/naga-hab.jpg" }, // Replace with actual image
    { name: "Beef Taco Pizza", description: "", price: 17.99, category: "Pizza", image: "/images/beef-taco.jpg" }, // Replace with actual image
    { name: "Meatlover Pizza", description: "", price: 20.99, category: "Pizza", image: "/images/meatlover.jpg" }, // Replace with actual image
    { name: "Beef Pepp Pizza", description: "", price: 18.49, category: "Pizza", image: "/images/beef-pepp.jpg" }, // Replace with actual image
    { name: "Harissa CI Pizza", description: "", price: 19.49, category: "Pizza", image: "/images/harissa-ci.jpg" }, // Replace with actual image
    { name: "Bengali Be Pizza", description: "", price: 21.99, category: "Pizza", image: "/images/bengali-be.jpg" }, // Replace with actual image
    { name: "Alfredo Ch Pizza", description: "", price: 17.49, category: "Pizza", image: "/images/alfredo-ch.jpg" }, // Replace with actual image
    { name: "Garlic Arti Pizza", description: "", price: 16.99, category: "Pizza", image: "/images/garlic-arti.jpg" }, // Replace with actual image
    { name: "Garlic Ghe Pizza", description: "", price: 15.99, category: "Pizza", image: "/images/garlic-ghe.jpg" }, // Replace with actual image
    { name: "Veggie Piz Pizza", description: "", price: 14.99, category: "Pizza", image: "/images/veggie-piz.jpg" }, // Replace with actual image
    { name: "4Cheez wi Pizza", description: "", price: 17.49, category: "Pizza", image: "/images/4cheez-wi.jpg" }, // Replace with actual image
    { name: "Classic Ch Pizza", description: "", price: 15.49, category: "Pizza", image: "/images/classic-ch.jpg" }, // Replace with actual image
    { name: "Alfredo Ch Pizza", description: "", price: 17.99, category: "Pizza", image: "/images/alfredo-ch.jpg" }, // Replace with actual image
    { name: "Margarita Pizza", description: "Classic tomato, mozzarella, and basil", price: 12.99, category: "Pizza", image: "/images/margherita.jpg" },
    { name: "Customize Pizza", description: "Choose your toppings!", price: 16.49, category: "Pizza", image: "/images/customize.jpg" }, // Replace with actual image
    { name: "Half & Hal Pizza", description: "Two pizzas in one!", price: 18.49, category: "Pizza", image: "/images/half-hal.jpg" }, // Replace with actual image
    { name: "Alfredo Pa Pizza", description: "", price: 17.49, category: "Pizza", image: "/images/alfredo-pa.jpg" }, // Replace with actual image
    { name: "Tomato Ba Pizza", description: "", price: 14.49, category: "Pizza", image: "/images/tomato-ba.jpg" }, // Replace with actual image
    { name: "Beef Chop Pizza", description: "", price: 19.49, category: "Pizza", image: "/images/beef-chop.jpg" }, // Replace with actual image
    { name: "Chicken W Pizza", description: "", price: 17.99, category: "Pizza", image: "/images/chicken-w.jpg" }, // Replace with actual image
    { name: "Mushroom Pizza", description: "", price: 16.49, category: "Pizza", image: "/images/mushroom.jpg" }, // Replace with actual image
    { name: "Paneer Wr Pizza", description: "", price: 18.49, category: "Pizza", image: "/images/paneer-wr.jpg" }, // Replace with actual image
    { name: "Soda (Car Pizza", description: "", price: 3.00, category: "Pizza", image: "/images/soda.jpg" }, // Replace with actual image
    { name: "Water (sm Pizza", description: "", price: 1.50, category: "Pizza", image: "/images/water.jpg" }, // Replace with actual image
    { name: "Hot Honey Pizza", description: "", price: 19.99, category: "Pizza", image: "/images/hot-honey.jpg" }, // Replace with actual image
    { name: "Ranch Pizza", description: "", price: 2.00, category: "Pizza", image: "/images/ranch.jpg" }, // Replace with actual image
    { name: "Naga Dip Pizza", description: "", price: 2.50, category: "Pizza", image: "/images/naga-dip.jpg" }, // Replace with actual image
    { name: "Red Peppe Pizza", description: "", price: 17.49, category: "Pizza", image: "/images/red-peppe.jpg" }, // Replace with actual image
    { name: "Parmesar Pizza", description: "", price: 2.00, category: "Pizza", image: "/images/parmesar.jpg" }, // Replace with actual image
    { name: "Side Olive Pizza", description: "", price: 1.00, category: "Pizza", image: "/images/side-olive.jpg" }, // Replace with actual image
    { name: "Side Jalap Pizza", description: "", price: 1.00, category: "Pizza", image: "/images/side-jalap.jpg" }, // Replace with actual image
    { name: "Side Garlic Pizza", description: "", price: 1.00, category: "Pizza", image: "/images/side-garlic.jpg" }, // Replace with actual image
    { name: "Marinara Pizza", description: "", price: 13.99, category: "Pizza", image: "/images/marinara.jpg" }, // Replace with actual image
    { name: "14\" Pie Pizza", description: "", price: 19.99, category: "Pizza", image: "/images/14-pie.jpg" }, // Replace with actual image
    { name: "Aged Parmesan", description: "", price: 2.50, category: "Pizza", image: "/images/aged-parmesan.jpg" }, // Replace with actual image
    { name: "Side Cilantro", description: "", price: 1.00, category: "Pizza", image: "/images/side-cilantro.jpg" }, // Replace with actual image
    { name: "Side Basil", description: "", price: 1.00, category: "Pizza", image: "/images/side-basil.jpg" }, // Replace with actual image
];

export default function MenuPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex justify-center items-start p-8 pt-20">
                <div className="bg-white bg-opacity-90 rounded-lg shadow-lg max-w-7xl w-full p-8">
                    <h1 className="text-3xl font-bold text-[#3e2c1c] mb-6 text-center">Our Menu</h1>
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
