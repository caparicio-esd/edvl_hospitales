from sqlalchemy import text
from db_connection import engine

with engine.connect() as conn:
    result = conn.execute(text("select 1+1"))
    print(result.all())

