from flask import jsonify, request, session
from server.models.employee import Employee
from server.models.admin import Admin

def login():
    from server.app import bcrypt
    data = request.get_json()
    print(data)
    username = data.get('username')
    password = data.get('password')
    authcode = data.get('authcode')
    print(username, password, authcode)
    user = None
    is_admin = False
    if authcode:
        user = Admin.query.filter_by(username=username).first()
        is_admin = True if user is not None else False 
        print(authcode)
    else:
        user = Employee.query.filter_by(username=username).first()
    if user is None:
        return jsonify({"error": "Unauthorized"}), 401
    
    if is_admin and not bcrypt.check_password_hash(user.authcode, authcode):
        return jsonify({"error": "Username or password & authcode do not match"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Username or password incorrect"}), 401
    
    session["user_id"] = user.id
    session["user_level"] = "admin" if is_admin else "employee"
    print(session.get("user_id"),f'hi')
    get_current_user()
    return jsonify(user.to_dict()), 200
    


def get_current_user():
    user_id = session.get("user_id")
    if user_id is None:
        return jsonify({"error": "Unauthorized"}), 401
    
    user_level = session.get("user_level")
    user = None
    if user_level == "admin":
        user = Admin.query.get(user_id)
    else:
        user = Employee.query.get(user_id)
    
    if user is None:
        return jsonify({"error": "User not found"}), 404

    return jsonify(user.to_dict()), 200
    
def logout():
    session.pop("user_id", None)
    session.pop("user_level", None)
    return jsonify({"message": "Logged out successfully"}), 200