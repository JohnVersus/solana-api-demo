from flask import Flask, request
from flask_cors import CORS
from moralis import sol_api
from dotenv import dotenv_values

config = dotenv_values(".env")
moralis_api_key = config.get("MORALIS_API_KEY")

app = Flask(__name__)
CORS(app)


@app.get("/")
def root():
    return "Hey, You are in the Backend!!"

@app.post("/getWalletbalance")
def getWalletbalance():
    try: 
        body = request.json

        params = {
            "address": body["address"],
            "network": body["network"]
            }
        result = sol_api.account.balance(
            api_key= moralis_api_key,
            params = params
        )
        return result
    except Exception as e:
        print(e)
        return str(e)

@app.post("/getTokenbalance")
def getTokenbalance():
    try: 
        body = request.json
        
        params = {
            "address": body["address"],
            "network": body["network"]
            }
        result = sol_api.account.get_spl(
            api_key= moralis_api_key,
            params = params
        )
        return result
    except Exception as e:
        print(e)
        return str(e)

@app.post("/getNfts")
def getNfts():
    try: 
        body = request.json
        
        params = {
            "address": body["address"],
            "network": body["network"]
            }
        result = sol_api.account.get_nfts(
            api_key= moralis_api_key,
            params = params
        )
        return result
    except Exception as e:
        print(e)
        return str(e)

@app.post("/getPortfolio")
def getPortfolio():
    try: 
        body = request.json
        
        params = {
            "address": body["address"],
            "network": body["network"]
            }
        result = sol_api.account.get_portfolio(
            api_key= moralis_api_key,
            params = params
        )
        return result
    except Exception as e:
        print(e)
        return str(e)

@app.post("/getNFTMetadata")
def getNFTMetadata():
    try: 
        body = request.json
        
        params = {
            "address": body["address"],
            "network": body["network"]
            }
        result = sol_api.nft.get_nft_metadata(
            api_key= moralis_api_key,
            params = params
        )
        return result
    except Exception as e:
        print(e)
        return str(e)

@app.post("/getTokenPrice")
def getTokenPrice():
    try: 
        body = request.json
        
        params = {
            "address": body["address"],
            "network": body["network"]
            }
        result = sol_api.token.get_token_price(
            api_key= moralis_api_key,
            params = params
        )
        return result
    except Exception as e:
        print(e)
        return str(e)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=9000)