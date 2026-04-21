CREATE OR REPLACE VIEW v_latest_exchange_board AS
SELECT 
    entity_type,
    entity_name,
    buy_rate,
    sell_rate,
    spread,
    source_updated_at,
    created_at
FROM (
    -- Step 1: Isolate the latest record per bank
    SELECT DISTINCT ON (entity_name) *
    FROM exchange_rates
    ORDER BY entity_name, source_updated_at DESC
) AS sub
-- Step 2: Apply your specific display order
ORDER BY entity_type ASC, entity_name ASC;

-- View to retrieve only the entities marked for display
CREATE VIEW v_displayed_entities AS
SELECT id, entity_name, entity_type, link, preferred_entity
FROM entities
WHERE display_entity = true;