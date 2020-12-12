import User from '../resources/images/UserProfile.png';

export const users = [
  {
    _id: 1,
    avatar: User,
    fullName: "Samantha Standford",
    email: "samantha.standford@testtask.com",
    role: "Admin",
    status: true
  },
  {
    _id: 2,
    avatar: User,
    fullName: "Danniel Blichman",
    email: "danniel.blichman@testtask.com",
    role: "Admin",
    status: true
  },
  {
    _id: 3,
    avatar: User,
    fullName: "Margarette Jones",
    email: "margarette.jones@testtask.com",
    role: "User",
    status: true
  },
  {
    _id: 4,
    avatar: User,
    fullName: "Bethany Doe",
    email: "bethany.doe@testtask.com",
    role: "User",
    status: true
  },
  {
    _id: 5,
    avatar: User,
    fullName: "Samuel Jackson",
    email: "samuel.jackson@testtask.com",
    role: "User",
    status: true
  },
  {
    _id: 6,
    avatar: User,
    fullName: "Persival Blinn",
    email: "persival.blinn@testtask.com",
    role: "Admin",
    status: false
  },
  {
    _id: 7,
    avatar: User,
    fullName: "John Smith",
    email: "johnsmith@testtask.com",
    role: "User",
    status: true
  },
  {
    _id: 8,
    avatar: User,
    fullName: "George Martin",
    email: "georgemartin@testtask.com",
    role: "User",
    status: false
  }
];

  
export const getMovie = (id) => {
  return users.find((user) => user._id === id);
};
  
export const addUser = (user) => {
  let userInDb = user.find((u) => u._id === user._id) || {};
  userInDb.fullName = user.fullName;
  
  if (!userInDb._id) {
    userInDb._id = Date.now();
    movies.push(userInDb);
  }
  
  return userInDb;
};