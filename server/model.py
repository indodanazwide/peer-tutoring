from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import JSON, ENUM

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(ENUM('student', 'tutor', 'admin', name='user_role'), nullable=False)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)

    tutor = db.relationship('Tutor', backref='user', uselist=False, cascade='all, delete-orphan')
    sessions_as_student = db.relationship('Session', foreign_keys='Session.student_id', backref='student', lazy=True)
    sessions_as_tutor = db.relationship('Session', foreign_keys='Session.tutor_id', backref='tutor', lazy=True)
    payments = db.relationship('Payment', backref='user', lazy=True)
    reviews_as_student = db.relationship('Review', foreign_keys='Review.student_id', backref='student', lazy=True)
    reviews_as_tutor = db.relationship('Review', foreign_keys='Review.tutor_id', backref='tutor', lazy=True)
    messages_sent = db.relationship('Message', foreign_keys='Message.sender_id', backref='sender', lazy=True)
    messages_received = db.relationship('Message', foreign_keys='Message.receiver_id', backref='receiver', lazy=True)
    security_logs = db.relationship('SecurityLog', backref='user', lazy=True)

    def __repr__(self):
        return f"<User(user_id={self.user_id}, email={self.email}, role={self.role})>"

class Tutor(db.Model):
    __tablename__ = 'tutors'

    tutor_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), unique=True, nullable=False)
    bio = db.Column(db.Text)
    subjects = db.Column(JSON, nullable=False)
    hourly_rate = db.Column(db.Numeric(10, 2))
    rating = db.Column(db.Float, default=0.0)
    verification_status = db.Column(ENUM('pending', 'approved', 'rejected', name='verification_status'), default='pending')

    def __repr__(self):
        return f"<Tutor(tutor_id={self.tutor_id}, user_id={self.user_id}, verification_status={self.verification_status})>"

class Session(db.Model):
    __tablename__ = 'sessions'

    session_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    tutor_id = db.Column(db.Integer, db.ForeignKey('tutors.tutor_id', ondelete='CASCADE'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    status = db.Column(ENUM('scheduled', 'completed', 'cancelled', name='session_status'), default='scheduled')
    notes = db.Column(db.Text)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)

    def __repr__(self):
        return f"<Session(session_id={self.session_id}, student_id={self.student_id}, tutor_id={self.tutor_id})>"

class Payment(db.Model):
    __tablename__ = 'payments'

    payment_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    amount = db.Column(db.Numeric(10, 2), nullable=False)
    payment_method = db.Column(ENUM('credit_card', 'paypal', 'bank_transfer', name='payment_method'))
    payment_details = db.Column(JSON)
    transaction_id = db.Column(db.String(100), unique=True, nullable=False)
    status = db.Column(ENUM('pending', 'completed', 'failed', name='payment_status'), default='pending')
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)

    def __repr__(self):
        return f"<Payment(payment_id={self.payment_id}, user_id={self.user_id}, amount={self.amount})>"

class Review(db.Model):
    __tablename__ = 'reviews'

    review_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    tutor_id = db.Column(db.Integer, db.ForeignKey('tutors.tutor_id', ondelete='CASCADE'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)

    def __repr__(self):
        return f"<Review(review_id={self.review_id}, student_id={self.student_id}, tutor_id={self.tutor_id})>"

class Message(db.Model):
    __tablename__ = 'messages'

    message_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    receiver_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    sent_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)

    def __repr__(self):
        return f"<Message(message_id={self.message_id}, sender_id={self.sender_id}, receiver_id={self.receiver_id})>"

class SecurityLog(db.Model):
    __tablename__ = 'security_logs'

    log_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    action = db.Column(ENUM('login', 'logout', 'password_change', 'account_update', name='security_action'), nullable=False)
    ip_address = db.Column(db.String(45))
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)

    def __repr__(self):
        return f"<SecurityLog(log_id={self.log_id}, user_id={self.user_id}, action={self.action})>"