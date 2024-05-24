import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "src/gladoo.jpeg");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  
})
//contacts
test("the page shows information the user types into the contact form field", () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/your email address/i)).toBeInTheDocument()
});
 test("the page shows information the user types into the contact form field",()=>{
  render(<App/>)
  const contactName = screen.getAllByLabelText(/your name/i);
  const contactEmail = screen.getAllByLabelText(/your email/i);

  userEvent.type(contactName,"Joy");
  userEvent.type(contactEmail,"joy@example.com");

  expect(contactName).toHaveValue("Joy")
  expect(contactEmail).toHaveValue("joy@example,com");
 })
  

 //checkboxes.
test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);
  expect(screen.getByLabelText(/frontend development/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/backend development/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/mobile development/i)).toBeInTheDocument();
});

test("the checkboxes are initially unchecked", () => {
  render(<App />);
  const frontendCheckbox = screen.getByLabelText(/frontend development/i);
  const backendCheckbox = screen.getByLabelText(/backend development/i);
  const mobileCheckbox = screen.getByLabelText(/mobile development/i);

  expect(frontendCheckbox).not.toBeChecked();
  expect(backendCheckbox).not.toBeChecked();
  expect(mobileCheckbox).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
});
