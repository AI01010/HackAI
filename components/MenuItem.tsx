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
    <div className="bg-white hover:bg-gray-100 transition-colors duration-300 rounded-lg shadow-md p-4 flex flex-col h-full">
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
      </div>
    </div>
  );
};

export default MenuItem;