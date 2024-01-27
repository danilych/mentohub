# Mentohub | Remix.run App
This repository contains the frontend code for a course platform, built using Remix.js. The platform follows a feature-sliced design architecture, providing a modular and scalable structure for managing courses and related functionalities.
Features

- User authentication and authorization for instructors and learners
- Course catalog with search and filtering options
- Course creation and management for instructors
- Enrolling in courses and tracking progress for learners
- Interactive quizzes and assessments
- Discussion forums for course interactions
- Payment integration for purchasing courses
- User profile management and settings

## Tech Stack

![Redux](https://img.shields.io/badge/-Redux-090909?style=for-the-badge&logo=redux)
![Node](https://img.shields.io/badge/-Node-090909?style=for-the-badge&logo=node.js)
![Remix](https://img.shields.io/badge/-Remix-090909?style=for-the-badge&logo=remix)
![TypeScript](https://img.shields.io/badge/-TypeScript-090909?style=for-the-badge&logo=typescript)
![Redux](https://img.shields.io/badge/-Redux-090909?style=for-the-badge&logo=redux)
![Axios](https://img.shields.io/badge/-Axios-090909?style=for-the-badge&logo=axios)
![Prettier](https://img.shields.io/badge/-Prettier-090909?style=for-the-badge&logo=prettier)
![StyleLint](https://img.shields.io/badge/-StyleLint-090909?style=for-the-badge&logo=stylelint)
![ESLint](https://img.shields.io/badge/-ESLint-090909?style=for-the-badge&logo=eslint)
![Yarn](https://img.shields.io/badge/-Yarn-090909?style=for-the-badge&logo=yarn)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-090909?style=for-the-badge&logo=tailwindCss)
![Git](https://img.shields.io/badge/-Git-090909?style=for-the-badge&logo=git)

- Remix.js (React framework for building web applications)
- JavaScript/TypeScript
- HTML/CSS
- Responsive design for optimal user experience across devices
- Tailwind CSS

## Architecture

The frontend codebase follows a feature-sliced design architecture, which encourages separation of concerns and modularity. Each feature is encapsulated within its own module, consisting of components, state management, and API integration specific to that feature. This architecture promotes code reusability, maintainability, and scalability.
Getting Started

## To run the course platform frontend locally, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies using ```yarn```.
- Configure the necessary environment variables.
- Start the development server using ```yarn start``` or ```yarn dev```.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please open an issue or submit a pull request with your proposed changes.
License

This project is licensed under the MIT License. See the LICENSE file for more information.

Feel free to customize and modify the description as per your specific implementation details.

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
yarn global add vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
yarn
```

Afterwards, start the Remix development server like so:

```sh
yarn dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
