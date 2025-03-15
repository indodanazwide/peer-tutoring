# Peer Tutoring SaaS - Implementation Documentation

## 📌 Overview
This document outlines the implementation approach for the **Peer Tutoring SaaS** backend using Flask and MySQL.

## 📖 Resources Used
- **Flask Documentation**: [Flask Official Docs](https://flask.palletsprojects.com/en/stable/)
- **MySQL Connection Guide**: [Connecting Flask to MySQL](https://kris-litman.medium.com/connecting-flask-to-a-mysql-database-6f4d71b85d4e)

## 🚀 Project Structure
```
.
├── app.py
├── config.py
├── model.py
├── __pycache__/
└── venv/
    ├── bin/
    ├── include/
    ├── lib/
    ├── lib64 -> lib/
    └── pyvenv.cfg
```

## 🔧 Implementation Details
### 1️⃣ **Flask App Initialization (`app.py`)**
The Flask app is initialized following best practices from the Flask documentation.

```python
from flask import Flask
from config import load_db_config
from model import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = load_db_config()
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=8080)
```

### 2️⃣ **Database Configuration (`config.py`)**
The database connection is loaded from **environment variables** for security.

```python
import os
from dotenv import load_dotenv

load_dotenv('.env')

def load_db_config():
    try:
        db_user = os.environ['DB_USER']
        db_password = os.environ['DB_PASSWORD']
        db_name = os.environ['DB_NAME']
        db_host = os.environ.get('DB_HOST', 'localhost')
        db_port = os.environ.get('DB_PORT', '3306')

        db_uri = f'mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}'
        print(f'Connected to the database: {db_name}')

        return db_uri
    except KeyError as e:
        print(f"Missing required environment variable: {e}")
        raise 
    except Exception as e:
        print(f"Unexpected error loading database configuration: {e}")
        raise
```

### 3️⃣ **Database Models (`model.py`)**
The data models are implemented using **Flask-SQLAlchemy**.

#### **User Model**
```python
class User(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    full_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(ENUM('student', 'tutor', 'admin', name='user_role'), nullable=False)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow(), nullable=False)
```

#### **Tutor Model**
```python
class Tutor(db.Model):
    __tablename__ = 'tutors'
    tutor_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), unique=True, nullable=False)
    subjects = db.Column(JSON, nullable=False)
    hourly_rate = db.Column(db.Numeric(10, 2))
    verification_status = db.Column(ENUM('pending', 'approved', 'rejected', name='verification_status'), default='pending')
```

#### **Session Model**
```python
class Session(db.Model):
    __tablename__ = 'sessions'
    session_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    student_id = db.Column(db.Integer, db.ForeignKey('users.user_id', ondelete='CASCADE'), nullable=False)
    tutor_id = db.Column(db.Integer, db.ForeignKey('tutors.tutor_id', ondelete='CASCADE'), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    status = db.Column(ENUM('scheduled', 'completed', 'cancelled', name='session_status'), default='scheduled')
```

## 🛠️ Next Steps
- Implement authentication & authorization
- Develop API endpoints
- Integrate frontend with backend

## 📬 Contact
For any questions, reach out to **nxumalobukeka66@gmail.com** or open an issue on GitHub!
