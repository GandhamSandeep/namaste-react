import { render, screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


describe("ContactUs Page test cases", ()=>{

  // beforeAll(()=>{
  //     console.log("Before All");
  // });

  // beforeEach(()=>{
  //   console.log("Before Each");
  // })

  // afterAll(()=>{
  //   console.log("After All");
  // });

  // afterEach(()=>{
  //   console.log("After Each");
  // })
  

  it("Should load Cantact Us Component", ()=>{
  
    render(<ContactUs />);
  
    const heading = screen.getByRole("heading");
  
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  
  it("Should load button Cantact Us Component", ()=>{
  
    render(<ContactUs />);
  
    const button = screen.getByRole("button");
  
    //Assertion
    expect(button).toBeInTheDocument();
  });
  
  it("Should load button Cantact Us Component", ()=>{
    render(<ContactUs />);
  
    const inputName = screen.getAllByPlaceholderText("name");
  
    // console.log(inputName);
    inputName.forEach(input=>{
      //Assertion
      expect(input).toBeInTheDocument();
    })
  
  });
  
  it("should load 2 nput boxes on the component", ()=>{
    render(<ContactUs />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
  
    // console.log(inputBoxes); // object will display
  
    //Assertion
    expect(inputBoxes.length).toBe(2);
  })

})
