from fastapi import HTTPException, status


class Error():
    def throw_error(message: str, error_code: status):
        raise HTTPException(status_code=error_code, detail=message)
