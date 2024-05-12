
# akaar-erp-frontend

This laravel project is a microservice for akaar-erp. this will provide service for User auth and run on [localhost:80](http://localhost:80)

| Configarations    | Version |
| ---      | ---       |
| Node | v20.5.0        |
| React js | ^18.2.0       |
| Npm | 10.4.0       |


### install

Clone Git Repo

    git clone https://github.com/Akaar-IT-Devs/akaar-erp-frontend

get into the Folder

    cd akaar-erp-frontend

get into the Folder

    cp .env.local.example .env.local

get into wsl

    wsl

install node modules

    npm i

build The app

    npm run build


To bring all containers up

    docker-compose up -d

To access your Laravel Application visit

    localhost:80

get into container

    docker-compose exec web bash

To exit a container

    exit

To list all running containers

    docker ps

To bring all containers down

    docker-compose down


To bring all containers down with volumes

    docker-compose down -v --rmi all




## Contributors

We'd like to thank the following individuals for their contributions to this project:

- [Touhid Zaman](https://github.com/TouhidZaman) - initiated this project.
- [Hasan Mohammad](https://github.com/hasan-mohammad-bd) -  Collaborate this project.
- [Shakil Mohammad](https://github.com/Shakil147) -  Collaborate this project.