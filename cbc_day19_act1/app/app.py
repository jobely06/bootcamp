from flask import Flask, render_template, request, redirect, session, url_for
from flask_mysqldb import MySQL
import MySQLdb.cursors
import hashlib

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# MySQL configuration (use your own credentials if different)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask_app'

mysql = MySQL(app)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        email = request.form['email']
        password = hashlib.sha256(request.form['password'].encode()).hexdigest()
        confirm = hashlib.sha256(request.form['confirm_password'].encode()).hexdigest()

        if password == confirm:
            cursor = mysql.connection.cursor()
            cursor.execute("INSERT INTO users (email, password) VALUES (%s, %s)", (email, password))
            mysql.connection.commit()
            return "Registered successfully"
        else:
            return "Passwords do not match"
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = hashlib.sha256(request.form['password'].encode()).hexdigest()

        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s", (email, password))
        user = cursor.fetchone()
        if user:
            session['loggedin'] = True
            session['id'] = user['id']
            session['email'] = user['email']
            return redirect('/home')
        else:
            return "Invalid credentials"
    return render_template('login.html')

@app.route('/add_info', methods=['POST'])
def add_info():
    if 'loggedin' in session:
        user_id = session['id']
        firstname = request.form['firstname']
        middlename = request.form['middlename']
        lastname = request.form['lastname']
        age = request.form['age']
        address = request.form['address']
        birthday = request.form['birthday']

        cursor = mysql.connection.cursor()
        cursor.execute("""INSERT INTO user_info (user_id, firstname, middlename, lastname, age, address, birthday)
                          VALUES (%s, %s, %s, %s, %s, %s, %s)""",
                       (user_id, firstname, middlename, lastname, age, address, birthday))
        mysql.connection.commit()
        return "Info added"
    return "Unauthorized"

@app.route('/home', methods=['GET', 'POST'])
def home():
    if 'loggedin' in session:
        return render_template('home.html', email=session['email'])
    return redirect('/login')


if __name__ == "__main__":
    app.run(debug=True)
