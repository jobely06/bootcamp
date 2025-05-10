from locust import HttpUser, TaskSet, task, between
import random
import string

def random_email():
    return ''.join(random.choices(string.ascii_lowercase, k=8)) + "@test.com"

def random_password():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=10))

class UserBehavior(TaskSet):
    def on_start(self):
        self.email = random_email()
        self.password = random_password()
        self.register()
        self.login()

    def register(self):
        self.client.post("/register", data={
            "email": self.email,
            "password": self.password,
            "confirm_password": self.password
        })

    def login(self):
        self.client.post("/login", data={
            "email": self.email,
            "password": self.password
        })

    @task
    def add_info(self):
        self.client.post("/add_info", data={
            "firstname": "Test",
            "middlename": "User",
            "lastname": "Load",
            "age": random.randint(18, 60),
            "address": "123 Locust Lane",
            "birthday": "1995-01-01"
        })

    @task
    def home(self):
        self.client.get("/home")

class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    wait_time = between(1, 2)
