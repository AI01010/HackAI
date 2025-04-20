'use client';

import Navbar from "@/components/Navbar";
import MenuItem from '@/components/MenuItem';

// Mock data (replace with actual data loading)
const menuItems: MenuItem[] = [
    {
        name: "Margherita Pizza",
        description: "Classic tomato, mozzarella, and basil",
        price: 12.99,
        category: "Pizza",
        image: "/images/margherita.jpg"
    },
    {
        name: "Pepperoni Pizza",
        description: "Classic tomato, mozzarella, and pepperoni",
        price: 14.99,
        category: "Pizza",
        image: "/images/pepperoni.jpg"
    },
    {
        name: "BBQ Chicken Pizza",
        description: "Chicken, BBQ sauce, mozzarella, and basil",
        price: 16.99,
        category: "Pizza",
        image: "/images/bbqchicken.jpg"
    },
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
