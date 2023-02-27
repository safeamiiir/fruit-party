import { render } from "@testing-library/react";
import BasketOfFruits from "../App";
test("renders Slider component", () => {
  const { getAllByTestId } = render(<BasketOfFruits />);
  const fruitRow = getAllByTestId("fruit-row");
  expect(fruitRow[0]).toHaveTextContent("0 - oranges");
  // expect(fruitRow[1]).toHaveTextContent("1 - grapefruits");
  expect(fruitRow[4]).toHaveTextContent("4 - strawberries");
});
