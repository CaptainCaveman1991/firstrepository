USE world;

SELECT COUNT(Name), CountryCode FROM city
WHERE CountryCode='GBR'
GROUP BY CountryCode;