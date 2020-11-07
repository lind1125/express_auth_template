# Express Auth Boilerplate

## How to set up:

1. Fork and clone
2. Install dependencies
```
npm i
```

3. Create a `config.json` with the following code:
```json
{
  "development": {
    "database": "<insert development db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "<insert test db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "<insert production db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
**Note:** If your database requires a username and passwor,d you'll need to include these fields as well.

4. Create a database
```
sequelize db:create <insert db name here>
```

5. Migrate the `user` model to your database
```
sequelize db:migrate
```

6. Add `SESSION_SECRET` and `PORT` environment variables in a `.env` file (SESSION_SECRET can be any string)

7. Run `nodemon` to start up app