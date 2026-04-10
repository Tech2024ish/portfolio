from fastapi import APIRouter, HTTPException
from database import get_client
from models.schemas import Skill
from typing import List

router = APIRouter()


@router.get("/skills", response_model=List[Skill])
def get_skills():
    with get_client() as client:
        response = client.get("/skills", params={"select": "*"})
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return response.json()
