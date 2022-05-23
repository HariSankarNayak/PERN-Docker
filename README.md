# PERN-Docker with contextAPI and hooks with pg4admin  #


## Setup

Pre-requisites:

- Docker for Desktop

Run `docker-compose up` in the root of the project.

It binds the application server to `localhost:3333`, and the Postgres server to `localhost:5432`.


```
psql client:

```sh
psql postgres://azularc:azularc@localhost:35432/db
```


## Database setup + management

`npm run migrate up` will run the migrations.

`npm run migrate down` will roll back the migrations.

`npm run migrate:create <migration-name>`  will create a new migration file in [./api/src/migrations](./api/src/migrations).

To run the migrations inside of docker-compose. Which will run a bash instance inside the `app` container.
```sh
docker-compose run api bash
```

Migrate 

```sh
npm run migrate up
```
## Note
#Form validation Remainig to be implemented , due to some personal reason did not get sufficient time to implement it. Home you understand. 😄
