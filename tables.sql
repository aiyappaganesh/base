-- CREATE USER 'base'@'localhost' IDENTIFIED BY 'base666';
-- GRANT ALL ON *.* TO 'base'@'localhost';

-- Cloud: gcloud sql connect base --user=root
-- Local: mysql -u base -p

DROP DATABASE IF EXISTS base;
CREATE DATABASE base;

USE base;
