import time
from hashlib import md5
from typing import Optional, Dict, Union, List

from fastapi import FastAPI, Request, Path, Query, Form
from fastapi.exceptions import HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware


# from config import DB_AUTH, TOKEN
# from db import Database as Db
# from models import ResponseID, ResponseSuccess
# from models import VoteType, PostType, PostTypeQA
from models import EventIn
from models import EventOut, UserOut
# from models import Questions, Answers, Comments

# db = Db(DB_AUTH)

app = FastAPI(
    title='xalendar official API docs',
    version='0.1',
    description='Totally not a clone of Google Calendar!',
    # root_path='/xalendar'
)

app.mount('/calendar', StaticFiles(directory='build', html=True), name='build')
# app.mount('/static', StaticFiles(directory='static'), name='static')


def get_user_hash(request: Request):
    user_agent = request.headers.get('user-agent', '')
    # if not user_agent:
    #     raise HTTPException(status_code=403, detail='Invalid user agent')
    user_hash = md5(
        f'{request.client.host}{user_agent}'.encode()
    ).hexdigest()
    return user_hash


@app.middleware('http')
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers['X-User-Secret'] = get_user_hash(request)
    response.headers['X-Process-Time'] = str(process_time)
    return response


@app.get('/api/v1/user', response_model=UserOut, tags=['users'])
async def get_users(
        name: str
):
    """Get specified user"""
    return {
        'id': 1,
        'role': 'student',
    }


@app.get('/api/v1/events', response_model=List[EventOut], tags=['events'])
async def get_events(
        id_: int = Query(..., alias='id'),
        from_: str = Query(..., alias='from', description='01.01.2021'),  # TODO non-required
        to_: str = Query(..., alias='to', description='07.01.2021')
):
    """Get events of the user for specified dates"""
    return 'WIP'


@app.post('/api/v1/events', response_model=EventOut, tags=['events'])
async def post_event(
        event: EventIn,
):
    """Create new event"""
    return 'WIP'


@app.patch('/api/v1/events', response_model=EventOut, tags=['events'])
async def patch_event(
        event: EventIn,
):
    """Update existing event"""
    return {'WIP': 'WIP'}


@app.get('/api/v1/meetings', response_model=Dict[int, str], tags=['meetings'])
async def get_meetings():
    """Get all meetings"""
    return {
        1: 'Мел',
        2: 'неМел',
    }


if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app', host='0.0.0.0', port=80, reload=True)
