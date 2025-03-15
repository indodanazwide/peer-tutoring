```sql
-- ==========================
-- 1. Users Table (Base for all roles)
-- ==========================
CREATE TABLE users (
    user_id         INT AUTO_INCREMENT PRIMARY KEY,
    full_name       VARCHAR(100) NOT NULL,
    email           VARCHAR(150) UNIQUE NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    role            ENUM('student', 'tutor', 'admin') NOT NULL,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index for quick authentication
CREATE INDEX idx_users_email ON users(email);

-- ==========================
-- 2. Tutors Table (Linked to Users)
-- ==========================
CREATE TABLE tutors (
    tutor_id          INT AUTO_INCREMENT PRIMARY KEY,
    user_id           INT UNIQUE NOT NULL,
    bio               TEXT,
    subjects          JSON NOT NULL,  
    hourly_rate       DECIMAL(10,2),
    rating            FLOAT DEFAULT 0.0,
    verification_status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Indexing for fast tutor searches
CREATE FULLTEXT INDEX idx_tutors_subjects ON tutors(subjects);
CREATE INDEX idx_tutors_rating ON tutors(rating);
CREATE INDEX idx_tutors_user_id ON tutors(user_id); -- Added index for foreign key

-- ==========================
-- 3. Sessions Table (Bookings & Scheduling)
-- ==========================
CREATE TABLE sessions (
    session_id     INT AUTO_INCREMENT PRIMARY KEY,
    student_id     INT NOT NULL,
    tutor_id       INT NOT NULL,
    start_time     DATETIME NOT NULL,
    end_time       DATETIME NOT NULL,
    status         ENUM('scheduled', 'completed', 'cancelled') DEFAULT 'scheduled',
    notes          TEXT,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (tutor_id) REFERENCES tutors(tutor_id) ON DELETE CASCADE
);

-- Indexing for session lookups
CREATE INDEX idx_sessions_start_time ON sessions(start_time);
CREATE INDEX idx_sessions_status ON sessions(status);
CREATE INDEX idx_sessions_student_tutor ON sessions(student_id, tutor_id); -- Composite index for faster lookups

-- ==========================
-- 4. Payments Table (Transactions)
-- ==========================
CREATE TABLE payments (
    payment_id       INT AUTO_INCREMENT PRIMARY KEY,
    user_id          INT NOT NULL,
    amount           DECIMAL(10,2) NOT NULL,
    payment_method   ENUM('credit_card', 'paypal', 'bank_transfer'),
    payment_details  JSON, -- Added for storing payment method details (e.g., last 4 digits of credit card)
    transaction_id   VARCHAR(100) UNIQUE NOT NULL,
    status           ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Indexing for transactions
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_user_id ON payments(user_id); -- Added index for foreign key

-- ==========================
-- 5. Reviews & Ratings Table
-- ==========================
CREATE TABLE reviews (
    review_id    INT AUTO_INCREMENT PRIMARY KEY,
    student_id   INT NOT NULL,
    tutor_id     INT NOT NULL,
    rating       TINYINT CHECK (rating BETWEEN 1 AND 5), -- Changed to TINYINT for better storage efficiency
    comment      TEXT,
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (student_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (tutor_id) REFERENCES tutors(tutor_id) ON DELETE CASCADE
);

-- Indexing for review lookups
CREATE INDEX idx_reviews_tutor ON reviews(tutor_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_student_tutor ON reviews(student_id, tutor_id); -- Composite index for faster lookups

-- ==========================
-- 6. Messages Table (In-App Chat)
-- ==========================
CREATE TABLE messages (
    message_id    INT AUTO_INCREMENT PRIMARY KEY,
    sender_id     INT NOT NULL,
    receiver_id   INT NOT NULL,
    content       TEXT NOT NULL,
    sent_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Indexing for messaging performance
CREATE INDEX idx_messages_sender ON messages(sender_id);
CREATE INDEX idx_messages_receiver ON messages(receiver_id);
CREATE INDEX idx_messages_sent_at ON messages(sent_at);
CREATE INDEX idx_messages_sender_receiver ON messages(sender_id, receiver_id, sent_at); -- Composite index for chat history

-- ==========================
-- 7. Security Logs Table
-- ==========================
CREATE TABLE security_logs (
    log_id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id        INT NOT NULL,
    action         ENUM('login', 'logout', 'password_change', 'account_update'), -- Changed to ENUM for predefined actions
    ip_address     VARCHAR(45),
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Indexing for security audit lookups
CREATE INDEX idx_security_logs_user ON security_logs(user_id);
CREATE INDEX idx_security_logs_created ON security_logs(created_at);
CREATE INDEX idx_security_logs_action ON security_logs(action); -- Added index for action lookups
```