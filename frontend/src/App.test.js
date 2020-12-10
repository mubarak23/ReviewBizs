import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//<Route pat="/user/login" component={LoginScreen} />
//         <Route path="/user/home" component={Home} />
