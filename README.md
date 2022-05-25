# fullstack-mvc-tech-blog - May 22nd 2022 - Carlos Sabbah

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Local Usage](#Local-Usage)
- [Links](#Links)
- [Questions](#Questions)
- [License](#License)

##

## Description

This is a full-stack CMS-style blog site where users can publish posts and comment on other users' blog posts. With login authentication, logged-in users have access to the dashboard where they can also edit or delete their posts and or comments. Additionallly, this application is MVc structured and makes use of multiple packages such as handlebars, bcrypt, express.sessions, sequelize and more to ensure the most optimized experience.

## Installation

1. To install application, clone the main project via the HTTP or SSH link on github.

```
git clone
```

2. Once cloned, open up the project folder in your text editor and run the following command in terminal to install all dependencies.

```
npm install
```

## Local-Usage

# Initial setup

Create an '.env' file in the main directory path and include the following data:

```
DB_NAME='your_database_name'
DB_USER='your_mysql_username'
DB_PW='your_mysql_password'
```

Once your '.env' has been created with the corresponding data, open up the schema ('db/schema.sql') and update the database label to match with the database you included in your '.env' file.

# Database reset

Before seeding the data, make sure to reset the database by setting 'force: false' to 'true' in the 'server.js' file and type this command in terminal:

```
npm start
```

After that, revert back to 'false' and exit the server by typing

```
control + c
```

# Seeding starter data into database and starting the server

To seed the database with the starter data, type this command in terminal:

```
npm run seeds
```

To start the server, type in terminal:

```
npm start
```

From there, you are ready to use the application!

## Links

[Link to live application](https://fullstack-mvc-techblog.herokuapp.com/)

## Built With

- Node.js
- Express.js
- Handlebars template engine
- Bcrypt
- Express sessions
- Sequelize
- Dotenv
- MySQL2
- Heroku
- JavaScript

## Questions

[My portfolio](https://csabbah.github.io/Carlos-Sabbah-portfolio/)

To view my other applications:
[Github](https://github.com/csabbah)

If you have questions about this application or general inquiry, please reach out to me via email: carlossabbah@hotmail.com

## License
This project is covered under the MIT License.

![Preview-image](https://user-images.githubusercontent.com/91699101/170105386-69940ebe-c90c-4127-b76c-d27690cc42a0.png)

