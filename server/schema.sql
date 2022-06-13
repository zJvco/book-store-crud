USE book_store;

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT,
    author VARCHAR(45) NOT NULL,
    title VARCHAR(150) NOT NULL,
    sinopse VARCHAR(500) NOT NULL,
    published_date DATE NOT NULL,
    genre VARCHAR(45) NOT NULL,
    price FLOAT NOT NULL,
    created_date DATETIME DEFAULT NOW() NOT NULL,
    modified_date DATETIME DEFAULT NOW() ON UPDATE NOW() NOT NULL,

    PRIMARY KEY (id)
);