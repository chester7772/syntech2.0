from flask import Flask, render_template, redirect,request, url_for ,session, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'supersecretkey'


app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///users.db'

db= SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    email= db.Column(db.String(150),unique=True, nullable=False)
    username= db.Column(db.String(150),unique=True, nullable=False)
    password= db.Column(db.String(200),unique=True, nullable=False)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return redirect(url_for('login'))

@app.route("/register", methods= ["GET", "POST"])
def register():
    if request.method == "POST":
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']

        existing_user =User.query.filter_by(email=email).first()

        if existing_user:
            flash ("Email already exists")

        hashed_pw = generate_password_hash(password)

        new_user= User(email=email,username= username, password= hashed_pw)
        db.session.add(new_user)
        db.session.commit()
        return redirect (url_for('login'))

    return render_template('register.html')


@app.route("/login", methods= ["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form['email']
        password = request.form['password']

        user= User.query.filter_by(email= email).first()

        if not user:
            flash ("user does not exist")

        if user and check_password_hash(user.password,password):
            session["user_id"] = user.id
            session["username"] = user.username
            session["email"] = user.email

            return redirect(url_for('dashboard'))
        flash ("invalid username or password")

    return render_template("login.html")


@app.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        return redirect (url_for("login"))
    
    return render_template ("home.html", username=session["username"])


@app.route("/api/user")
def api_user():
    return {"username": session.get("username") ,"email": session.get("email")}

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)
