# Todos Dashboard

**Todos Dashboard** is a small web application for browsing and filtering tasks.
The project implements basic dashboard functionality such as a task list, search, filtering, pagination, and a task details page.

The application works with a real API and demonstrates the practical use of a modern frontend stack: **React + TypeScript + Redux Toolkit + React Router**.

---

## Project Purpose

The main goal of this project is to implement a simple interface for working with a list of tasks.

Users can:

- view a list of todos
- search tasks by title
- filter tasks by status
- open a task details page
- navigate back to the list without losing the current filters and page

The data is loaded from a public API:

- Todos — https://jsonplaceholder.typicode.com/todos
- Users — https://jsonplaceholder.typicode.com/users

Each task contains:

- task title
- completion status
- the user associated with the task

The details page displays extended information about the task along with the user’s name.

---

## Main Features

### Todos List

The `/todos` page displays a list of tasks with key information:

- **Title** — task title
- **Status** — completion status (Active / Completed)
- **User** — task owner
- **Action** — link to the task details page

Completed tasks have a visual marker (badge).

---

### Filtering and Search

The list page provides several filtering options:

- **Search** — search tasks by title
- **Status** — filter by status (all / completed / active)
- **Reset filters** — clear all filters

Filter state is stored in **Redux Toolkit**, which allows the application to preserve the current filters and page when navigating to the details page and returning back.

---

### Pagination

The list of tasks is divided into pages to make navigation easier and improve data presentation.

---

### Task Details Page

The `/todos/:id` page displays detailed information about a task:

- task title
- completion status
- user ID
- user name

The **Back** button returns the user to the list page without resetting the filters.

---

## UI / UX

The interface includes several important application states:

- **Loading state** — a spinner is displayed while data is loading
- **Empty state** — a "No todos found" message when no tasks match the filters
- **Status badge** — a visual indicator for completed tasks
- clean and minimal UI layout

---

## Technologies

The project is built using the following technologies:

- **React**
- **TypeScript**
- **Redux Toolkit**
- **React Router**
- **Axios**
- **SCSS Modules**

---

## Architecture

The project is organized into logical modules:

- `features/` — Redux slices and business logic
- `pages/` — application pages
- `components/` — reusable UI components
- `styles/` — global styles and variables
- `app/` — store configuration

This structure helps keep the codebase organized and makes the application easier to scale and maintain.

---

## Project Goal

This project was created as a practical assignment to demonstrate skills in:

- working with REST APIs
- state management with Redux Toolkit
- routing in React applications
- type safety using TypeScript
- organizing a scalable frontend project structure

## Demo

Live: https://todos-dashboard-git-main-anastasiias-projects-5a0370e8.vercel.app/todos
