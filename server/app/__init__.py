from flask import Flask


def create_app():
    app = Flask(__name__)

    from .routes.book import book_bp

    app.register_blueprint(book_bp, url_prefix="/book")

    return app