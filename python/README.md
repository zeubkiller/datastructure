# General

We use Falcon with GUnicorn to make a REST API server.

The goal of this server is to make algorithm and datastructure basic computation for performance analysis purpose.


# How to launch

By using GUnicorn:

```bash
gunicorn --relead src/Algorithm/app:app
```