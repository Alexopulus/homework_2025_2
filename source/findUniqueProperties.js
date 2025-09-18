'use strict';

/**
 * Проверяет, что значение является «чистым» объектом ({}),
 * а не массивом, null или объектом-обёрткой.
 *
 * @param {*} value - Проверяемое значение
 * @returns {boolean} true, если это обычный объект
 */
const isPlainObject = value =>
  value !== null && typeof value === "object" && value.constructor === Object;

/**
 * Возвращает объект с уникальными свойствами из двух объектов.
 *
 * @param {Object} obj1 - Первый объект.
 * @param {Object} obj2 - Второй объект.
 * @returns {Object} Новый объект с уникальными свойствами.
 * @throws {TypeError} Если аргументы не являются объектами.
 * @example
 * findUniqueProperties({ a: 1, b: 2 }, { b: 2, c: 3 });
 * // => { a: 1, c: 3 }
 */
const findUniqueProperties = (obj1, obj2) => {
  if (!isPlainObject(obj1) || !isPlainObject(obj2)) {
    throw new TypeError('Оба аргумента должны быть объектами');
  }

  return Object.fromEntries(
    Object.entries({ ...obj1, ...obj2 })
      .filter(([key]) => !(key in obj1 && key in obj2))
  );
};
