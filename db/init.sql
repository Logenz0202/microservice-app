CREATE TABLE IF NOT EXISTS parcels (
    id SERIAL PRIMARY KEY,
    tracking_number TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    next_update TIMESTAMP
);
