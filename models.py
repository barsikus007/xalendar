from enum import Enum
from typing import Optional, List
from datetime import datetime

from pydantic import BaseModel, Field


class ResponseID(BaseModel):
    id: int


class ResponseSuccess(BaseModel):
    success: bool


class Role(str, Enum):
    student = 'student'
    teacher = 'teacher'


# class CommentIn(BaseModel):
#     author: str = Field('name', min_length=2, max_length=64)
#     body: str = Field('text', min_length=3)
#
#
# class QuestionIn(BaseModel):
#     author: str = Field('name', min_length=2, max_length=64)
#     title: str = Field('header')
#     body: str = Field('text', min_length=3)
#     tags: Optional[str] = None


class EventIn(BaseModel):
    id: int = 1
    start: datetime
    end: datetime
    name: str = 'IT practice'
    color: str = '#696969'
    aud: str = '1-337'
    link: Optional[str] = 'https://google.com'
    teacher: str = 'Васильев С.С.'
    module_name: str = 'HardCORE'
    theme: str = 'IT introduction'
    group_name: str = 'IT1'


class EventOut(BaseModel):
    id: int = 1
    start: datetime
    end: datetime
    name: str = 'IT practice'
    color: str = '#696969'
    aud: str = '1-337'
    link: Optional[str] = 'https://google.com'
    teacher: str = 'Васильев С.С.'
    module_name: str = 'HardCORE'
    theme: str = 'IT introduction'
    group_name: str = 'IT1'


class UserOut(BaseModel):
    id: int = 1
    role: Role

