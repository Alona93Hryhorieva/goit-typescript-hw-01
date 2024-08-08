// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.
// import axios from 'axios';
// async function fetchData(url) {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching from ${url}: ${error}`);
//   }
// }

import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    } else {
      throw new Error(`Unknown error occurred while fetching from ${url}`);
    }
  }
}

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// fetchData<User>("https://api.example.com/user/1")
//   .then((data) => {
//     console.log(data.id, data.name, data.email);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
