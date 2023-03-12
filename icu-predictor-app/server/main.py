from flask import Flask, request
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route("/", methods=["POST"])
def hello_world():
    request_data = request.json

    time.sleep(2) # to add some drama... 
    return {
        "prediction": True, 
        "prediction_data": request_data
    }