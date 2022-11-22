# Db-operations

This module aims to manage all operations on medical selene database such as clone, export, regenerate types and indexes. 

It's based on Python >3.10 and it uses `sql-alchemy` for db connections, db IO and indexing. Migrations are done with `alembic` and project management is based on `poetry`.

----


## Activate Venv with Poetry
In order to work with the local virtual environement, you have to install `poetry` CLI. Having a normal Python's instalation, just `pip install poetry`. 




Once you have poetry in your machine, activate the virtual environement with: 
```[bash]
# make 
poetry config virtualenvs.in-project true
cd ./db-operations
poetry env use ./bin/python3.10 
```
