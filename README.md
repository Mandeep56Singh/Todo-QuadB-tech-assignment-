

# React Redux To-Do Application with Authentication

A feature-rich task management application with user authentication and persistent storage.

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-4.2.1-purple)](https://redux.js.org/)

![image](https://github.com/user-attachments/assets/7f4131c6-182e-4cc5-be6d-db930b42acd0)


## Features

- 🔐 **User Authentication**
  - Login/Logout functionality
  - Protected routes
  - Mock credentials: `admin@example.com` / `123`
  
- 📝 **Task Management**
  - Add new tasks with priority levels
  - Delete existing tasks
  - Mark tasks as complete
  - Priority-based visual indicators
  - Responsive design

- 💾 **Data Persistence**
  - Redux Persist for state management
  - LocalStorage integration
  - Persistent authentication status

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Prerequisites**
   - Node.js (v16+)
   - npm (v8+)

2. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the application**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Usage

1. **Authentication**
   - Login Page:
     ![image](https://github.com/user-attachments/assets/366c41c5-e7c5-4848-83a5-9a1d3284e57b)

     - Use mock credentials: 
       - Email: `admin@example.com`
       - Password: `123`

2. **Task Management**
   - Add Task:
      ![image](https://github.com/user-attachments/assets/4572d0a9-781c-4de6-9634-d235b782062b)

     - Click "ADD TASK" button
     - Enter task Title
     - Select priority from dropdown
     - Submit with Enter key or button click

   - Task Priorities:
     | Priority | Color Code |
     |----------|------------|
     | High     | Red        |
     | Medium   | Yellow     |
     | Low      | Green      |

   - Delete Task:
     - Click trash icon (🗑️) next to any task

3. **Persistence**
   - Tasks persist through:
     - Page reloads
     - Browser restarts
     - Session changes (while logged in)

4. **Responsive Design**
   - Optimized for:
     - Mobile (≤768px)
     - Tablet (769px-1024px)
     - Desktop (≥1025px)

## Technology Stack

- **Frontend**
  - React 18
  - Redux Toolkit
  - Redux Persist
  - React Router 7
  - Radix UI (Dialog component)
  - Tailwind CSS

- **State Management**
  ```mermaid
  graph TD
    A[Components] --> B(Actions)
    B --> C(Reducers)
    C --> D(Store)
    D -->|Persist| E(LocalStorage)
  ```

- **Architecture**
  - Container/Presentational component pattern
  - Feature-based folder structure
  - Custom hooks for business logic

## Features Implementation Details

### Authentication System
- JWT-like mock authentication
- Protected routes using React Router
- Session persistence with Redux Persist
- Error handling for invalid credentials

### Task Management
```javascript
// Example task object
{
  id: "uuidv4-generated-id",
  title: "Task description",
  completed: false,
  priority: "High|Medium|Low",
  createdAt: "ISO timestamp"
}
```

### Persistence Layer
- Redux Persist configuration:
  ```javascript
  {
    key: 'root',
    storage: localStorage,
    whitelist: ['auth', 'todos']
  }
  ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

**Note**: Replace screenshot placeholders with actual images from your application. Add proper attribution for any third-party assets used. Include additional sections like "Acknowledgments" or "FAQs" if needed.
