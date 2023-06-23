USE gamesdb;

INSERT INTO customer (first_name, last_name, age)
VALUES ('Dave', 'Smith', 21),
('Alexander', 'Cave', 32),
('Abigale', 'Stocker', 28),
('Elizabeth', 'Watson', 69),
('Adam', 'Watson', 29);

INSERT INTO products (prod_name, price)
VALUES ('Halo', 40.00),
('COD', 20.00),
('Bunnys_squirals_playing_in_the_forest', 50.00);

INSERT INTO orders (fk_cust_id, fk_prod_id)
VALUES (1, 4),
(4, 3);

SELECT * FROM products;
