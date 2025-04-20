import Image from 'next/image';
import { Rye } from 'next/font/google';

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
});

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
    <div className={`group bg-white hover:bg-[#3e2c1c]/82 transition-colors duration-300 rounded-lg shadow-md p-4 flex flex-col h-full ${rye.className}`}>
      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className="rounded-md object-cover mb-2"
        />
      )}
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-1">
        {item.name}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-200 mb-2">
        {item.description}
      </p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-gray-900 font-bold group-hover:text-white">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;