from pymongo import MongoClient


__db_host = "localhost"
__db_port = 27017
__db_user = "root"
__db_pass = "root"
__db_dialect = "mongodb"
__db_url = f"{__db_dialect}://{__db_user}:{__db_pass}@{__db_host}:{__db_port}"

nosql_client = MongoClient(__db_url)
