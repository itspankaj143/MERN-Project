// import React, { useState } from "react";

// const Registration = () => {
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "", // Default role is set to "student"
//   });

//   const handleInput = (e) => {
//     const { name, value, type, checked } = e.target;

//     setUser({
//       ...user,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // handle form on submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setUser({
//       username: "",
//       email: "",
//       phone: "",
//       password: "",
//       role: "", // Default role is set to "student"
//     });
//     // Log the form data
//     console.log("Form Data:", user);

//     // You can proceed with further logic or API calls here
//   };

//   return (
//     <>
//       <section>
//         <main>
//           <div className="section-registration">
//             <div className="container grid grid-two-cols">
//               <div className="registration-image reg-img">
//                 <img
//                   src="/images/register.png"
//                   alt="a nurse with a cute look"
//                   width="400"
//                   height="500"
//                 />
//               </div>
//               {/* our main registration code  */}
//               <div className="registration-form">
//                 <h1 className="main-heading mb-3">Registration Form</h1>
//                 <br />
//                 <form onSubmit={handleSubmit}>
//                   <div>
//                     <label htmlFor="username">Username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       value={user.username}
//                       onChange={handleInput}
//                       placeholder="Username"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={user.email}
//                       onChange={handleInput}
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone">Phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       value={user.phone}
//                       onChange={handleInput}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={user.password}
//                       onChange={handleInput}
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div>
//                     <label>Role:</label>
//                     <label>
//                       <input
//                         type="radio"
//                         name="role"
//                         value="teacher"
//                         checked={user.role === "teacher"}
//                         onChange={handleInput}
//                       />
//                       Teacher
//                     </label>
//                     <label>
//                       <input
//                         type="radio"
//                         name="role"
//                         value="student"
//                         checked={user.role === "student"}
//                         onChange={handleInput}
//                       />
//                       Student
//                     </label>
//                   </div>
//                   <br />
//                   <button type="submit" className="btn btn-submit">
//                     Register Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default Registration;

//! Second logic for teacher and student

// import React, { useState } from "react";

// const Registration = () => {
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "student", // Default role is set to "student"
//   });

//   const handleInput = (e) => {
//     const { name, value } = e.target;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const toggleRole = () => {
//     setUser({
//       ...user,
//       role: user.role === "student" ? "teacher" : "student",
//     });
//   };

//   // handle form on submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Log the form data
//     console.log("Form Data:", user);

//     // You can proceed with further logic or API calls here
//   };

//   return (
//     <>
//       <section>
//         <main>
//           <div className="section-registration">
//             <div className="container grid grid-two-cols">
//               <div className="registration-image reg-img">
//                 <img
//                   src="/images/register.png"
//                   alt="a nurse with a cute look"
//                   width="400"
//                   height="500"
//                 />
//               </div>
//               {/* our main registration code  */}
//               <div className="registration-form">
//                 <h1 className="main-heading mb-3">Registration Form</h1>
//                 <br />
//                 <form onSubmit={handleSubmit}>
//                   <div>
//                     <label htmlFor="username">Username</label>
//                     <input
//                       type="text"
//                       name="username"
//                       value={user.username}
//                       onChange={handleInput}
//                       placeholder="Username"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={user.email}
//                       onChange={handleInput}
//                       placeholder="Email"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone">Phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       value={user.phone}
//                       onChange={handleInput}
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={user.password}
//                       onChange={handleInput}
//                       placeholder="Password"
//                     />
//                   </div>
//                   <div>
//                     <label>Role:</label>
//                     <button
//                       type="button"
//                       onClick={toggleRole}
//                       className="role-toggle-btn"
//                     >
//                       {user.role === "student"
//                         ? "Switch to Teacher"
//                         : "Switch to Student"}
//                     </button>
//                   </div>
//                   <br />
//                   <button type="submit" className="btn btn-submit">
//                     Register Now
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default Registration;

//! Third logic for teacher and student

import React, { useState } from "react";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "student", // Default role is set to "student"
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const setRoleStudent = () => {
    setUser({
      ...user,
      role: "student",
    });
  };

  const setRoleTeacher = () => {
    setUser({
      ...user,
      role: "teacher",
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data
    console.log("Form Data:", user);

    // You can proceed with further logic or API calls here
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label>Role:</label>
                    <button
                      type="button"
                      onClick={setRoleStudent}
                      className="role-btn"
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      onClick={setRoleTeacher}
                      className="role-btn"
                    >
                      Teacher
                    </button>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
