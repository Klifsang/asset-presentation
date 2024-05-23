from flask import jsonify, request, session
from server.models.Notifications import Notifications
from server.app import db

def get_notifications():
    """
    Returns a list of all notifications
    """
    id = session["user_id"]
    notifs = Notifications.query.filter_by(user_id = id).all()
    return jsonify([notif.to_dict() for notif in notifs]),200

def delete_notifications(id):
    """
    Deletes all notifications
    """
    Notifications.query.filter_by(id = id).delete()
    db.session.commit()
    return jsonify({"message": "Notifications deleted"}),200