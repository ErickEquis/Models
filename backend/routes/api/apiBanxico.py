import requests
import pandas as pd

def apiBanxico(idSerie):

    base_url = "https://www.banxico.org.mx/SieAPIRest/service/v1/series/"
    token = "?token=146e5872809111abcf5c7172f0395416c189a954e2afd200e5441e94f5c1c767"

    url = base_url + idSerie + "/datos" + token

    response = requests.get(url)
    data = response.json()
    data = data['bmx']
        
    df = pd.DataFrame(data)

    df = df.to_json(orient='records', indent=4)
    # print(df)

    return df
