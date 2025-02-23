import { render } from "@testing-library/react-native";

import Home from "../src/screens/Home";

describe("Home screen", () => {
  it("test", () => {
    const check = true;
    expect(check).toBe(true);
  });

  it("renders properly", () => {
    render(<Home />);
  });

  it("matches snapshot", () => {
    const tree = render(<Home />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("has 6 children", () => {
    const tree = render(<Home />);
    expect(tree.toJSON().children.length).toBe(6);
  });

  it("has matches testID", () => {
    const tree = render(<Home />);
    expect(tree.findByTestId("test-id")).toBeTruthy();
  });
});
