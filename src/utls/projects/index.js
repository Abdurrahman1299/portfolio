import todoPhoto from "./photos/todo app.png";
import expensesPhoto from "./photos/expenses.png";

export const PROJECTS = [
  {
    title: "Task Manager App",
    description: `A cross-platform mobile application designed based on Microsoft ToDo application. User can create lists inside each list can create several tasks.
      Key Features:
1. React Native Expo: TaskMaster harnesses the power of React Native Expo, ensuring a seamless and responsive user experience on both iOS and Android devices.
2. React Redux State Management.
3. React Native Core Components.
4. Stack Navigation: The app utilizes React Navigation's stack navigation, enabling smooth transitions between different screens and providing an intuitive user journey as you delve into your tasks.
5. Hooks and Redux.
6. Local Storage Management with AsyncStorage: TaskMaster employs AsyncStorage for secure and reliable local storage management. Your task data is always at your fingertips, whether you're online or offline.`,
    imageSrc: todoPhoto,
    github:
      "https://github.com/Abdurrahman1299/React.Native-Microsoft-ToDoList-Simulation-App",
  },
  {
    title: "Expenses Manager App",
    description: `Expenses Manager is designed to make your financial life simpler, more organized, and easily accessible. This app offers seamless functionality and user-friendly features to help you manage your expenses with ease. Developed using React Native Expo, React Redux, and other state-of-the-art technologies.
      Key Features:
      1. React Native Expo: ExpenseEase is built on the React Native Expo framework, ensuring a smooth and responsive user experience across iOS and Android devices. The app's intuitive design makes it accessible to users of all levels of tech-savviness.
      2. React Redux State Management.
      3. React Native Core Components: The app leverages React Native's core components to create a visually appealing and user-friendly interface.
      4. React Navigation: With the combination of drawer and stack navigation, ExpenseEase offers an immersive and hassle-free user journey.
      5. Hooks and Redux: The app incorporates modern React hooks, including useState() and useEffect(), providing real-time updates and ensuring your data is always up to date. Redux is used to manage the app's state efficiently.
      6. AsyncStorage for Local Storage: ExpenseEase utilizes AsyncStorage for local storage management, offering the peace of mind that your data is stored securely on your device.`,
    imageSrc: expensesPhoto,
    github: "https://github.com/Abdurrahman1299/Expenses-Manager-App",
  },
];
