from flask import Flask


def create_app():
    app = Flask(__name__, static_folder='../client/build', static_url_path='/')

    from .routes import main
    app.register_blueprint(main)

    return app
