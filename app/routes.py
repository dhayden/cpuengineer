from flask import Blueprint, jsonify, send_from_directory
from .article_generation_script import generate_article
from flask_cors import CORS

main = Blueprint('main', __name__)
CORS(main)  # Apply CORS to the main Blueprint


@main.route('/')
@main.route('/about')
@main.route('/articles')
def home():
    return send_from_directory('../client/build', 'index.html')


@main.route('/api/generate-article', methods=['GET'])
def get_article():
    prompt = "Here are some reasons why programming every day is beneficial:"
    article = generate_article(prompt)
    return jsonify({"article": article})
