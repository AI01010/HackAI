// app/menu/page.tsx
import MenuItem from '@/components/MenuItem';

// Mock data (replace with your actual data loading)
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
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Menu</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item) => (
                        <MenuItem key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
