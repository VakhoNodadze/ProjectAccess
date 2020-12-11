import User from '../Icons/User';

export const users = [
  {
    _id: 1,
    avatar: User,
    name: "Samantha Standford",
    email: "samantha.standford@testtask.com",
    role: "Admin",
    active: true
  },
  {
    _id: 2,
    avatar: User,
    name: "Danniel Blichman",
    email: "danniel.blichman@testtask.com",
    role: "Admin",
    active: true
  },
  {
    _id: 3,
    avatar: User,
    name: "Margarette Jones",
    email: "margarette.jones@testtask.com",
    role: "User",
    active: true
  },
  {
    _id: 4,
    avatar: User,
    name: "Bethany Doe",
    email: "bethany.doe@testtask.com",
    role: "User",
    active: true
  },
  {
    _id: 5,
    avatar: User,
    name: "Samuel Jackson",
    email: "samuel.jackson@testtask.com",
    role: "User",
    active: true
  },
  {
    _id: 6,
    avatar: User,
    name: "Persival Blinn",
    email: "persival.blinn@testtask.com",
    role: "Admin",
    active: false
  },
  {
    _id: 7,
    avatar: User,
    name: "John Smith",
    email: "johnsmith@testtask.com",
    role: "User",
    active: true
  },
  {
    _id: 8,
    avatar: User,
    name: "George Martin",
    email: "georgemartin@testtask.com",
    role: "User",
    active: false
  }
];

  
export const getMovie = (id) => {
  return users.find((user) => user._id === id);
};
  
export const addUser = (user) => {
  let userInDb = user.find((u) => u._id === user._id) || {};
  userInDb.name = user.name;
  
  if (!userInDb._id) {
    userInDb._id = Date.now();
    movies.push(userInDb);
  }
  
  return userInDb;
};