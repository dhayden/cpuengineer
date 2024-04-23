from flask import Blueprint, send_from_directory

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/about')
@main.route('/articles')
def home():
    return send_from_directory('../client/build', 'index.html')
