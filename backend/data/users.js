import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@proshop.com",
    password: bcrypt.hashSync("3b3b3b3b", 10),
    isAdmin: true,
    isBusinessOwnner: true,
  },
  {
    name: "Rahma User",
    email: "rahma@proshop.com",
    password: bcrypt.hashSync("?12345?", 10),
    isBusinessOwnner: true,
  },
  {
    name: "mubara User",
    email: "mubarak@proshop.com",
    password: bcrypt.hashSync("?12345?", 10),
    isBusinessOwnner: true,
  },
  {
    name: "mubi User",
    email: "mubi@gmail.com",
    password: bcrypt.hashSync("3b3b3b3b", 10),
    isBusinessOwnner: true,
  },
];

export default users;
