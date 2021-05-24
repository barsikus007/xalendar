import time
from hashlib import md5
from typing import Optional, Dict, Union

from fastapi import FastAPI, Request, Path, Query, Form
from fastapi.exceptions import HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse, StreamingResponse

from config import DB_AUTH, TOKEN
from db import Database as Db
from models import ResponseID, ResponseSuccess
from models import VoteType, PostType, PostTypeQA
from models import QuestionIn, AnswerIn, CommentIn
from models import QuestionOut
from models import Questions, Answers, Comments

# db = Db(DB_AUTH)

app = FastAPI(
    title='xalendar official API docs',
    version='0.1',
    description='Totally not a clone of Google Calendar!'
)

app.mount("/", StaticFiles(directory="static", html=True), name="static")
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


@app.get('/api/v1/events', response_model=List[Event], tags=['events'])
async def get_events(id_: int, from_: str, to_: str):
    """Gets all the TODO on the site."""
    return 'WIP'
    # return await db.get_questions(page)
#
#
# @app.get('/api/v1/question/{question_id}', response_model=QuestionOut, tags=['question'])
# async def get_question(
#         request: Request,
#         question_id: int = Path(..., ge=1),
# ):
#     """Gets specific question from the site."""
#     user_hash = get_user_hash(request)
#     return await db.get_question(user_hash, question_id)
#
#
# @app.get('/api/v1/questions/{question_id}/answers', response_model=Answers, tags=['answer'])
# async def get_answers(
#         request: Request,
#         question_id: int = Path(..., ge=1),
#         page: Optional[int] = Query(1, ge=1)
# ):
#     """Gets the answers to a set of questions identified in id."""
#     user_hash = get_user_hash(request)
#     return await db.get_answers(user_hash, question_id, page)
#
#
# @app.get('/api/v1/{post_type}/{post_id}/comments', response_model=Comments, tags=['comment'])
# async def get_comments(post_type: PostTypeQA, post_id: int, request: Request, count: Optional[int] = None):
#     """Gets the comments on a set of questions and answers."""
#     user_hash = get_user_hash(request)
#     return await db.get_comments(user_hash, post_type, post_id, count)
#
#
# @app.post('/api/v1/questions/add', response_model=ResponseID, tags=['question'])
# async def add_question(question: QuestionIn):
#     """Create a new question."""
#     return await db.create_question(question)
#
#
# @app.post('/api/v1/questions/{question_id}/answers/add', response_model=ResponseID, tags=['answer'])
# async def add_answer(question_id: int, answer: AnswerIn):
#     """Create a new answer on the given question."""
#     return await db.create_answer(question_id, answer)
#
#
# @app.post('/api/v1/{post_type}/{post_id}/comments/add', response_model=ResponseID, tags=['comment'])
# async def add_comment(post_type: PostTypeQA, post_id: int, comment: CommentIn):
#     """Create a new comment."""
#     return await db.create_comment(post_type, post_id, comment)
#
#
# @app.post('/api/v1/{post_type}/{post_id}/{action}', response_model=ResponseSuccess, tags=['vote'])
# async def vote(post_type: PostType, post_id: int, action: VoteType, request: Request):
#     """Upvotes an post."""
#     user_hash = get_user_hash(request)
#     return {'success': await db.set_vote(post_type.value, post_id, action, user_hash)}
#
#
# @app.post('/api/v1/{post_type}/{post_id}/{action}/undo', response_model=ResponseSuccess, tags=['vote'])
# async def undo_vote(post_type: PostType, post_id: int, action: VoteType, request: Request):
#     """Undoes an upvote on an post."""
#     user_hash = get_user_hash(request)
#     return {'success': await db.set_vote(post_type.value, post_id, action, user_hash, True)}
#
#
# @app.patch('/api/v1/{post_type}/{post_id}', response_model=ResponseSuccess, tags=['other'])
# async def edit_post(
#         admin_token: str,
#         fields: Dict[str, Union[int, str]],
#         post_type: PostType = Path(...),
#         post_id: int = Path(..., ge=1),
# ):
#     """Remove specific post from the site."""
#     if admin_token != TOKEN:
#         raise HTTPException(status_code=403, detail='Incorrect token')
#     return {'success': await db.update_post(post_type, post_id, fields)}
#
#
# @app.delete('/api/v1/{post_type}/{post_id}', response_model=ResponseSuccess, tags=['other'])
# async def delete_post(
#         admin_token: str,
#         post_type: PostType = Path(...),
#         post_id: int = Path(..., ge=1),
# ):
#     """Remove specific post from the site."""
#     if admin_token != TOKEN:
#         raise HTTPException(status_code=403, detail='Incorrect token')
#     return {'success': await db.delete_post(post_type, post_id)}
#
#
# @app.get('/about', include_in_schema=False)
# async def about():
#     """???"""
#     return StreamingResponse(open('static/about.webm', 'rb'), media_type="video/mp4")


if __name__ == '__main__':
    import uvicorn
    uvicorn.run('main:app', host='0.0.0.0', port=80, reload=True)
