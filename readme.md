# Trips TDD REST API

This project is a REST API that provides functionality to manage trips data. The API is designed using the Test-Driven-Development (TDD) approach with Jest and Supertest. It utilizes Mongoose as the database.

The `/src` folder contains the main files and folders of the project:

## Scaffold

- `/controllers` stores the application controllers, which handle client requests and perform necessary operations.
- `/services` contains additional business logic for data processing or interaction with external services.
- `/models` defines data models using Mongoose, representing the structure and behavior of the objects used in the application.
- `/routes` defines the API routes and establishes the connection between controllers and client requests.
- `/tests` contains unit tests written using Jest and Supertest to ensure proper API functionality.

Other important files in the project include:

- `index.js` is the main entry point of the application. It initializes the server and sets up the initial configuration.
- `db.js` handles the database connection using Mongoose.

## Installation

1. Clone this repository on your local machine.
2. Open a terminal in the project directory.
3. Run the following command to install the dependencies:

```shell
npm install
```

Available Scripts
In the package.json file, the following scripts are defined:

- `lint`: Executes ESLint to analyze the code in the /src folder.
- `pretty`: Applies Prettier to automatically format JavaScript and JSON files in the project, excluding the node_modules folder.
- `postpretty`: Runs ESLint in the /src folder with the --fix option to automatically fix found style issues.
- `dev`: Starts the server using Nodemon and Babel to run the src/index.js file. It's useful during development as it automatically restarts the server when changes are detected in the files.
- `build`: Compiles the code in the src directory using Babel and generates the transpiled code in the dist directory.
- `start`: Starts the server using the transpiled code in the dist directory.
- `test`: Runs unit tests using Jest and detects any unresolved promises.

You can execute these scripts using the following command:

```shell
npm run <script-name>
```

## Methods

- `GET /api/v1/trips`:

  Get a list of trips

- `POST /api/v1/trips`:

  Post a trip

- `PUT /api/v1/trips/:id`:

  Modify a trip by id

- `DELETE /api/v1/trips/:id`:

Delete a trip by id

## Contributions

Contributions to this project are welcome. If you find any issues or have any suggestions, feel free to open an issue or submit a pull request on the repository.

## License

This project is licensed under the MIT License.

## Author

[ Manuel Paiva ](https://github.com/manupaiva)
