import os


class Config:
    JSON_SORT_KEYS = False

    MYSQL_HOST = os.environ.get("MYSQL_HOST")
    MYSQL_PORT = int(os.environ.get("MYSQL_PORT"))
    MYSQL_USER = os.environ.get("MYSQL_USER")
    MYSQL_PASSWORD = os.environ.get("MYSQL_PASSWORD")
    MYSQL_DB = os.environ.get("MYSQL_DB")