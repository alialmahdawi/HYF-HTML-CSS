select city.name from city
inner join country on city.countryCode = country.code
where country.name = 'Netherlands';

select population from city
where city.name = 'Rotterdam';

select country.name from country
where country.continent = 'Notrth America';

select country.name from country
order by country.SurfaceArea desc limit 10;

select city.name from city
order by city.Population desc limit 10;

select country.name from country
where country.name like 'P%'
order by country.Population desc limit 3;

select sum(country.population) from country
where country.Continent = 'Asia';

select DISTINCT countrylanguage.Language from countrylanguage
inner join country on countrylanguage.CountryCode = country.code
where country.continent = 'South America'; 

select distinct countrylanguage.Language from countrylanguage
inner join city on countrylanguage.CountryCode = City.CountryCode
where city.name = 'Barcelona';