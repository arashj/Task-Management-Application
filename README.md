# Task Management Application

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Running Unit Tests](#running-unit-tests)
- [Assumptions and Limitations](#assumptions-and-limitations)
- [Code Structure and Design Choices](#code-structure-and-design-choices)

## Introduction

This Task Management Application allows users to manage their tasks efficiently. Users can add new tasks, update existing tasks, delete tasks, sort and filter tasks based on their completion status.

## Features

- Add new tasks with a title, description, and due date.
- Mark tasks as completed or pending.
- Edit task details.
- Delete tasks.
- Filter tasks by status: all, completed, incomplete, overdue.
- sort tasks by date and title

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

## Running the Project

After setting up the project, you can run it locally by executing `npm start`. This will start the development server and open the application in your default web browser at `http://localhost:****`.

## Running Unit Tests

This part is not developed yet.

## Assumptions and Limitations

- The application assumes that all tasks are created with a unique ID.
- The date format for task due dates is assumed to be in `YYYY-MM-DD` format.
- The application currently does not support user authentication; all tasks are managed locally.
- The application uses local state management and does not persist tasks between sessions.

## Code Structure and Design Choices

### Folder Structure

```
src/
├── components/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── NewTask.jsx
│   │   ├── NoTaskCreated.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── ToggleButton.jsx
│   │   ├── ProjectSidebar.jsx
│   │   ├── SortBy.jsx
├── index.css
├── App.jsx
```

### Design Choices

- **Component-based Structure**: The application is divided into reusable components, making the code more modular and easier to maintain.
- **State Management**: Local state is managed using React's `useState` and `useEffect` hooks.
- **Styling**: Tailwind CSS is used for styling components, providing a utility-first CSS framework that is highly customizable and responsive.
- **Filtering Logic**: The tasks are filtered based on their completion status using a simple filtering logic in the `App.jsx` file.

### Key Components

- **App.jsx**: The main component that manages the state of the tasks and handles filtering logic.
- **ProjectSidebar.jsx**: Sidebar component that allows switching between different task filters.
- **TaskList.jsx**: Displays the list of tasks based on the selected filter.
- **TaskItem.jsx**: Represents an individual task item, allowing updates and deletions.
- **NewTask.jsx**: Form component for adding a new task.
- **NoTaskCreated.jsx**: Component displayed when no tasks are present.
- **ToggleButton.jsx**: A button component to toggle the completion status of a task.

I would appreciate any feedback!
