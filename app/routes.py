from flask import Blueprint, jsonify, send_from_directory
from .article_generation_script import generate_article
from flask_cors import CORS
from azure.storage.blob import BlobServiceClient, BlobClient
import os

main = Blueprint('main', __name__)

# Set up CORS with environment-specific origins
cors_origins = os.getenv('CORS_ORIGINS', "http://127.0.0.1:5000,http://localhost:5000").split(',')
CORS(main, origins=cors_origins, supports_credentials=True)

# Azure Blob Storage details
connection_string = os.getenv('AZURE_CONNECTION_STRING')
container_name = os.getenv('AZURE_CONTAINER_NAME')
blob_name = os.getenv('AZURE_BLOB_NAME')


def get_blob_content(connection_string, container_name, blob_name):
    blob_service_client = BlobServiceClient.from_connection_string(connection_string)
    blob_client = blob_service_client.get_blob_client(container_name, blob_name)
    return blob_client.download_blob().readall()


@main.route('/')
@main.route('/about')
@main.route('/articles')
def home():
    return send_from_directory('../client/build', 'index.html')


@main.route('/api/get-txt', methods=['GET'])
def get_txt():
    content = get_blob_content(connection_string, container_name, blob_name)
    return jsonify({"content": content.decode('utf-8')})
