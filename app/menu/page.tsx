'use client';

import Navbar from "@/components/Navbar";
import MenuItem from '@/components/MenuItem';

const menuItems = [
    { name: "Korean BE Pizza", description: "", price: 24.1, category: "Pizza", image: "/images/korean-be.jpg" },
    { name: "Naga Hab Pizza", description: "", price: 23.34, category: "Pizza", image: "/images/naga-hab.jpg" },
    { name: "Beef Taco Pizza", description: "", price: 22.96, category: "Pizza", image: "/images/beef-taco.jpg" },
    { name: "Meatlover Pizza", description: "", price: 25.82, category: "Pizza", image: "/images/meatlover.jpg" },
    { name: "Beef Pepp Pizza", description: "", price: 20.92, category: "Pizza", image: "/images/beef-pepp.jpg" },
    { name: "Harissa CI Pizza", description: "", price: 22.27, category: "Pizza", image: "/images/harissa-ci.jpg" },
    { name: "Bengali Be Pizza", description: "", price: 25.42, category: "Pizza", image: "/images/bengali-be.jpg" },
    { name: "Alfredo Ch Pizza", description: "", price: 20.58, category: "Pizza", image: "/images/alfredo-ch.jpg" },
    { name: "Naga Hab Pizza", description: "", price: 21.67, category: "Pizza", image: "/images/naga-hab.jpg" },
    { name: "Naga Hab Pizza", description: "", price: 19.54, category: "Pizza", image: "/images/naga-hab.jpg" },
    { name: "Garlic Arti Pizza", description: "", price: 20.36, category: "Pizza", image: "/images/garlic-arti.jpg" },
    { name: "Garlic Ghe Pizza", description: "", price: 20.06, category: "Pizza", image: "/images/garlic-ghe.jpg" },
    { name: "Veggie Piz Pizza", description: "", price: 20.09, category: "Pizza", image: "/images/veggie-piz.jpg" },
    { name: "4Cheez wi Pizza", description: "", price: 20.22, category: "Pizza", image: "/images/4cheez-wi.jpg" },
    { name: "Classic Ch Pizza", description: "", price: 18.72, category: "Pizza", image: "/images/classic-ch.jpg" },
    { name: "Alfredo Ch Pizza", description: "", price: 19.06, category: "Pizza", image: "/images/alfredo-ch.jpg" },
    { name: "Margarita Pizza", description: "Classic tomato, mozzarella, and basil", price: 18.44, category: "Pizza", image: "/images/margherita.jpg" },
    { name: "Naga Hab Pizza", description: "", price: 17.91, category: "Pizza", image: "/images/naga-hab.jpg" },
    { name: "Customize Pizza", description: "Choose your toppings!", price: 24.06, category: "Pizza", image: "/images/customize.jpg" },
    { name: "Half & Hal Pizza", description: "Two pizzas in one!", price: 26.08, category: "Pizza", image: "/images/half-hal.jpg" },
    { name: "Alfredo Pa Pizza", description: "", price: 12.64, category: "Pizza", image: "/images/alfredo-pa.jpg" },
    { name: "Tomato Ba Pizza", description: "", price: 11.65, category: "Pizza", image: "/images/tomato-ba.jpg" },
    { name: "Naga Hab Pizza", description: "", price: 12.18, category: "Pizza", image: "/images/naga-hab.jpg" },
    { name: "Beef Chop Pizza", description: "", price: 8.32, category: "Pizza", image: "/images/beef-chop.jpg" },
    { name: "Chicken W Pizza", description: "", price: 8.34, category: "Pizza", image: "/images/chicken-w.jpg" },
    { name: "Mushroon Pizza", description: "", price: 8.89, category: "Pizza", image: "/images/mushroom.jpg" },
    { name: "Paneer Wi Pizza", description: "", price: 8.29, category: "Pizza", image: "/images/paneer-wi.jpg" },
    { name: "Soda (Car Pizza", description: "", price: 2.55, category: "Pizza", image: "/images/soda.jpg" },
    { name: "Water (sm Pizza", description: "", price: 1.99, category: "Pizza", image: "/images/water.jpg" },
    { name: "Hot Honey Pizza", description: "", price: 1.99, category: "Pizza", image: "/images/hot-honey.jpg" },
    { name: "Ranch Pizza", description: "", price: 0.99, category: "Pizza", image: "/images/ranch.jpg" },
    { name: "Naga Dip Pizza", description: "", price: 1.99, category: "Pizza", image: "/images/naga-dip.jpg" },
    { name: "Red Peppe Pizza", description: "", price: 0.99, category: "Pizza", image: "/images/red-peppe.jpg" },
    { name: "Parmesar Pizza", description: "", price: 0.99, category: "Pizza", image: "/images/parmesar.jpg" },
    { name: "Side Olive Pizza", description: "", price: 0.99, category: "Pizza", image: "/images/side-olive.jpg" },
    { name: "Side Jalap Pizza", description: "", price: 0.99, category: "Pizza", image: "/images/side-jalap.jpg" },
    { name: "Side Garlic Pizza", description: "", price: 0.99, category: "Pizza", image: "/images/side-garlic.jpg" },
    { name: "Marinara Pizza", description: "", price: 1.99, category: "Pizza", image: "/images/marinara.jpg" },
    { name: "14\" Pie Pizza", description: "", price: 12, category: "Pizza", image: "/images/14-pie.jpg" },
    { name: "Aged Parmesan", description: "", price: 1.99, category: "Pizza", image: "/images/aged-parmesan.jpg" },
    { name: "Side Cilantro", description: "", price: 0.99, category: "Pizza", image: "/images/side-cilantro.jpg" },
    { name: "Side Basil", description: "", price: 0.99, category: "Pizza", image: "/images/side-basil.jpg" },
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
