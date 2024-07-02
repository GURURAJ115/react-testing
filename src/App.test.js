import { render, screen } from '@testing-library/react';
import App from './App';

// *.test.js OR *.spec.js OR *.js(__tests__) Folder
// it("example test one", ()=>{})

  test("example test one", ()=>{
    render(<App/>);
    //test whether button exists or not 
    // So first get the button 
    const btnElement = screen.getByRole("button",{name: "Click here", exact: false})
    const btnElement2 = screen.queryByRole("button",{name: "Click now", exact: false})
    // perform assertion 
    expect(btnElement).toBeInTheDocument();
    expect(btnElement2).toBeNull();
    expect(btnElement2).not.toBeInTheDocument();
})