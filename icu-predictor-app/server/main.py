from flask import Flask, request
from flask_cors import CORS
import time
import random

app = Flask(__name__, 
    static_url_path='', 
    static_folder='web/static/dist'
)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route("/", methods=["GET"])
def render_app():
    return app.send_static_file("index.html")

@app.route("/api/edvl_model", methods=["POST"])
def predict_icu():
    request_data = request.json

    time.sleep(2) # to add some drama... 
    return {
        "prediction": True if round(random.random()) else False , 
        "predict_proba": random.random(),
        "prediction_data": request_data
    }