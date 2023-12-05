import os
import sys
from flask import Flask
from flask import request, make_response, jsonify
from flask_cors import CORS

app = Flask(__name__, static_folder='', template_folder='')
CORS(app)

sys.path.append('../src')
from OpenAI.src.inputGPT4Vision import InputGPT4Vision
from DeepLAPI.translator import DeepLTranslator

gpt4v = InputGPT4Vision()
translator = DeepLTranslator()

@app.route('/', methods=['GET'])
def index():
  return 'Flask server is running :)'

@app.route('/add_text_content', methods=['POST'])
def add_text_content():
  arguments = request.get_json()
  if len(gpt4v.payload['messages']) == 0:
    gpt4v.add_message_entry_as_specified_role(role=arguments['role'])

  gpt4v.add_text_content(
    text=translator.translate(
      text=arguments['text'],
      source_lang='JA',
      target_lang='EN-US',
    ) if arguments['doTranslate'] else arguments['text']
  )
  response = {'result': True}

  return make_response(jsonify(response))

@app.route('/add_urlimage_content', methods=['POST'])
def add_urlimage_content():
  arguments = request.get_json()
  gpt4v.add_urlimage_content(
    url=arguments['urlimage']
  )
  response = {'result': True}

  return make_response(jsonify(response))

@app.route('/add_b64image_content', methods=['POST'])
def add_b64image_content():
  arguments = request.get_json()
  gpt4v.add_b64image_content(
    b64image=arguments['b64image']
  )
  response = {'result': True}

  return make_response(jsonify(response))

@app.route('/print_payload', methods=['GET'])
def print_payload():
  payload = gpt4v.print_payload()
  response = {'result': True, 'payload': payload}

  return make_response(jsonify(response))

@app.route('/execute', methods=['GET'])
def execute():
  text = gpt4v.execute()
  text_in_ja = translator.translate(text=text, source_lang='EN', target_lang='JA')
  response = {'result': True, 'text': text, 'text_in_ja': text_in_ja}

  return make_response(jsonify(response))

@app.route('/delete_messages', methods=['GET'])
def delete_messages():
  gpt4v.delete_messages()
  response = {'result': True}

  return make_response(jsonify(response))

@app.route('/delete_content', methods=['GET'])
def delete_content():
  gpt4v.delete_content(index=-1)
  response = {'result': True}

  return make_response(jsonify(response))

if __name__ == '__main__':
  app.debug = True
  app.run(host='127.0.0.1', port=5000)