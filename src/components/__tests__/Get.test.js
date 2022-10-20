import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Get from "./../Get";

afterEach(() => cleanup());

let dummy = [
  {
    id: 1,
    first_name: "First Name 1",
    last_name: "Last Name 1"
  },
  {
    id: 2,
    first_name: "First Name 2",
    last_name: "Last Name 2"
  },
];

test("check if all values of props are shown (for users/)",  () => {
    render(<Get dummy={dummy} />);
    const users = screen.queryAllByTestId("user")
    expect(users).toHaveLength(2)
})

test("check if rendered value is correct (for users/:id)", ()=>{
    render(<Get dummy={dummy} />);
    const user1 = screen.getByTestId("user1-name")
    const user2 = screen.getByTestId("user2-name")

    expect(user1).toHaveTextContent(dummy[0].first_name+" "+dummy[0].last_name)
    expect(user2).toHaveTextContent(dummy[1].first_name+" "+dummy[1].last_name)
})