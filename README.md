# Credit Card Validator

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

This Angular-based project is designed to validate credit card information via a clean, user-friendly interface. The form includes fields for the user's name, card number, expiration date, and security code, all of which are rigorously validated.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **Name and Surname Input**: Allows users to input their name and surname.
- **Card Number Validation**: Validates the card number against standard patterns.
- **Expiry Date Validation**: Ensures the expiration date is formatted correctly and is in the future.
- **Security Code Validation**: Validates the card's CVV to ensure it meets length requirements.
- **Form Reset**: A "Clear" button to reset all form fields.
- **Form Submission**: The "Submit" button is only enabled when all fields are correctly validated.

  
## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/same-letter.git
    cd same-letter
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

Enter your name and surname.
Input your credit card number.
Provide the expiration date and security code.
Click "Submit" to validate the input data. If there are any validation errors, they will be displayed below the respective fields.

## License

This project is licensed under the MIT License.
