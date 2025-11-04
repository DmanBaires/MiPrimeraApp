-- For SQL Server, use INFORMATION_SCHEMA.TABLES to list table metadata
SELECT *
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME IN ('reservations','courts');