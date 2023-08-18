from flask import Flask

from apiBanxico import apiBanxico

app = Flask(__name__)

@app.route("/banxico/<idSerie>")
def banxico(idSerie):

    return apiBanxico(idSerie)
