import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import NavbarB from "../components/NavbarB";

describe("Testing Navbar component", ()=>{
    test("Should let write letters only", async() =>{
        render(<NavbarB/>);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, '123abc');
        expect(input).toHaveValue('abc')
    })

    test("Button should trigger event submit", ()=>{
        const handleSubmit = vi.fn();
        render(<NavbarB handleSubmit={handleSubmit}/>)
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(handleSubmit).toHaveBeenCalled();
    })
})