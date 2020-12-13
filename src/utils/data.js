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
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: true
    },
    permissionGroupTwo: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: false,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: false,
      permission15: true
    },
    permissionGroupTwo: true,
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: true
    },
    permissionGroupTwo: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: false,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: true
    },
    permissionGroupTwo: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: false,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: false,
      permission15: true
    },
    permissionGroupTwo: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: true
    },
    permissionGroupTwo: false,
    permissionGroup1: {
      permission11: false,
      permission12: false,
      permission13: false,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: false,
      permission15: true
    },
    permissionGroupTwo: true,
    permissionGroup1: {
      permission11: true,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: false,
      permission13: true,
      permission14: true,
      permission15: false
    }
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
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    },
    permissionGroupTwo: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: false,
      permission14: true,
      permission15: true
    },
    permissionGroupThree: false,
    permissionGroup1: {
      permission11: false,
      permission12: true,
      permission13: true,
      permission14: true,
      permission15: false
    }
  }
];

  
export const getMovie = (id) => {
  return users.find((user) => user._id === id);
};