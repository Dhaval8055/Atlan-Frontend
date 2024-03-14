# Atlan-Frontend
## Description
This project is a web application that allows users to explore, learn about, and create various AI models. It features a user-friendly interface with functionalities for:

* **Login/SignUp**: Users can login/signup on the website, and can avail the functionalities of bookmarking a model and creating a new one.
* **Explore AI Models**: Users can explore a comprehensive list of AI models. Users can also search for specific models, and the models are displayed in alphabetical order. 
* **Learning about models**: Each model has a dedicated page that provides detailed information, such as the model's description, provider. The user can try a model by entering a text input and can see the desired output (dummy). 
* **Creating new models**: Users can add new models to the system by providing relevant information such as the model title, provider, and description.
* **Bookmarking models**: Users can save/unsave models they find interesting for later reference. 
* **Featured wall (Trendings)**: Users can see which models are trendings and are most bookmarked by other users. The top 8 models are displayed on the “Trendings” page and are sorted as per the number of bookmarks. The models with the same number of bookmarks are sorted in alphabetical order.
* **Responsiveness**: The website is fully responsive and can be easily viewed on all screens.

## Technology Stack:

* **React**: A JavaScript library for building user interfaces.
* **Vite**: A frontend build tool that focuses on providing a fast development experience for modern web projects.
* **React Router**: React Router is utilized for declarative routing in the application, enabling navigation between different components/pages.
* **React Bootstrap**: React Bootstrap is used for responsive design and layout.
* **Firebase Authentication**: Firebase Authentication is used for user authentication, enabling features like login, logout, and account creation.
* **Axios**: Axios is utilized for making HTTP requests, likely for fetching data from APIs.
* **HTML/CSS**: Basic HTML and CSS are used for structuring the components and styling the application, respectively.
* **ESLint**: A tool for identifying and reporting patterns found in ECMAScript/JavaScript code.


## Page Load Time:

The page load time of the application is 95.5 ms. This was measured using the following code snippet:

```javascript
 const loadStartTime = performance.now();
    window.addEventListener('load', () => {
      const loadEndTime = performance.now();
      const pageLoadTime = loadEndTime - loadStartTime;
      console.log('Page load time:', pageLoadTime, 'ms');
    });
```

## Performance Optimizations:

I've implemented various optimizations to enhance performance and decrease load times:

* **React Context API**: Utilized React Context API to efficiently manage data for improved user experience.
* **Code Splitting**: Employed code splitting to break down code into smaller bundles for faster loading.
* **Lazy Loading**: Implemented lazy loading to delay non-critical resource loading for improved performance.
* **Image Optimization**: Optimized images by reducing file sizes for quicker loading times.
* **Caching**: Cached frequently accessed resources locally to speed up subsequent visits.
* **Minification**: Minified the CSS code by removing unnecessary characters such as whitespace and comments. This reduces the overall size of the downloaded code, resulting in faster loading times.

## Development Commands:

* **npm install**: Installs all the required dependencies from the package.json file.
* **npm create vite@latest project -- --template react**
* **npm install react-router-dom --legacy-peer-deps**
* **npm install react-bootstrap bootstrap**
* **npm install axios**
* **npm install firebase**
* **npm run dev**: Starts the development server and runs the application in development mode.

## Limitations and future scope of the project:

1. **Use of Mock API for Data**: Creating a new JSON Placeholder link with my own data was paid. In light of this, using a dummy JSON Placeholder link such as "https://jsonplaceholder.typicode.com/posts" was considered to keep the process cost-effective.

On the other hand, I am also contemplating the use of a tool like json-server to set up a local REST API with my own JSON data. However, this poses the need to run the local JSON server before launching the website to ensure the mock data reflects in the interface.

2. **Session-Based Data Persistence**: When a user bookmarks a model or creates a new one, it's only saved until their current session ends. Once they log out or the session expires, the bookmarked models or newly created ones disappear. This limitation can be eliminated by using a database and backend.

3. **Lack of working models**: The project cannot incorporate working models directly within the website. Attempts to use external APIs for this purpose were hindered by issues such as access restrictions or subscription problems, as shown in the provided screenshot. Some AI model APIs that were tried to incorporate in this project were -
* Image-to-text OPENAI like - DALL-E (paid)
* Text-to-Text OPENAI like - Chatgpt
* Text-to-Image like- Hugging face (Link)
Separate API keys were generated and their endpoints were used to use these APIs but they were paid.
![atlan1](https://github.com/Dhaval8055/Atlan-Frontend/assets/104723685/0713522a-3515-4af6-b041-98de1db0a078)


4. **Single-User Bookmarks**: Due to the absence of backend functionality, bookmarks are only visible to the user who created them. Other users cannot see or interact with these bookmarks. This limits social features such as collaborative bookmarking or displaying trending model lists based on collective user interactions.

The above limitations can be overcome by using the backend, since the scope of this project was limited to frontend, the addition of some functionalities was hindered.

