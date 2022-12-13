from sqlalchemy import text
from sql_connection import engine
from nosql_connection import nosql_client
from pprint import pprint
from chalk import red


def test_connection(): 
    try: 
        with engine.connect() as conn:
            result = conn.execute(text("select 1+1"))
            print(result.all())
    except Exception as e:
        print(red(e.__str__())) 



def test_nosql_connection():
    db = nosql_client.local
    pprint(db)
    collection = db.startup_log
    pprint(collection)
    a = collection.find({})
    pprint(a[0])
        


if __name__ == "__main__": 
    test_nosql_connection()
