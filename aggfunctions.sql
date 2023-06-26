
-- SELECT COUNT(first_name) FROM customer WHERE first_name="Abigale";

-- SELECT SUM(price) FROM products;

-- SELECT MIN(price) FROM products;

-- SELECT MAX(price) FROM products;

-- SELECT AVG(price) FROM products;

SELECT fk_cust_id SUM(id)
FROM orders 
WHERE fk_cust_id=4 
GROUP BY fk_cust_id;