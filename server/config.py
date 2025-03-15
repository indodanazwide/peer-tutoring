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