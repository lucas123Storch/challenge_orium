## Usage

1. Setup a [PostgreSQL](#postgresql)

2. Modify `.env` fulfilling variables as needed

3. Run the following command:

```bash
adonis serve --dev
```

4. Done 🎉

### PostgreSQL

#### Local install

[Follow this link](https://www.postgresql.org/download/)

#### Docker

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres

```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeds

Run the following command to run recreate the database and seed.

```js
adonis migration:refresh --seed
```
