import User from '../resources/images/UserProfile.png';

export const users = [
  {
    _id: 1,
    avatar: User,
    firstName: "Samantha",
    lastName: "Standford",
    email: "samantha.standford@testtask.com",
    role: "Admin",
    isActive: true,
    permissionGroupOne: true,
    permissionGroupArray1: [
      true,
      true,
      true,
      true,
      true
    ],
    permissionGroupTwo: false,
    permissionGroupArray2: [
      false,
      true,
      false,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  },
  {
    _id: 2,
    avatar: User,
    firstName: "Danniel",
    lastName: "Blichman",
    email: "danniel.blichman@testtask.com",
    role: "Admin",
    isActive: true,
    permissionGroupOne: false,
    permissionGroupArray1: [
      true,
      true,
      true,
      false,
      true
    ],
    permissionGroupTwo: true,
    permissionGroupArray2: [
      true,
      true,
      true,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  },
  {
    _id: 3,
    avatar: User,
    firstName: "Margarette",
    lastName: "Jones",
    email: "margarette.jones@testtask.com",
    role: "User",
    isActive: true,
    permissionGroupOne: true,
    permissionGroupArray1: [
      true,
      true,
      true,
      true,
      true
    ],
    permissionGroupTwo: false,
    permissionGroupArray2: [
      false,
      true,
      false,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  },
  {
    _id: 4,
    avatar: User,
    firstName: "Bethan",
    lastName: "Doe",
    email: "bethany.doe@testtask.com",
    role: "User",
    isActive: true,
    permissionGroupOne: true,
    permissionGroupArray1: [
      true,
      true,
      true,
      true,
      true
    ],
    permissionGroupTwo: false,
    permissionGroupArray2: [
      false,
      true,
      false,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  },
  {
    _id: 5,
    avatar: User,
    firstName: "Samuel",
    lastName: "Jackson",
    email: "samuel.jackson@testtask.com",
    role: "User",
    isActive: true,
    permissionGroupOne: false,
    permissionGroupArray1: [
      false,
      true,
      true,
      false,
      true
    ],
    permissionGroupTwo: false,
    permissionGroupArray2: [
      false,
      true,
      true,
      true,
      false
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  },
  {
    _id: 6,
    avatar: User,
    firstName: "Persival",
    lastName: "Blinn",
    email: "persival.blinn@testtask.com",
    role: "Admin",
    isActive: false,
    permissionGroupOne: true,
    permissionGroupArray1: [
      true,
      true,
      true,
      true,
      true
    ],
    permissionGroupTwo: false,
    permissionGroupArray2: [
      false,
      false,
      false,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  },
  {
    _id: 7,
    avatar: User,
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@testtask.com",
    role: "User",
    isActive: true,
    permissionGroupOne: false,
    permissionGroupArray1: [
      true,
      true,
      true,
      false,
      true
    ],
    permissionGroupTwo: true,
    permissionGroupArray2: [
      true,
      true,
      true,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      false,
      true,
      true,
      false
    ]
  },
  {
    _id: 8,
    avatar: User,
    firstName: "George",
    lastName: "Martin",
    email: "georgemartin@testtask.com",
    role: "User",
    isActive: false,
    permissionGroupOne: false,
    permissionGroupArray1: [
      false,
      true,
      true,
      true,
      false
    ],
    permissionGroupTwo: false,
    permissionGroupArray2: [
      false,
      true,
      false,
      true,
      true
    ],
    permissionGroupThree: false,
    permissionGroupArray3: [
      false,
      true,
      true,
      true,
      false
    ]
  }
];

  
export const getMovie = (id) => {
  return users.find((user) => user._id === id);
};