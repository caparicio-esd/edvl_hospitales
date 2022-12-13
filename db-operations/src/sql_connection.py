from sqlalchemy import MetaData, create_engine
from sqlalchemy.engine import Engine
from sqlalchemy.orm import sessionmaker

__db_host = "127.0.0.1"
__db_port = 3306
__db_user = "root"
__db_pass = "root"
__db_db = "db_test"
__db_dialect = "mysql+pymysql"
__db_url = f"{__db_dialect}://{__db_user}:{__db_pass}@{__db_host}:{__db_port}/{__db_db}"

engine: Engine = create_engine(__db_url, echo=True, future=True)

Session = sessionmaker()
Session.configure(bind=engine)
session = Session()