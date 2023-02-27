import { fruits } from "./mock_fruit";

interface BasketOfFruitsProps {
  fruitsList: Array<{ typeName: string; items: string[] }>;
}

interface FruitNameProps {
  name: string;
  index: number;
}

const FruitName = ({ name, index }: FruitNameProps) => {
  return (
    <div data-testid="fruit-row">
      <span>{index}</span>
      <span> - </span>
      <span>{name}</span>
    </div>
  );
};

export const BasketOfFruits = ({ fruitsList }: BasketOfFruitsProps) => {
  if (!fruitsList.length) return <></>;
  let index = 0;
  return (
    <div>
      {fruitsList.map((fruitType) =>
        fruitType.items.map((name) => (
          <FruitName key={name} name={name} index={index++} />
        ))
      )}
    </div>
  );
};

// wrong versoin
// export const BasketOfFruits = ({ fruitsList }: BasketOfFruitsProps) => {
//   if (!fruitsList.length) return <></>;
//   return (
//     <div>
//       {fruitsList.map((fruitType) =>
//         fruitType.items.map((name, index) => (
//           <FruitName key={name} name={name} index={index} />
//         ))
//       )}
//     </div>
//   );
// };

export default function App() {
  return (
    <div className="App">
      <h1>Fruits Party!</h1>
      <BasketOfFruits fruitsList={fruits} />
    </div>
  );
}
