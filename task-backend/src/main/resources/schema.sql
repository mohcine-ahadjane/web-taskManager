DROP TABLE IF EXISTS task;
CREATE TABLE task (
                      id SERIAL PRIMARY KEY,
                      title VARCHAR(100),
                      description VARCHAR(255),
                      status VARCHAR(20) DEFAULT 'PENDING'
);