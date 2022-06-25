import { render } from "@testing-library/react-native";

import Map from "../src/screens/Map";

describe("Home screen", () => {
  it("test", () => {
    const check = true;
    expect(check).toBe(true);
  });

  it("renders properly", () => {
    render(<Map />);
  });

  it("has 1 child", () => {
    const tree = render(<Map />);
    expect(tree.toJSON().children.length).toBe(1);
  });
});