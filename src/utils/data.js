import User from '../resources/images/UserProfile.png';

export const users = [
  {
    _id: 1,
    avatar: User,
    isSuper: true,
    firstName: "Samantha",
    lastName: "Standford",
    email: "samantha.standford@testtask.com",
    role: "Admin",
    isActive: true,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          true,
          true,
          true,
          false,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          false,
          false,
          true,
          true,
          false
        ]
      }
    ]
  },
  {
    _id: 2,
    avatar: User,
    isSuper: false,
    firstName: "Danniel",
    lastName: "Blichman",
    email: "danniel.blichman@testtask.com",
    role: "Admin",
    isActive: true,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          true,
          true,
          true,
          false,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          true,
          true,
          false,
          true,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      }
    ]
  },
  {
    _id: 3,
    avatar: User,
    isSuper: false,
    firstName: "Margarette",
    lastName: "Jones",
    email: "margarette.jones@testtask.com",
    role: "User",
    isActive: true,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          false,
          true,
          true,
          false,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          true,
          false,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          false,
          false,
          true,
          true,
          false
        ]
      }
    ]
  },
  {
    _id: 4,
    avatar: User,
    isSuper: true,
    firstName: "Bethan",
    lastName: "Doe",
    email: "bethany.doe@testtask.com",
    role: "User",
    isActive: true,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          true,
          false,
          true,
          false,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          false,
          true,
          true,
          true,
          false
        ]
      }
    ]
  },
  {
    _id: 5,
    avatar: User,
    isSuper: false,
    firstName: "Samuel",
    lastName: "Jackson",
    email: "samuel.jackson@testtask.com",
    role: "User",
    isActive: true,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          true,
          true,
          false,
          false,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      }
    ]
  },
  {
    _id: 6,
    avatar: User,
    isSuper: false,
    firstName: "Persival",
    lastName: "Blinn",
    email: "persival.blinn@testtask.com",
    role: "Admin",
    isActive: false,
    permissions: [
      {
        hasPermission: true, 
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          false,
          false,
          false,
          false,
          false
        ]
      }
    ]
  },
  {
    _id: 7,
    avatar: User,
    isSuper: false,
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@testtask.com",
    role: "User",
    isActive: true,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          true,
          true,
          true,
          false,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          true,
          false,
          true,
          true,
          false
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          false,
          false,
          true,
          true,
          false
        ]
      }
    ]
  },
  {
    _id: 8,
    avatar: User,
    isSuper: false,
    firstName: "George",
    lastName: "Martin",
    email: "georgemartin@testtask.com",
    role: "User",
    isActive: false,
    permissions: [
      {
        hasPermission: false, 
        permissionGroupArray: [
          false,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: true,
        permissionGroupArray: [
          true,
          true,
          true,
          true,
          true
        ]
      },
      {
        hasPermission: false,
        permissionGroupArray: [
          false,
          false,
          true,
          true,
          false
        ]
      }
    ]
  }
];

  
export const getMovie = (id) => {
  return users.find((user) => user._id === id);
};