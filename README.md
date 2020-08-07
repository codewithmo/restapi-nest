<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A REST API application using <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications and <a href="https://www.postgresql.org/" target="blank">Postgres</a> for persistence.</p>
   
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Features

1. API to fetch the list of restaurants in India using Zomato APIs (Get you own access key from Zomota's website). <pre>(method: Get; route: localhost:3000/restaurants)</pre>

2. An api via which a user can post a rating on a restaurant, with his name and mailId. No login system. The API body params should carry name, email id, rating & restaurant id.<pre>(method: Post; route: localhost:3000/restaurants/rating)</pre>

3. Api to fetch ratings of restaurants, passing restaurant Id as path param.<pre>(method: Get; path_param:restaurant_id; route: localhost:3000/restaurants/rating/{res_id})</pre>

4. Api to fetch ratings of all restaurants.<pre>(method: Get; route: localhost:3000/restaurants/ratings)</pre>

## Post json format example

```bash
{
  "name": "user",              #this value can't be empty and should be string;
  "emailid": "user@email.com", #this value should be in proper mail format;
  "restaurantid": "12344312",
  "rating": 4.5                #this value should be number with range of 0-5;
}

```

## Swagger

`localhost:3000/api`

## Stay in touch

- Author - [MohammedAli Momin](https://codewithmo.github.io/myportfolio/)
- LinkedIn - [Codewithmo](www.linkedin.com/in/codewithmo)
