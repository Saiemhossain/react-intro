/* eslint-disable react/prop-types */
function PizzaCard({ item }) {
  console.log(item);
  const { img, name, price } = item;
  return (
    <>
      <a href="#" className="block">
        <img
          alt=""
          src= {img}
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-100 sm:text-xl">
         {name}
        </h3>

        <p className="mt-2 max-w-sm text-gray-200">
         ${price}
        </p>
      </a>
    </>
  );
}

export default PizzaCard;
