from flask import Blueprint
from flask import jsonify, request
from pydantic import ValidationError

from ..extensions import mysql
from ..models.book import BookInput, BookOutput

book_bp = Blueprint("book", __name__)


@book_bp.route("/")
def book_list():
    try:
        cursor = mysql.connection.cursor()
        cursor.execute(
            """
            SELECT * FROM books;
            """
        )
        
        books = cursor.fetchall()

        res = []

        for book in books:
            res.append(
                BookOutput(
                    id=book[0],
                    author=book[1],
                    title=book[2],
                    sinopse=book[3],
                    published_date=book[4],
                    genre=book[5],
                    price=book[6],
                    created_date=book[7],
                    updated_date=book[8]
                ).dict()
            )
    except:
        return jsonify({
            "message": "Was not possible to list the books"
        }), 500
    else:
        cursor.close()

        return jsonify(res)


@book_bp.route("/<int:book_id>", methods=["GET", "POST", "PUT", "DELETE"])
def book(book_id: int):
    # GET
    if request.method == "GET":
        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """
                SELECT * FROM books WHERE id = %s
                """, (str(book_id))
            )

            book = cursor.fetchone()

            res = BookOutput(
                id=book[0],
                author=book[1],
                title=book[2],
                sinopse=book[3],
                published_date=book[4],
                genre=book[5],
                price=book[6],
                created_date=book[7],
                updated_date=book[8]
            ).dict()
        except:
            return jsonify({
                "message": f"Was not possible to get book with id {book_id}"
            }), 500
        else:
            return jsonify(res)
        finally:
            cursor.close()
    # POST
    elif request.method == "POST":
        author = request.form.get("author")
        title = request.form.get("title")
        sinopse = request.form.get("sinopse")
        published_date = request.form.get("published_date")
        genre = request.form.get("genre")
        price = float(request.form.get("price"))

        try:
            book = BookInput(
                author=author,
                title=title,
                sinopse=sinopse,
                published_date=published_date,
                genre=genre,
                price=price
            )
        except ValidationError as e:
            for error in e.errors():
                return jsonify({
                    "message": error["msg"]
                }), 400

        try:
            cursor = mysql.connection.cursor()
            cursor.execute(
                """
                INSERT INTO books (author, title, sinopse, published_date, genre, price)
                VALUES (%s, %s, %s, %s, %s, %s)
                """, (book.author, book.title, book.sinopse, book.published_date, book.genre, book.price)
            )
        except:
            mysql.connection.rollback()

            return jsonify({
                "message": f"Was not possible to create the book"
            }), 500
        else:
            mysql.connection.commit()

            return jsonify({
                "message": f"Book created successfully"
            }), 201
        finally:
            cursor.close()
    # PUT
    elif request.method == "PUT":
        author = request.form.get("author")
        title = request.form.get("title")
        sinopse = request.form.get("sinopse")
        published_date = request.form.get("published_date")
        genre = request.form.get("genre")
        price = float(request.form.get("price"))

        try:
            book = BookInput(
                author=author,
                title=title,
                sinopse=sinopse,
                published_date=published_date,
                genre=genre,
                price=price
            )
        except ValidationError as e:
            for error in e.errors():
                return jsonify({
                    "message": error["msg"]
                }), 400

        try:
            cursor = mysql.connection.cursor()

            cursor.execute(
                """
                SELECT * FROM books WHERE id = %s
                """, (str(book_id))
            )

            if not cursor.fetchone():
                return jsonify({
                    "message": "Book was not found"
                }), 400

            cursor.execute(
                """
                UPDATE books
                SET author = %s, title = %s, sinopse = %s, published_date = %s, genre = %s, price = %s
                WHERE id = %s
                """, (book.author, book.title, book.sinopse, book.published_date, book.genre, book.price, book_id)
            )
        except:
            mysql.connection.rollback()

            return jsonify({
                "message": f"Was not possible to update the book"
            }), 500
        else:
            mysql.connection.commit()

            return jsonify({
                "message": f"Book updated successfully"
            })
        finally:
            cursor.close()
    # DELETE
    elif request.method == "DELETE":
        try:
            cursor = mysql.connection.cursor()

            cursor.execute(
                """
                SELECT * FROM books WHERE id = %s
                """, (str(book_id))
            )

            if not cursor.fetchone():
                return jsonify({
                    "message": "Book was not found"
                }), 400

            cursor.execute(
                """
                DELETE FROM books
                WHERE id = %s
                """, (str(book_id))
            )
        except:
            mysql.connection.rollback()

            return jsonify({
                "message": "Was not possible to delete the book"
            }), 500
        else:
            mysql.connection.commit()

            return jsonify({
                "message": "Book deleted successfully"
            })
        finally:
            cursor.close()
