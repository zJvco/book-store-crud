from flask import Flask
from dotenv import load_dotenv

from .extensions import mysql, cors

load_dotenv()


def create_app():
    app = Flask(__name__)
    
    app.config.from_object(f"{app.name}.config.Config")

    mysql.init_app(app)
    cors.init_app(app, resources={r"*": {"origins": "http://localhost:3000"}})
    
    from .routes.book import book_bp

    app.register_blueprint(book_bp, url_prefix="/book")

    return app