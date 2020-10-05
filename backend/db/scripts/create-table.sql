USE project;

DROP TABLE IF EXISTS people;

CREATE TABLE IF NOT EXISTS people(
    id VARCHAR(24) PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(6),
    company VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(50), 
    address VARCHAR(200)
);
