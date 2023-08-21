from flask import Flask
from flask_cors import CORS

from routes.api.apiBanxico import apiBanxico

app = Flask(__name__)
CORS(app)

@app.route("/banxico/<idSerie>")
def banxico(idSerie):
    print("Entro al metodo get")
    return apiBanxico(idSerie)

@app.route("/")
def home():
    return "Hola Mundo!"
