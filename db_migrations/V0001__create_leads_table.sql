-- Создание таблицы для хранения email-адресов лидов
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source VARCHAR(50) DEFAULT 'website',
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Создание индекса для быстрого поиска по email
CREATE INDEX idx_leads_email ON leads(email);

-- Создание индекса для сортировки по дате
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);