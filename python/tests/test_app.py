import pytest
import json
import falcon
from falcon import testing

from src.Algorithm.app import app


def client():
    return testing.TestClient(app)


def test_post_insertion_sort():

    #Act
    response = client().simulate_post('/insertion_sort', 
        body=bytes(json.dumps({'data':[15,33,2,6]}), "UTF8"),
        headers={"content-type":"application/json"})

    #Test
    assert response.status == falcon.HTTP_OK
    assert response.json == json.dumps({'data':[2,6,15,33]})