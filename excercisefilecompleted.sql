USE world;

SELECT COUNT(Name) FROM city WHERE CountryCode="USA";

SELECT NAME, Population, LifeExpectancy FROM country 
WHERE CODE="ARG"; 

SELECT NAME, LifeExpectancy FROM country
WHERE LifeExpectancy IS NOT NULL
ORDER BY LifeExpectancy DESC
LIMIT 1;

SELECT MAX(LifeExpectancy) FROM country