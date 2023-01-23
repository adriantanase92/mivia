# Mivia

[![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)]() [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

This project is a boilerplate for building web applications using Angular, NestJS, MongoDB and Docker.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Features](#features)
- [Built With](#built-with)
- [License](#license)
- [Contact](#contact)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Angular CLI
- NestJS CLI
- MongoDB
- Docker

### Installation

1. Clone the repository: `git clone https://github.com/your-username/your-project.git`
2. Commands:
    - Start the application for the first time: `docker compose up --build` 
    - Start the application: `docker compose up` 
    - Close the application: `docker compose down`
3. Debug Mongo commands while the app is running:
    - `docker exec -it mongodb mongosh -u admin -p admin`
    - `docker logs mongodb --follow`

## Features

- Angular for the front-end (admin)
- NestJS for the back-end (server)
- MongoDB for the database
- Docker for containerization

## Built With

- [Angular](https://angular.io/)
- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contact

Adrian Tanase – [@cv](https://adriantanase92.github.io/cv/index.html) – tanase.adrian92@gmail.com




