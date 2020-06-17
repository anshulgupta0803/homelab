import json
import subprocess

from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route('/')
def rootpage():
    return render_template("./root.html")


@app.route('/run_speedtest')
def run_speedtest():
    command = 'speedtest -f json'.split(' ')
    process = subprocess.Popen(command, stdout=subprocess.PIPE)
    process.wait()

    return jsonify(json.loads(process.communicate()[0]))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='5000')
