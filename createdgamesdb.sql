create database if not exists gamesdb;

USE gamesdb;

DROP TABLE IF EXists customers;
CREATE TABLE customers (
	id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(20) NOT NULL UNIQUE,
    last_name VARCHAR(20) NOT NULL,
    age INT NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE IF NOT EXISTS orders (
	id INT PRIMARY KEY auto_increment,
    fk_cust_id INT NOT NULL,
    FOREIGN KEY (fk_cust_id) REFERENCES customer(id)
);

DESCRIBE orders;