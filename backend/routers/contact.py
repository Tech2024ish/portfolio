from fastapi import APIRouter, HTTPException
from database import get_client
from models.schemas import ContactMessage, ContactResponse

router = APIRouter()


@router.post("/contact", response_model=ContactResponse)
def send_contact(body: ContactMessage):
    with get_client() as client:
        response = client.post("/contacts", json={
            "name": body.name,
            "email": body.email,
            "message": body.message,
        })
        if response.status_code not in (200, 201):
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return ContactResponse(success=True, message="Message sent successfully!")
