const userSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "password", "age", "mobile","role"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name must be a string and required",
        },
        email: {
          bsonType: "string",
          pattern: "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$",
          description: "Must be a valid email and required",
        },
        password: {
          bsonType: "string",
          minLength: 4,
          description: "Password must be at least 6 characters and required",
        },
        age: {
          bsonType: "int",
          minimum: 0,
          description: "Age must be an integer >= 0 and required",
        },
        mobile: {
          bsonType: "string",
          pattern: "^[0-9]{10}$",
          description: "Must be a 10-digit phone number string",
        },
        role: {
          bsonType: "string",
          description: "Role must be a string and required",
        },
        courseIds: {
          bsonType: "array",
          items: {
            bsonType: "objectId",
            description: "Each must reference a Course _id",
          },
          description: "Array of course ObjectIds",
        },
        role: {
              enum: ["student", "admin"], 
              description: "Role must be either 'student' or 'admin'",
            },
      },
    },
  },
};

export default userSchema;