db.auth("admin", "admin");
db = db.getSiblingDB("mivia");
db.log.insertOne({message: "Database created."});
db.createUser({
    user: "admin",
    pwd: "admin",
    roles: [
        {
            role: "readWrite",
            db: "mivia"
        }
    ]
});
