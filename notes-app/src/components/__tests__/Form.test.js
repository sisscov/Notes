import React from "react";
import Form from "../Form";
import { render, screen, fireEvent } from "@testing-library/react";

describe(" From Component", () => {
  it("Should render form component", () => {
    render(<Form />);
    const inputElement = screen.getByPlaceholderText("Your note text...");
    fireEvent.change(inputElement, { target: { value: "abc" } });
    expect(inputElement.value).toBe("abc");
  });
});
