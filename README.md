# Atlan-Frontend

Description:

This project is a web application that allows users to explore, learn about, and create various AI models. It features a user-friendly interface with functionalities for:

Login/SignUp: Users can login/signup on the website, and can avail the functionalities of bookmarking a model and creating a new one.
Explore AI Models: Users can explore a comprehensive list of AI models. Users can also search for specific models, and the models are displayed in alphabetical order.
Learning about models: Each model has a dedicated page that provides detailed information, such as the model's description, provider. The user can try a model by entering a text input and can see the desired output (dummy).
Creating new models: Users can add new models to the system by providing relevant information such as the model title, provider, and description.
Bookmarking models: Users can save/unsave models they find interesting for later reference.
Featured wall (Trendings): Users can see which models are trendings and are most bookmarked by other users. The top 8 models are displayed on the “Trendings” page and are sorted as per the number of bookmarks. The models with the same number of bookmarks are sorted in alphabetical order.
Responsiveness: The website is fully responsive and can be easily viewed on all screens.
Tech Stack:

React: A JavaScript library for building user interfaces.
Vite: A frontend build tool that focuses on providing a fast development experience for modern web projects.
React Router: React Router is utilized for declarative routing in the application, enabling navigation between different components/pages.
React Bootstrap: React Bootstrap is used for responsive design and layout.
Firebase Authentication: Firebase Authentication is used for user authentication, enabling features like login, logout, and account creation.
Axios: Axios is utilized for making HTTP requests, likely for fetching data from APIs.
HTML/CSS: Basic HTML and CSS are used for structuring the components and styling the application, respectively.
ESLint: A tool for identifying and reporting patterns found in ECMAScript/JavaScript code.
Performance Optimizations
Description:

I've implemented various optimizations to enhance performance and decrease load times:

React Context API: Utilized React Context API to efficiently manage data for improved user experience.
Code Splitting: Employed code splitting to break down code into smaller bundles for faster loading.
Lazy Loading: Implemented lazy loading to delay non-critical resource loading for improved performance.
Image Optimization: Optimized images by reducing file sizes for quicker loading times.
Caching: Cached frequently accessed resources locally to speed up subsequent visits.
Minification: Minified the CSS code by removing unnecessary characters such as whitespace and comments. This reduces the overall size of the downloaded code, resulting in faster loading times.
Development Commands:

npm install: Installs all the required dependencies from the package.json file.
npm create vite@latest project -- --template react
npm install react-router-dom --legacy-peer-deps
npm install react-bootstrap bootstrap
npm install axios
npm install firebase
npm run dev: Starts the development server and runs the application in development mode.
Page Load Time
Description:

The page load time of the application is 95.5 ms. This was measured using the following code snippet:
