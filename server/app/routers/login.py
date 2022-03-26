from re import S
from fastapi import APIRouter, Depends, HTTPException, status
from jose import jwt
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from app.models.user import User
from app.database.database import *

SECRET_KEY = "xFw2mZV3/FjdZX9NgrniHOdMaCzsFu9UcSFimGDNvw0"
ALGORITHM = "HS256"


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter(prefix="/api")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def verify_password(password, hashed_password):
    return pwd_context.verify(password, hashed_password)


def authenticate_user(email: str, password: str):
    user = get_user(email)
    if not user:
        return False
    if not verify_password(password, user['hashed_password']):
        return False
    return user


def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        user = get_user(payload.get('email'))
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='Invalid username or password'
        )
    return user


@router.post("/login")
def login(request: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(request.username, request.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="Wrong password or username")
    token = jwt.encode(user, SECRET_KEY, algorithm=ALGORITHM)
    return{'access_token': token, 'token_type': 'bearer'}
# @router.post('/login', response_model=User)
# async def read_user(user: Login = Depends(get_current_user)):
#     return user


# create new user
@router.post('/register')
def new_user(user: User):
    user_dict = user.dict()
    user_dict.update(
        {'hashed_password': pwd_context.hash(user.hashed_password)})
    user_created = create_user(user_dict)
    if not user_created:
        return {'error': 'User already exists'}
    return user_created
