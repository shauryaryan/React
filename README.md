1. Clone the Repository
git clone

3. Setting Up the Backend (Django)
Navigate to the Backend Directory:

Create a Virtual Environment:
python3 -m venv venv
source venv/bin/activate  # On Windows you can use `venv\Scripts\activate`

Install Dependencies:
pip install -r requirements.txt
(If requirements.txt is not available, you can manually install Django by running pip install django.)
Apply Migrations:
python manage.py migrate
Run the Backend Server:
python manage.py runserver
The Django server will start at http://127.0.0.1:8000/.

3. Setting Up the Frontend (React)

Navigate to the Frontend Directory:
Install Dependencies:
npm install

Run the Frontend Server:
npm start
The React app will start at http://localhost:3000/.
