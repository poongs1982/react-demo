import { render , fireEvent } from "@testing-library/react";
import TestingCounter from "./testing-counter";


describe('Counter', ()=>{
    it('Check initial value of count', ()=>{
        const {getByTestId} = render(<TestingCounter initialCount={0}></TestingCounter>)
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it('count should increment by 1 if increment button is clicked', () => {
        const {getByTestId, getByRole} = render(<TestingCounter initialCount={0}></TestingCounter>)
        const incrementBtn= getByRole("button", { name: 'Increment' });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(incrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1);
    });
    it('count should deccrement by 1 if deccrement button is clicked', () => {
        const {getByTestId, getByRole} = render(<TestingCounter initialCount={0}></TestingCounter>)
        const decrementBtn= getByRole("button", { name: 'Decrement' });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(0);
        fireEvent.click(decrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-1);
    });
    it('count should reset to 0 if reset button is clicked', () => {
        const {getByTestId, getByRole} = render(<TestingCounter initialCount={40}></TestingCounter>)
        const resetBtn= getByRole("button", { name: 'Reset' });
        const countValue1 = Number(getByTestId("count").textContent);
        expect(countValue1).toEqual(40);
        fireEvent.click(resetBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(0);
    });

})


// to run the test type this command
// npm run test