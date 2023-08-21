import requests
import pandas as pd

def getSectores():

    url = "https://www.banxico.org.mx/SieAPIRest/service/v1/cat/sectores"

    response = requests.get(url)
    data = response.json()
    data = data['bmx']

    df = pd.DataFrame(data)

    df = df.to_json(orient='records', indent=4)
    # print(df)

    return df