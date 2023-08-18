interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: "user" | "admin" | "super-admin";
  // role: Role;
}

// type Role = "user" | "admin" | "super-admin"




//This is the same as just combining two objects into one, which will have all keys. By adding the union (|), then we are saying it can specifically become an object with 
//the first object combined with one of the three second objects. Called a discriminative union because we descriminate on a key, in this case 'role'
// type User = {
//   id: number;
//   firstName: string;
//   lastName: string;
// } & (
//   |{
//     role: "admin";
//     adminPassword: string;
//   } | { 
//     role: "user";
//   } | {
//     role: "super-admin";
//     superAdminPassword: string;
//   }
// )


// We can also declare the discriminative object as a separate thing

// type User = {
//   id: number;
//   firstName: string;
//   lastName: string;
// } & UserRoleAttributes

// type UserRoleAttributes = |{
//   role: "admin";
//   adminPassword: string;
// } | { 
//   role: "user";
// } | {
//   role: "super-admin";
//   superAdminPassword: string;
// }


//Then if we want to key into the role, we would need to do this below. We have index access. In JS, it's UserRoleAttributes.role, but that is invalid in TS. So we use below:
// type Role = UserRoleAttributes['role']




export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
