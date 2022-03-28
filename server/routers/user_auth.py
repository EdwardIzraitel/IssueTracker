from fastapi import APIRouter, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from models.user import User
from Auth.hashing import Hash
from Auth.jwttoken import create_access_token
from database.users import *
from exceptions.errors import Error


router = APIRouter(prefix="/api")


@router.post("/login")
def login(request: OAuth2PasswordRequestForm = Depends()):
    user = get_user(request.username)
    if not user:
        Error.throw_error("User does not exist",
                          status.HTTP_404_NOT_FOUND)
    if not Hash.verify_password(request.password, user['hashed_password']):
        Error.throw_error("Wrong username or password",
                          status.HTTP_404_NOT_FOUND)
    token = create_access_token(user)
    return{'access_token': token, 'token_type': 'bearer'}


# create new user
@router.post('/register')
def new_user(user: User):
    user_dict = user.dict()
    user_dict.update(
        {'hashed_password': Hash.bcrypt(user.hashed_password)})
    user_created = create_user(user_dict)
    if not user_created:
        Error.throw_error("User already exists",
                          status.HTTP_400_BAD_REQUEST)
    return user_created
