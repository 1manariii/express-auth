create TABLE users (
    id int GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    username VARCHAR(256) UNIQUE,
    password VARCHAR(256)
)