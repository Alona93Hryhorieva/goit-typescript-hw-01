// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// function compare (top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeTop = Pick<AllType, "name" | "color">;
type AllTypeBottom = Pick<AllType, "position" | "weight">;

// type AllTypeInfo = Pick<AllType, "name" | "position" | "color" | "weight">;

// function compare(
//   top: Pick<AllType, "name" | "color">,
//   bottom: Pick<AllType, "position" | "weight">
// ): AllType {

function compare(top: AllTypeTop, bottom: AllTypeBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// const obj1: AllTypeInfo = {
//   name: "Item1",
//   position: 1,
//   color: "red",
//   weight: 10,
// };
// const obj2: AllTypeInfo = {
//   name: "Item2",
//   position: 2,
//   color: "blue",
//   weight: 20,
// };
// const result = compare(obj1, obj2);
// console.log(result);
