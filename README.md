
# Next.js Project Setup and Basics

This project is a comprehensive introduction to building modern web applications using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It demonstrates reusable components, routing, API integration, and proper project structure.

---

## **Features**

- Next.js setup with **TypeScript** and **Tailwind CSS**
- Basic routing using the Pages Router (`/home`, `/about`, `/posts`, `/users`)
- Reusable components:
  - **Card**: Displays generic content
  - **PostModal**: Adds posts dynamically through a form in a modal
  - **Button**: Reusable with multiple sizes and shapes
  - **PostCard**: Displays posts from an API
  - **UserCard**: Displays user details from an API
- Data fetching from [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- Responsive UI with Tailwind CSS

---

## **Project Structure**

```markdown

alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── \_app.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json

````

---

## **How to Run the Project**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/<your-username>/alx-project-0x02-setup.git
   cd alx-project-0x02-setup/alx-project-0x02
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev -- -p 3000
   ```

4. Open your browser and go to:
   [http://localhost:3000](http://localhost:3000)

---

## **API Data**

This project fetches data from the free [JSONPlaceholder API](https://jsonplaceholder.typicode.com):

- **Posts endpoint**: `/posts`
- **Users endpoint**: `/users`

---

## **Learning Objectives**

By completing this project, you will:

- Understand how to scaffold a Next.js project with TypeScript and Tailwind CSS
- Learn how to create reusable components and interfaces
- Implement routing with the Pages Router
- Fetch data from external APIs and display it dynamically
- Apply responsive design principles with Tailwind CSS

---

## **Screenshots**

(You can add screenshots of the **Home**, **Posts**, and **Users** pages here.)

---

## **Author**

**Your Name**
Project for **ALX SE Program**

### Next Steps

👉 Do you want me to:

1. Add **screenshots placeholders (actual image files)** to the `public/assets/images` folder and reference them in the README?  
2. Show the **Git commands** to commit and push all Tasks (3–8) **including the updated README**?

---

**Thanks for reading!**

