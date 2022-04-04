from fastapi import status
from dotenv import load_dotenv
from jose import jwt
from database.users import get_user
from exceptions.errors import Error
from env.variables import SECRET_KEY, ALGORITHM


def create_access_token(user: dict):
    return jwt.encode(user, SECRET_KEY, algorithm=ALGORITHM)


def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        user = get_user(payload.get('username'))
        user.pop('hashed_password')
        return {"x": True}
    except:
        return {"x": False}
