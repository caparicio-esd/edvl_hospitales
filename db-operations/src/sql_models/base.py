from sqlalchemy.orm import declarative_base
from src.db_connection import engine

Base = declarative_base()
Base.metadata.create_all(engine)