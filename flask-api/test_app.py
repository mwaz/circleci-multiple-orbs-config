import pytest, requests, json
import main
import config


@pytest.fixture
def client():
    main.app.config.from_object(config.TestingConfig)
    with main.app.test_client() as client:
        with main.app.app_context():
            yield client


def test_create_user(client):
    pass


def test_create_multiple_users(client):
    pass


def test_fetch_users(client):
    pass


def test_login_user(client):
    pass
