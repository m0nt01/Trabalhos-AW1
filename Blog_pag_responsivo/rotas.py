from flask import Flask

def criar_aplicacao():
    app = Flask(__name__, static_folder='static')
    return app