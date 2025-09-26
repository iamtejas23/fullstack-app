// MongoDB initialization script
db = db.getSiblingDB('fullstack-crud');

// Create a collection with a sample document
db.users.insertOne({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  profession: "Software Developer",
  createdAt: new Date(),
  updatedAt: new Date()
});

print('Database initialized with sample data');
