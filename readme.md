## Setup .env

Get the Moralis API key from [Moralis admin page](https://admin.moralis.io/web3apis)

Rename the .env.example to .env and add the required secrets.

## Install Packages

Run npm install to install the packages

```bash
npm install
```

## Start local server with Nodejs Backend

cd to the backend folder and start the backend app.

```bash
cd backend
nodemon index.js
```

## or If you want to use Python Backend

## Start local server

cd to the python backend folder.

```bash
cd python-backend
```

Create an start python virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the required packages in python

```bash
pip install flask flask_cors moralis python-dotenv
```

Run the python server in localhost

```bash
python3 index.py
```

Open the frontend code in localhost using live server extension.

Read more from [Moralis Docs](https://docs.moralis.io/)
