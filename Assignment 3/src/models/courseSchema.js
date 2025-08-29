const courseSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "duration", "fees"],
      properties: {
        title: {
          bsonType: "string",
          description: "Course title must be a string and is required",
        },
        duration: {
          bsonType: "int",
          minimum: 1,
          description: "Duration must be a positive integer (e.g., hours, weeks)",
        },
        fees: {
          bsonType: "int",
          minimum: 0,
          description: "Fees must be a positive number",
        },
        description: {
          bsonType: "string",
          description: "Optional course description",
        },
      },
    },
  },
};


export default courseSchema; 