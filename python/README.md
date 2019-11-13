# General

We use Falcon with GUnicorn to make a REST API server.

The goal of this server is to make algorithm and datastructure basic computation for performance analysis purpose.


# How to launch

By using GUnicorn go into the main folder and run:

```bash
gunicorn --reload app:app
```


# How to launch the postgress db

Currently fo testing purpose you can launch a specific db with docker:

Get the image
```bash
sudo docker pull postgres
```

Launch the image
```bash
sudo docker run -d -e POSTGRES_PASSWORD=dru -p 5432:5432 --name myDb3 postgres
```

- -e POSTGRES_PASSWORD : Is used to define the password of the root user for this database

Look into the database
```bash
psql -U postgres -h localhost
```