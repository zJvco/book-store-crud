from flask import Blueprint

book_bp = Blueprint("book", __name__)


@book_bp.route("/")
def book_list():
    return "Book list"


@book_bp.route("/<int:book_id>")
def book(book_id: int):
    return "Book only"