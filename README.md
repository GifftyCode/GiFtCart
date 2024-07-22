
# GIFtCart

GIFtCart is a React-based shopping cart application. It demonstrates how to use `useContext` and `useReducer` for state management in a React application. This README provides a step-by-step guide on how these hooks are used within the project.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [State Management](#state-management)
    - [Context Setup](#context-setup)
    - [Reducer Setup](#reducer-setup)
    - [Local Storage Integration](#local-storage-integration)
5. [Components Overview](#components-overview)
6. [License](#license)

## Introduction

GIFtCart is designed to help newbie like me understand and implement a shopping cart using React hooks. It leverages `useContext` to provide global state and `useReducer` to manage state transitions, along with local storage to persist the state.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GifftyCode/GIFtCart.git
   cd GIFtCart
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

## Usage

1. **Home Page:**

   The home page displays a list of products that users can add to their cart.

2. **Cart Page:**

   The cart page shows the products that have been added to the cart, along with the total price. Users can remove products from the cart.

## State Management

### Context Setup

The context is created using `createContext` and provides the cart state and actions to components that need them. The context provider wraps the application to make the cart state available globally.

- **Creating the Context:** 
  - A context is created with an initial state containing an empty cart list and a total of 0.
  - The context is then exported for use in other components.

- **Using the Context Provider:**
  - The `CartProvider` component uses the `useReducer` hook to manage the cart state.
  - It also uses `useEffect` to persist the state to local storage whenever the state changes.
  - The context provider wraps the main application component to provide state and dispatch functions to the entire app.

### Reducer Setup

The reducer manages state transitions based on dispatched actions. It defines how the state should change in response to actions such as adding or removing items from the cart.

- **Defining Actions:**
  - Actions are defined for adding items to the cart, removing items from the cart, and updating the total price.
  - Each action updates the state accordingly and returns the new state.

- **Handling State Transitions:**
  - The `cartReducer` function handles the state transitions based on the action type.
  - It updates the state by adding or removing products and recalculating the total price.

### Local Storage Integration

Local storage is used to persist the cart state across page refreshes. 

- **Saving State to Local Storage:**
  - The `useEffect` hook is used to save the cart state to local storage whenever it changes.
  - This ensures that the cart state is persistent across page reloads.

- **Loading State from Local Storage:**
  - The initial state for the `useReducer` hook is set by checking if there is any saved state in local storage.
  - If a saved state is found, it is used as the initial state; otherwise, the default initial state is used.

## Components Overview

### Key Components

1. **Header:**
   - Displays the logo, navigation links, and the cart item count.

2. **Home:**
   - Displays a list of products that users can add to the cart.

3. **Cart:**
   - Shows the products added to the cart and the total price.
   - Allows users to remove products from the cart.

4. **ProductCard:**
   - Displays individual product details and allows users to add or remove products from the cart.

5. **CartCard:**
   - Displays individual products in the cart with an option to remove them.

## License

This project is licensed under the MIT License.

