from pydantic import BaseModel, EmailStr
from typing import List, Optional


class Project(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    tech_stack: List[str]
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None


class Skill(BaseModel):
    id: Optional[int] = None
    name: str
    category: str
    level: int  # 1-100


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str
