# Frontend Task

## Problem

The task is developing a frontend part for an admin application where users can overview
data. Implement a simple admin interface for admin users, they need to be able to search
data in tables, sort columns, and filter.

## General rules for the task

- Your solution has to be based on React
- You can use every open source libraries and frameworks you’re comfortable with, as
  long as you specify what you’ve used
- Beside the libraries, all code must be written by yourself
- You’re allowed to use the internet for research

## Good to know

- Use JSON file (article-types.json) as fake API endpoint
- Feel free to hardcode things that you normally would not.
- We don’t need legacy browser support, we care about modern ones.
- Feel free to contact us if you have any questions regarding this task

## The table

- Shows all types with a pagination.
- Page size is 5 types per page.
- Pagination can be very simple.
- No need to handle URL changes.
- Implement at least one column that is sortable.
- Implement table filters for at least one column.
- Implement common table search (at least two columns affected)

# Solution

## Approach

- Admin interface is based on React.
- Additional libraries or frameworks were not used for deliviring solution,
  except react-router-dom which is just added as a potential future option.
- Code is written by me, with following usual practices and syntax.
- Used internet for occasional consultation of MDN and other resources regarding technical usage.

## Problems encountered

- JSON file and its content is not same for every record in it.
  - Some properties of record are unique for that particular record, which means that usual way of creating
    table was not possible, where we assume that all records have same properties but either with/without values
    (like when pulled out from database table). Example `defaultDropshipper`.

## Table implementation required

- All records are displayed initially with pagination set to page size of 5.
- Two columns are sortable, by `Acronym` and `Sort Order`.
- Two table filters can be applied, by `Group` and `Default Shipping Status`.
- Search is applied for two columns, by `Default Brand` and `titleDE`.

## Table implementation additional

- Added routing for current Articles page, simply as a usual usage.
- JSON file is added to `/assets` so that we can simulate a call to external endpoint.
- Selection of displayed columns is available with checkbox list per column.
  Readability purpose because displaying all columns is really wide.
- Sorting is available in two directions ASC and DESC - not mentioned if it is required so better to have it.
  - When sorting is activated for some column, records affected will be in different color
  - Heading cell will have simple arrow, according to sort direction
- Pagination has an option to select amount of rows to be displayed.
  Useful to display more records for easier readability.
- Pagination has a numbering information about displayed records for more info.
- Added .prettierrc file in project root for formatting guidelines.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
