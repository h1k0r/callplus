import os
from flask import Flask, render_template, request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# create the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET")

# Configure the database
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}

# Initialize the database
db = SQLAlchemy()
db.init_app(app)

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'  # Will be implemented later

@login_manager.user_loader
def load_user(user_id):
    from models import User
    return User.query.get(int(user_id))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/features')
def features():
    return render_template('features.html')

@app.route('/solutions')
def solutions():
    return render_template('solutions.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            from models import Contact
            contact = Contact(
                name=request.form.get('name'),
                email=request.form.get('email'),
                mobile_number=request.form.get('mobile_number'),  # Added mobile number
                message=request.form.get('message')
            )
            db.session.add(contact)
            db.session.commit()
            flash('Thank you for your message! We will get back to you soon.', 'success')
        except Exception as e:
            app.logger.error(f"Error saving contact form: {str(e)}")
            flash('An error occurred while sending your message. Please try again.', 'danger')
        return redirect(url_for('contact'))

    return render_template('contact.html')

with app.app_context():
    # Import models and create tables
    import models
    db.create_all()