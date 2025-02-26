
const Employees=[
  {
    "id": 1,
    "firstName": "Amit",
    "email": "e1@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Generate and submit the monthly sales report.",
        "taskDate": "2025-02-26",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Client Records",
        "taskDescription": "Ensure all client details are up to date in the CRM.",
        "taskDate": "2025-02-27",
        "category": "Data Entry",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Conduct Market Research",
        "taskDescription": "Analyze competitor pricing and strategies.",
        "taskDate": "2025-02-28",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Create slides for the upcoming client meeting.",
        "taskDate": "2025-03-01",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review code submissions from the dev team.",
        "taskDate": "2025-02-25",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Backend Bugs",
        "taskDescription": "Resolve issues reported in the latest bug report.",
        "taskDate": "2025-02-26",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Design New UI Mockups",
        "taskDescription": "Create wireframes for the upcoming project.",
        "taskDate": "2025-02-27",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Style Guide",
        "taskDescription": "Ensure design consistency across all platforms.",
        "taskDate": "2025-03-02",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Optimize Database Queries",
        "taskDescription": "Improve query performance for reports module.",
        "taskDate": "2025-02-28",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy New Feature",
        "taskDescription": "Push the latest update to production.",
        "taskDate": "2025-03-01",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];
  
  const Admin = [
    {
      id: 1,
      email: "admin@me.com",
      password: "123",
    },
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(Employees));
    localStorage.setItem("admin",JSON.stringify(Admin));
  }

  export const getLocalStorage=()=>{
    const employees= JSON.parse(localStorage.getItem("employees"));
    const admin= JSON.parse(localStorage.getItem("admin"));
    // console.log(employees,admin);
    return {employees,admin}
  }
  