-- Create the main table for historical data
CREATE TABLE exchange_rates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL,         -- e.g., "Bancos públicos", "Cooperativas"
    entity_name TEXT NOT NULL,         -- e.g., "Banco de Costa Rica"
    buy_rate NUMERIC(10, 2) NOT NULL,  -- e.g., 458.00
    sell_rate NUMERIC(10, 2) NOT NULL, -- e.g., 472.00
    spread NUMERIC(10, 2),             -- e.g., 14.00
    source_updated_at TIMESTAMP WITH TIME ZONE, -- The date/time from the website
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() -- When the script ran
);

-- Create table to store entities configuration
CREATE TABLE entities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_name TEXT NOT NULL UNIQUE,
    entity_type TEXT NOT NULL,
    display_entity BOOLEAN DEFAULT false,
    preferred_entity BOOLEAN DEFAULT false
);

-- Indexing for performance
-- This ensures that querying history for a specific bank or date remains fast
CREATE INDEX idx_entity_name ON exchange_rates (entity_name);
CREATE INDEX idx_source_date ON exchange_rates (source_updated_at DESC);

-- View to retrieve only the entities marked for display
CREATE VIEW vw_displayed_entities AS
SELECT id, entity_name, entity_type, preferred_entity
FROM entities
WHERE display_entity = true;