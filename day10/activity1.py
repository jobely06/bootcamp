from flask import Flask, render_template, request

app = Flask(__name__)

def find_longest_name(names):
    if not names:
        return None
    longest_name = max(names, key=len)
    return longest_name

@app.route('/', methods=['GET', 'POST'])
def index():
    longest_name = None
    if request.method == 'POST':
        user_input = request.form['names']
        names_list = [name.strip() for name in user_input.split(',')]
        longest_name = find_longest_name(names_list)
    return render_template('index.html', longest_name=longest_name)

if __name__ == '__main__':
    app.run(debug=True)