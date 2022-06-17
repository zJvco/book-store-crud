from pydantic import BaseModel, validator
from datetime import date, datetime


class BookInput(BaseModel):
    author: str
    title: str
    sinopse: str
    published_date: date
    genre: str
    price: float

    @validator("author", "title", "sinopse", "published_date", "genre", "price", pre=True)
    def validate_if_is_empty(cls, value):
        if not value:
            raise ValueError("Fill all fields")
        
        return value

    @validator("price")
    def validate_price(cls, value):
        if value < 0:
            raise ValueError("Price value is not valid")
        
        return value


class BookOutput(BaseModel):
    id: int
    author: str
    title: str
    sinopse: str
    published_date: date
    genre: str
    price: float
    created_date: datetime
    updated_date: datetime