from locust import HttpUser, TaskSet, task, between
import random
import string

user_counter = 0  # Global counter to track simulated users

def random_email():
    return ''.join(random.choices(string.ascii_lowercase, k=8)) + "@test.com"

def random_password():
    return ''.join(random.choices(string.ascii_letters + string.digits, k=10))

class UserBehavior(TaskSet):
    def on_start(self):
        global user_counter
        self.user_id = user_counter + 1
        user_counter += 1

        self.email = f"user{self.user_id}@test.com"
        self.password = random_password()

        print(f"user{self.user_id}: registering...")
        self.register()

        print(f"user{self.user_id}: logging in...")
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

    @task(1)
    def add_info(self):
        self.client.post("/add_info", data={
            "firstname": "Test",
            "middlename": "User",
            "lastname": "Load",
            "age": random.randint(18, 60),
            "address": "123 Locust Lane",
            "birthday": "1995-01-01"
        })

        print(f"user{self.user_id}: submitted info")

    @task(1)
    def home(self):
        self.client.get("/home")
        print(f"user{self.user_id}: visited home")

        print(f"user{self.user_id}: done Queue ✅\n")  # Final user log

class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    wait_time = between(1, 2)
