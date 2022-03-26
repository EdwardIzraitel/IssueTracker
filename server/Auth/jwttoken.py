from json import load
from fastapi import status
import os
from dotenv import load_dotenv
from jose import jwt
from database.database import get_user
from exceptions.errors import Error

load_dotenv()

SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = os.getenv('ALGORITHM')


def create_access_token(user: dict):
    return jwt.encode(user, SECRET_KEY, algorithm=ALGORITHM)


def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        user = get_user(payload.get('username'))
        return user
    except:
        Error.throw_error("Could not validate credentials",
                          status.HTTP_401_UNAUTHORIZED)
