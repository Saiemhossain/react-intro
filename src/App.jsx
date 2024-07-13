/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import PizzaCard from "./components/PizzaCard";
import Profile from "./components/Profile"


function App() {
  const user = {
    name: 'Saim',
    img: 'https://images.pexels.com/photos/12346642/pexels-photo-12346642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    email: 'test@gmail.com',
    phone: '0265656956',
    theme: {
      backgroundColor: 'gray',
    },
  };

  const menu = [
    {
      id: 1,
      name: 'Pizza Mexican',
      price: 350,
      img: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Pizza Korian',
      price: 450,
      img: 'https://images.pexels.com/photos/11140957/pexels-photo-11140957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Pizza Indian',
      price: 250,
      img: 'https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        {menu.map(item => (
          <PizzaCard item={item} key={item.id} />
        ))}
      </div>
      <Profile data={user} />
    </>
  );
}

export default App
