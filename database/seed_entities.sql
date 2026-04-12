-- One-time script to populate the entities table based on existing data in exchange_rates
INSERT INTO entities (entity_name, entity_type)
SELECT DISTINCT entity_name, entity_type 
FROM exchange_rates;
