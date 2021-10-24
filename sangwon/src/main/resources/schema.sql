create table user (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50) UNIQUE,
password VARCHAR(100),
name VARCHAR(50),
email VARCHAR(50),
point BIGINT,
enabled BIT,
date DATETIME,
level VARCHAR(50)
);

create table role (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)
);

create table user_role (
user_id BIGINT,
role_id BIGINT,
PRIMARY KEY(user_id, role_id),
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (role_id) REFERENCES role(id)
);

create table board (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(50),
content TEXT(65535),
username VARCHAR(50),
date DATETIME,
user_id BIGINT,
FOREIGN KEY (user_id) REFERENCES user(id)
);

create table comment (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
boardid BIGINT,
commentid BIGINT,
content TEXT(65535),
date DATETIME,
depth BIGINT,
username VARCHAR(50),
FOREIGN KEY (boardid) REFERENCES board(id),
FOREIGN KEY (commentid) REFERENCES comment(id)
);

create table message (
id BIGINT AUTO_INCREMENT PRIMARY KEY,
checked BIT,
content TEXT(65535),
date DATETIME,
receiver VARCHAR(50),
receiverid BIGINT,
sender VARCHAR(50),
senderid BIGINT,
FOREIGN KEY (receiverid) REFERENCES user(id),
FOREIGN KEY (senderid) REFERENCES user(id)
);

create table user_board (
board_id BIGINT,
user_id BIGINT,
PRIMARY KEY(board_id, user_id),
FOREIGN KEY (board_id) REFERENCES board(id),
FOREIGN KEY (user_id) REFERENCES user(id)
);

create table user_comment (
comment_id BIGINT,
user_id BIGINT,
PRIMARY KEY(comment_id, user_id),
FOREIGN KEY (comment_id) REFERENCES comment(id),
FOREIGN KEY (user_id) REFERENCES user(id)
);
