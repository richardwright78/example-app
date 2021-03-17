# Example Shopping App

## Starting the app

1. Run `npm i`
2. Run `npm start`
3. The app will be available at http://localhost:3000

## Running the tests

1. Run `npm run test`
2. If prompted, pess 'a' to run all tests
## The task

Create a React application that loads products from an API and allows the user to manage the inventory by deleting unwanted products from the list. 

The basic user journey for this feature should be: 

- Display a grid of products with product image, promotion badge, name, current price and previous price.
- Toggle a selection of products. 
- User clicks a “Remove selected” button to remove the selected products from the list.

To finish up, create a stock level display by using the quantity and lowOnStock properties and use the available property to hide products that are not valid. 

- The available property from this API is a string rather than a boolean so it should be transformed to the correct type after the response from the API is received. 
- This API can return conflicting information, due to external dependencies, such as available: “TRUE” and quantity: 0, so make sure to capture these edge cases in the user interface. 

## Rationale

### Separation of concerns
App.js is largely concerned with fetching the data, rendering the grid of products and handling state, while the ProductCard component handles the logic of what to display in the card depending on the data.

### Clean, self contained React components
To keep components simple and file sizes small I extracted into seperate components when there was opportunity to delegate logic for displaying groups of elements, e.g the ProductCard and StockLevel components handling the logic for displaying their children. To further simplify I've kept styled components in separate files.

### Understanding of styling
While a component library has been used for speed, I've tried to demonstrate understanding of styling with a clean, responsive design.
## To do items
Given more time I'd like to:

1. Achieve complete test coverage. While the one test suite provides a good example, I would like to test all the components.
2. Better error handling. Rather than just logging errors to the console in App.js I'd like to display a usefull message to the user.