# General

We use Falcon with GUnicorn to make a REST API server.

The goal of this server is to make algorithm and datastructure basic computation for performance analysis purpose.


# How to launch

By using GUnicorn go into the main folder and run:

```bash
gunicorn --relead app:app
```