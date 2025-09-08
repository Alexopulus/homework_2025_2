'use strict';

/**
 * Возвращает объект с уникальными свойствами из двух объектов.
 *
 * @param {Object} obj1 - Первый объект.
 * @param {Object} obj2 - Второй объект.
 * @returns {Object} Новый объект с уникальными свойствами.
 *
 * @example
 * findUniqueProperties({ a: 1, b: 2 }, { b: 2, c: 3 });
 * // => { a: 1, c: 3 }
 */
const findUniqueProperties = (obj1, obj2) =>
    Object.fromEntries(
      Object.entries({ ...obj1, ...obj2 }).filter(([key]) => !(key in obj1 && key in obj2))
    );