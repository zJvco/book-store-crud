from flask import Flask
from dotenv import load_dotenv

from .extensions import mysql

load_dotenv()


def create_app():
    app = Flask(__name__)
    
    app.config.from_object(f"{app.name}.config.Config")

    mysql.init_app(app)

    from .routes.book import book_bp

    app.register_blueprint(book_bp, url_prefix="/book")

    return app