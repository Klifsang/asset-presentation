from flask import jsonify, request, session
from server.models.admin import Admin
from server.models.databaseconfig import db

def register_admin():
    from server.app import bcrypt
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    authcode = data.get('authcode')
    username = data.get('username')
    phonenumber = data.get('phonenumber')
    address = data.get('address')
    role = data.get('role')
    level = data.get('level')
    
    admin = Admin(email=email, password=bcrypt.generate_password_hash(password),authcode=bcrypt.generate_password_hash(authcode), username=username, phonenumber=phonenumber, address=address, role=role, level=level)
    db.session.add(admin)
    db.session.commit()
    return {"message": "Admin added successfully"}, 201 
def delete_admin():
    id = session.get("user_id")
    admin = Admin.query.filter_by(id=id).first()
    if admin:
        db.session.delete(admin)
        db.session.commit()
        session.pop("user_id", None)
        session.pop("user_level", None)
    return {"message": "Admin deleted successfully"}, 201   

def patch_admin():
    data = request.get_json()
    id = session.get("user_id")
    admin = Admin.query.filter_by(id=id).first()
    if admin:
        for key, value in data.items():
            setattr(admin, key, value)
        db.session.commit()
    return {"message": "Admin updated successfully"}, 201   

def get_admin():
    data = request.get_json()
    id = data.get("id")
    admin = Admin.query.filter_by(id=id).first()
    print(admin)
    if admin:
        return jsonify(admin.to_dict())
