import datetime
from server.app import bcrypt, app

with app.app_context():
    from server.models.admin import Admin
    from server.models.assets import Assets
    from server.models.employee import Employee
    from server.models.requests import Requests
    from server.models.databaseconfig import db
    assets = [
        {
        "assetname": "macbook",
        "description": "A high-performance laptop",
        "condition": "Good",
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        "availability": "available",
        "quantity": 12
        },
        {
        "assetname": "samsung printer",
        "description": "A reliable printer",
        "condition": "medium",
        "image_url": "https://plus.unsplash.com/premium_photo-1682145762522-cf0ea19fcd89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Ftc3VuZyUyMHByaW50ZXJ8ZW58MHx8MHx8fDA%3D",
        "availability": "available",
        "quantity": 2
        },
        {
        "assetname": "office desks(mahogany)",
        "description": "Spacious office desks made of mahogany",
        "condition": "Good",
        "image_url": "https://images.unsplash.com/photo-1594235048794-fae8583a5af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG9mZmljZSUyMGRlc2t8ZW58MHx8MHx8fDA%3D",
        "availability": "available",
        "quantity": 10
        },
        {
        "assetname": "calculator",
        "description": "Standard calculator for office use",
        "condition": "Good",
        "image_url": "https://images.unsplash.com/photo-1598690042638-1b9844b7ef83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNhbGN1bGF0b3J8ZW58MHx8MHx8fDA%3D",
        "availability": "available",
        "quantity": 12
        },
        {
        "assetname": "security clothes",
        "description": "Clothing for security personnel",
        "condition": "medium",
        "image_url": "https://plus.unsplash.com/premium_photo-1682125948844-e2dc8996b0f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBjbG90aGVzfGVufDB8fDB8fHww",
        "availability": "available",
        "quantity": 2
        },
        {
        "assetname": "macbook m3",
        "description": "A high-performance laptop",
        "condition": "Good",
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        "availability": "available",
        "quantity": 12
        },
        {
        "assetname": "toyota",
        "description": "A reliable vehicle",
        "condition": "medium",
        "image_url": "https://images.unsplash.com/photo-1569769928296-0b32cc843f58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRveW90YXxlbnwwfHwwfHx8MA%3D%3D",
        "availability": "available",
        "quantity": 3
        },
        {
        "assetname": "badge",
        "description": "Identification badges",
        "condition": "Good",
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        "availability": "available",
        "quantity": 50
        },
        {
        "assetname": "macbook",
        "description": "A high-performance laptop",
        "condition": "Good",
        "image_url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        "availability": "available",
        "quantity": 12
        }
    ]

    for asset in assets:
        new_asset = Assets(
            assetname=asset['assetname'],
            description=asset['description'],
            condition=asset['condition'],
            image_url=asset['image_url'],
            availability=asset['availability'],
            quantity=asset['quantity']
        )
        db.session.add(new_asset)
    db.session.commit()
    

    admin1 = Admin(
        email='wiclifsang@gmail.com', 
        password=bcrypt.generate_password_hash('password').decode('utf-8'), authcode=bcrypt.generate_password_hash('5100').decode('utf-8'), 
        username='klifsang', 
        phonenumber='0123456789', 
        address='112,bomet', 
        role='procurement', 
        level='admin'
        )
    admin2 = Admin(
        email='abel@gmail.com', 
        password=bcrypt.generate_password_hash('password123').decode('utf-8'), authcode =bcrypt.generate_password_hash('5145').decode('utf-8'), 
        username='Abel', 
        phonenumber='0987654321', 
        address='112,Kapsabet', 
        role='CEO', level='admin'
        )
    
    employee1 = Employee(
        email='wiclifsang@gmail.com', 
        department='Medical', 
        password=bcrypt.generate_password_hash('password').decode('utf-8'),
        username='Weldon', 
        phonenumber='0123456789', 
        address='112,bomet', 
        status='pending',
        role='procurement', 
        level='admin'
        )
    employee2 = Employee(
        email='abel@gmail.com', 
        department='Mechanical', 
        password=bcrypt.generate_password_hash('password123').decode('utf-8'),
        username='Chris', 
        phonenumber='0987654321', 
        address='112,Kapsabet',  
        status='pending',
        role='CEO', 
        level='admin'
        )
    
    employee3 = Employee(
        username='Kelvin', 
        department='Logistics', 
        address='1-Nairobi', 
        status='pending', 
        email='kelvin@gmail.com', 
        phonenumber='0987654321', 
        password=bcrypt.generate_password_hash('123password').decode('utf-8'), 
        role="cleaning", 
        level='employee'
        )
    employee4 = Employee(
        username='Glen', 
        department='Mechanical', 
        address='100-Nairobi',  
        status='pending',
        email='glen@gmail.com', 
        phonenumber='0123456789', 
        password=bcrypt.generate_password_hash('password123').decode('utf-8'), 
        role="typist", 
        level='employee'
        )

    req = Requests(
        asset_id=1,
        user_id=1,
        admin_id=1,
        comment="I need this asset",
        quantity= 1,
        status="pending",
        assigneddate=datetime.date(2021, 4, 1),
        returndate=datetime.date(2021, 4, 2),
        returnstatus="pending"
    )
    req2 = Requests(
        asset_id=2,
        user_id=2,
        admin_id=1,
        comment="I need this asset",
        quantity= 2,
        status="pending",
        assigneddate=datetime.date(2021, 4, 1),
        returndate=datetime.date(2021, 4, 2),
        returnstatus="pending"
    )
    
    db.session.add_all([admin1, admin2, employee1, employee2, employee3, employee4, req, req2])
    db.session.commit()





    
    
    
    
    
    # asset1 = Assets(
    #     assetname="car",
    #     description="Double-cabin",
    #     condition="brand new",
    #     availability="available"
    #     )
    # asset2 = Assets(
    #     assetname="Tipper", 
    #     description="20 tonnes", 
    #     condition="brand new", 
    #     availability="available"
    #     )
