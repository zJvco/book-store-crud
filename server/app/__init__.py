import os
from flask import Flask
from dotenv import load_dotenv

from .extensions import mysql

load_dotenv()


def create_app():
    app = Flask(__name__)
    app.config["MYSQL_HOST"] = os.environ.get("MYSQL_HOST")
    app.config["MYSQL_PORT"] = int(os.environ.get("MYSQL_PORT"))
    app.config["MYSQL_USER"] = os.environ.get("MYSQL_USER")
    app.config["MYSQL_PASSWORD"] = os.environ.get("MYSQL_PASSWORD")
    app.config["MYSQL_DB"] = os.environ.get("MYSQL_DB")

    mysql.init_app(app)

    from .routes.book import book_bp

    app.register_blueprint(book_bp, url_prefix="/book")

    return app