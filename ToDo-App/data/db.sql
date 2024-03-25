create table users{
    id int AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50)  NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
}

create table tasks{
    userid int,
    id int AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    completed BOOLEAN DEFAULT false,
    FOREIGN KEY (userid) REFERENCES users (id)
}