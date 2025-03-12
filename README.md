# Blog Project

## Description
This is a blog project built using Node.js, Express, MongoDB, and EJS. The application allows users to register, log in, create, update, and delete blog posts with image uploads. Authentication is managed using Passport.js and sessions.

## Features
- User authentication with Passport.js (Register & Login)
- Session management using Express-Session
- Blog CRUD operations
- Image upload functionality using Multer
- Protected routes for authenticated users
- Dynamic content rendering with EJS

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript)
- Multer (for file uploads)
- Passport.js (for authentication)
- Express-Session (for session management)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Shubhamparekh04/BLOG-PASSPORT.git
   ```
2. Navigate to the project directory:
   ```sh
   cd BLOG-PASSPORT
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open the application in your browser:
   ```sh
   http://localhost:3000
   ```

## Default Login Credentials
- **Username:** admin
- **Password:** 123

## Folder Structure
```
BLOG-PASSPORT/
│── configs/
│── controller/
│   ├── credController.js
│   ├── userController.js
│── middleware/
│   ├── imageUpload.js
│   ├── passport.js
│   ├── redirectMiddleware.js
│── models/
│   ├── credentialsModel.js
│   ├── userModel.js
│── node_modules/
│── public/
│── router/
│── uploads/
│── views/
│── .gitignore
│── index.js
│── package.json
│── package-lock.json
```

## API Routes

### Authentication
- **POST** `/registerUser` - Register a new user
- **POST** `/checkLogin` - User login
- **GET** `/logout` - User logout (handled via Passport.js)

### Blog Operations
- **GET** `/clientHomepage` - View all blogs
- **GET** `/formPage` - View blog creation form (protected route)
- **POST** `/formPage` - Create a new blog post
- **GET** `/delete/:id` - Delete a blog post
- **GET** `/edit/:id` - View edit form
- **POST** `/update/:id` - Update blog post
- **GET** `/view/:id` - View single blog post

## Screenshots

*1. Home Page*
![HomePage](https://github.com/user-attachments/assets/da95a93d-0d39-48ac-a439-94b05aa39b1f)

*2. Login Page*
![LoginPage](https://github.com/user-attachments/assets/3c964d8a-e269-491b-8689-a4211c34da13)

*3. Blog Creation Form Page*
![Blog Creation](https://github.com/user-attachments/assets/810bbe00-9a44-4d7d-b911-7749e2ba372f)

*4. Edit Blog Form Page*
![Edit Blog](https://github.com/user-attachments/assets/97eb2a9c-2155-48dd-9847-ba33eec266d9)

*5. View Blog*
![View Blog](https://github.com/user-attachments/assets/524451bc-97ec-4c4f-886b-42a6f17cc1aa)

