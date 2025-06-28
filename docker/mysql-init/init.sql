CREATE TABLE IF NOT EXISTS education (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  institution VARCHAR(255),
  description TEXT,
  period_start DATE,
  period_end DATE,
  img VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS course_work (
  id INT AUTO_INCREMENT PRIMARY KEY,
  education_id INT,
  course_name VARCHAR(255),
  FOREIGN KEY (education_id) REFERENCES education(id)
);

INSERT INTO education (id, title, institution, description, period_start, period_end, img) VALUES
(1, 'Bachelor of Computer Science (Computer Network) with Honours','Universiti Putra Malaysia (UPM)', '', '2021-10-01', '2025-10-01', '/upm.png'),
(2, 'Foundation of Agricultural Science','Universiti Putra Malaysia (UPM)', '', '2020-08-01', '2021-08-01', '/upm.png');

INSERT INTO course_work (education_id, course_name) VALUES
(1, 'Cloud Computing'),
(1, 'Network Programming'),
(1, 'Database Principles'),
(1, 'Business Analytics'),
(1, 'Network Security'),
(1, 'Artificial Intelligence'),
(1, 'Data Structures'),
(2, 'Biology'),
(2, 'Chemistry'),
(2, 'Mathematics'),
(2, 'Physics'),
(2, 'English'),
(2, 'Agriculture');
