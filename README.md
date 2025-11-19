# Share-Meal

## ✨ Features

- **User Authentication:** Users can easily **register and login** to the application.
- **Restricted Access:** Only registered users have access to essential pages, including:
  - Service Details Page
  - Add Service Page (for providers)
  - My Bookings Page (for clients)
- **Provider Management:** Registered users can **add and manage their service listings** (acting as service providers).
- **Booking and Review System:** Registered users can **book services** and **leave reviews/ratings** for the providers they've used.
- **Responsive Design:** The application is **fully responsive** and accessible on all devices (mobile, tablet, and desktop).
- **Theme Functionality:** Includes a user-friendly **dark and light theme** toggle.
- **Secure Authentication:** Utilizes **Firebase Authentication** for secure user management.

---

## 🛠️ Technology Stack

Hero Home is built with a modern and robust MERN-adjacent stack, utilizing the following key technologies:

### 💻 Frontend

| Technology                        | Description                                                                     |
| :-------------------------------- | :------------------------------------------------------------------------------ |
| **React**                         | Core library for building the user interface.                                   |
| **Tailwind CSS** & **DaisyUI**    | Utility-first CSS framework and component library for fast, responsive styling. |
| **Firebase**                      | Used specifically for **Authentication**.                                       |
| **Framer Motion**                 | Library for fluid animations and interactivity.                                 |
| **React Router**                  | For client-side routing.                                                        |
| **AOS**                           | Animate On Scroll library.                                                      |
| **React Hot Toast & SweetAlert2** | For attractive and functional notifications and alerts.                         |
| **Lucide React & React Icons**    | Icon libraries.                                                                 |
| **Swiper**                        | For creating modern touch-enabled sliders.                                      |
| **Recharts**                      | Used for creating responsive charts (if applicable to provider dashboards).     |

### ⚙️ Backend & Database

| Technology     | Description                                                                       |
| :------------- | :-------------------------------------------------------------------------------- |
| **Express.js** | Minimalist web application framework for Node.js, used for the server-side logic. |
| **MongoDB**    | NoSQL database for flexible and scalable data storage.                            |
| **CORS**       | Middleware to enable Cross-Origin Resource Sharing.                               |
| **Dotenv**     | Module to load environment variables from a `.env` file.                          |

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
