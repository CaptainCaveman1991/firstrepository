create database if not exists gamesdb;

USE gamesdb;
DROP TABLE IF EXISTS orders;
DROP TABLE IF Exists customer;


CREATE TABLE customer (
	id INT PRIMARY KEY auto_increment,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT NOT NULL
);


CREATE TABLE IF NOT EXISTS orders (
	id INT PRIMARY KEY auto_increment,
    fk_cust_id INT NOT NULL,
    fk_prod_id INT NOT NULL,
    FOREIGN KEY (fk_cust_id) REFERENCES customer(id),
    FOREIGN KEY (fk_prod_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    prod_name VARCHAR(50) NOT NULL,
    price FLOAT
    
);