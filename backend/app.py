from flask import Flask
from flask_cors import CORS

from routes.api.apiBanxico import apiBanxico
from routes.api.sectoresBanxico import getSectores
from routes.api.cuadrosBanxico import getCuadros

app = Flask(__name__)
CORS(app)

@app.route("/banxico/<idSerie>")
def banxico(idSerie):
    return apiBanxico(idSerie)

@app.route("/banxico/sectores")
def banxicoSectores():
    return getSectores()

@app.route("/banxico/cuadros/<idCuadro>")
def banxicoCuadros(idCuadro):
    return getCuadros(idCuadro)

@app.route("/")
def home():
    return "Hola Mundo!"
