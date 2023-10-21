# Price Models Testing UI

This project is a simple React WebApp which utilises the Browser's Local Storage.

The purpose of the APP is to allow users to test and validate different pricing models and strategies by mocking data for sold products under the specific settings of the pricing model.

### Project Setup and Requirements

There are two main ways to run the project locally.

 1. By using **Node.js**
    
    - Install **Node.js**

    - In project's terminal run:
        
        `npm install`
        
        `npm start`

 2. By using **Docker**

    - Install **Docker Desktop**
        
        Build docker image of the project: 
        `docker build . -t price-models-testing-ui:1`

        Run a container from the created image (This will run the app and make it accessable on http://localhost:3000/): 
        `docker run --rm --name price-models-testing-ui -p 3000:3000 price-models-testing-ui:1`

        To stop and delete the running container run: `docker stop price-models-testing-ui`



### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
