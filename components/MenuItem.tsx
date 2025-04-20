// components/MenuItem.tsx
import Image from 'next/image';

type MenuItem = {
    name: string;
    description: string;
    price: number;
    category: string; // e.g., "Pizza", "Sides", "Drinks"
    image?: string; // Optional image URL
};


type MenuItemProps = {
    item: MenuItem;
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full">
            {item.image && (
                <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="rounded-md object-cover mb-2"
                />
            )}
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="mt-auto flex justify-between items-center">
                <span className="text-gray-900 font-bold">${item.price.toFixed(2)}</span>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuItem;
