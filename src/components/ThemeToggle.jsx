// import React, { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// function ThemeToggle() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//       setIsDarkMode(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDarkMode(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDarkMode ? "light" : "dark";

//     if (newTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }

//     localStorage.setItem("theme", newTheme);
//     setIsDarkMode(newTheme === "dark");
//   };

//   return (
//      <button onClick={toggleTheme} className="text-black dark:text-white">
//       {isDarkMode ? <Sun /> : <Moon />}
//     </button>
//   );
// }

// export default ThemeToggle;
