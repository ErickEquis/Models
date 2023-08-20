from flask import Flask

from routes.api.apiBanxico import apiBanxico

app = Flask(__name__)

@app.route("/banxico/<idSerie>")
def banxico(idSerie):
    return apiBanxico(idSerie)

@app.route("/")
def home():
    return "Hola Mundo!"
