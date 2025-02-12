# React + Vite

# Service Sharing Web Application

## Live Website Link
https://services-project-3a57c.web.app/

## Project Description
This web application is a platform for users to share and book various services. Users can:

- Add, update, and delete their own services.
- Browse services shared by others.
- View detailed service information.
- Book services and manage booking statuses.
- Update the status of services booked by others.

## Features
1. **Authentication**: Email/password-based login and registration, along with Google social login.
2. **Dynamic Routing**: Role-based routes, including public and private routes.
3. **Responsive Design**: Optimized for mobile, tablet, and desktop views.
4. **Search and Filter**: Search for services by name and view paginated results.
5. **Theme Toggling**: Switch between light and dark themes.
6. **Dynamic Titling**: Page titles dynamically update based on the route.

## Pages and Routes

### Public Routes
- **Home**: Main landing page with a banner, popular services section, and additional dynamic sections.
- **All Services**: Displays all available services with search functionality.
- **Login**: User login page with email/password and Google social login.
- **Registration**: User registration page with required fields for name, email, password, and photo URL.
- **404 Page**: A custom error page with a button to return to the homepage.

### Private Routes
- **Add Service**: Form to add new services with provider details.
- **Manage Services**: Allows users to edit or delete services they’ve added.
- **Booked Services**: Displays services booked by the user.
- **Service To-Do**: Displays services booked by others with options to update status.
- **Service Details**: Detailed information about a specific service with a booking option.

## Technologies Used

### Frontend
- React
- React Router
- Tailwind CSS
- DaisyUI
- Framer Motion/Data AOS (for animations)

### Backend
- Node.js
- Express
- MongoDB

### Authentication
- Firebase Authentication
- JWT (JSON Web Token) for secure access to private routes

## Key Features Implementation
1. **Authentication**: Firebase authentication for both email/password and Google login.
2. **JWT Integration**: Secures private routes and verifies user identity.
3. **Dynamic Navbar**:
   - Non-logged-in users: Home, Services, and Login.
   - Logged-in users: Home, Services, Dashboard (dropdown menu), and Logout.
4. **Service Management**: Users can add, update, and delete their own services.
5. **Service Booking**: Users can book services, with booking details stored in the database.
6. **Service Status Update**: Providers can update booking statuses using a dropdown (Pending, Working, Completed).
7. **Search and Pagination**: Users can search for services and navigate paginated results.
8. **Responsive Design**: Ensures a seamless user experience across devices.
9. **Error Handling**: Custom alerts for success and error messages.

## Deployment
- Frontend hosted on [Netlify/Surge/Other Hosting Platform].
- Backend hosted on [Render/Heroku/Vercel/Other Hosting Platform].
- Environment variables configured to secure sensitive information.

## How to Run Locally
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Create a `.env` file and add your Firebase and MongoDB credentials.
5. Start the development server using `npm start`.

## Optional Features
- Loading spinner for data fetch operations.
- Implemented pagination on the "All Services" page.
