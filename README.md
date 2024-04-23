# CPU Engineer

CPU Engineer is a web application designed to provide engineering solutions and tools for CPU design and analysis. It utilizes a Flask backend with a React frontend, offering a responsive and interactive user experience.

## Technologies

- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Database**: [Optional - specify database if used]

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or newer
- Node.js and npm
- Git (for version control)

### Installation

Follow these steps to get your development environment running:

1. **Clone the repository**
   ```bash
   git clone https://github.com/derrick/cpuengineer.git
   cd cpuengineer

2. **Set up the backend**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```
3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```
   
Configuring
Set up necessary environment variables:
```bash
export FLASK_APP=app.py
export FLASK_ENV=development  # Enables debug mode ```

4. **Run the application**
   ```bash
   cd ../backend
   flask run
   ```
   In a separate terminal:
   ```bash
   cd ../frontend
   npm start
   ```

This will launch the React application on http://localhost:3000/ and the Flask API on http://localhost:5000/.

## Debugging
### Backend
- Flask Debug Mode: Ensure FLASK_ENV is set to development to enable debug mode, which provides an interactive debugger in the browser.
- Logging: Use Flask's built-in logging to output debugging information:
```python
import logging
logging.basicConfig(level=logging.DEBUG)

```

### Frontend
- React Developer Tools: Use browser extensions like React Developer Tools for Chrome or Firefox to inspect React component hierarchies.
- Console Logs: Utilize console.log statements within your React components to debug values and application flow.

### Author
Derrick - Initial work - Profile