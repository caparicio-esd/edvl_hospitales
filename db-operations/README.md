# Db-operations

This module aims to manage all operations on medical selene database such as clone, export, regenerate types and indexes.

It's based on Python >3.10 and it uses `sql-alchemy` for db connections, db IO and indexing. Migrations are done with `alembic` and project management is based on `poetry`.

<br>

------
<br>

## Activate Venv with Poetry

In order to work with the local virtual environement, you have to install `poetry` CLI. Having a normal Python's instalation, just `pip install poetry`.




Once you have poetry in your machine, activate the virtual environement with: 

```bash
# get into folder (if you're not yet...) 
cd ./db-operations

# config some local stuff 
poetry config virtualenvs.in-project true --local
poetry config virtualenvs.create true --local
poetry env use python3 # use your local python

# install
poetry install
poetry env use ./.venv/bin/python
```

### Install whatever you want

Just add a new dependency with:

```bash
poetry add pandas
```

<br>

------
<br>