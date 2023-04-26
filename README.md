# Projet JEE Spring Angular - Digital Banking

This is a project to create an application for managing bank accounts using JEE, Spring, and Angular.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

You will need to have the following software installed on your computer:

- Java Development Kit (JDK)
- Apache Maven
- Node.js and npm

### Installation

To install and run the project, follow these steps:

1. Clone the repository:
git clone https://github.com/TAFFAHACHRAF/JEE-Spring-Angular-Digital-Banking

2. Navigate to the project directory:
cd JEE-Spring-Angular-Digital-Banking

3. Build the project using Maven:
mvn clean install

4. Run the project using Spring Boot:
mvn spring-boot:run

5. Open your web browser and go to http://localhost:8080 to view the application.

## Features

This application allows you to manage bank accounts, with support for the following features:

- Creating customer accounts
- Creating and managing bank accounts (savings and current accounts)
- Depositing and withdrawing funds
- Viewing account balance and transaction history

## Project Structure

The project is divided into several parts:

- **DAO Layer**: This layer is responsible for communicating with the database. It includes the creation of JPA entities and Spring Data JPA repositories.
- **Service Layer**: This layer contains business logic and data transfer objects (DTOs) for transferring data between layers.
- **Web Layer**: This layer contains REST controllers for handling HTTP requests and responses.
- **Frontend**: This layer is implemented using Angular and provides a user interface for the application.
- **Security**: This layer provides authentication and authorization using Spring Security and JSON Web Tokens (JWT).

## Credits

This project was created by Achraf TAFFAH.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
I hope this helps!











