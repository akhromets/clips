export default interface IUser {
  email: string;
  password?: string;
  age: number;
  name: string;
  phoneNumber: string;
}

// // the same as above
// export default class IUser {
//   email?: string;
//   password?: string;
//   age?: number;
//   name?: string;
//   phoneNumber?: string;
// }
