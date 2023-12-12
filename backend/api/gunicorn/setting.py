import os

wsgi_app = 'server:app'
reload = False
accesslog = '-'
errorlog = '-'
loglevel = 'info'
proc_name = 'WebAppGPT4V-backend-gunicorn'
bind = '0.0.0.0:' + os.getenv('EXPOSED_PORT', 5432)
workers = 1