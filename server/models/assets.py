from sqlalchemy_serializer import SerializerMixin
from server.app import db

class Assets(db.Model):
    __tablename__ = 'assets'
    
    id = db.Column(db.Integer, primary_key=True)
    assetname = db.Column(db.String)
    description = db.Column(db.String)
    condition = db.Column(db.String)
    image_url = db.Column(db.String)
    availability = db.Column(db.String, default="available")
    quantity = db.Column(db.Integer)
    
    requests = db.relationship('Requests', back_populates='asset')
    
    
    def to_dict(self):
        return {
            'id': self.id,
            'assetname': self.assetname,
            'description': self.description,
            'condition': self.condition,
            'image_url': self.image_url,
            'availability': self.availability,
            'quantity': self.quantity,
        }