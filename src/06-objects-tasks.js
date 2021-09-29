/* ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  // throw new Error('Not implemented');
  this.width = width;
  this.height = height;
}
Rectangle.prototype.getArea = function getArea() {
  return this.width * this.height;
};

// Object.setPrototypeOf(getArea, Rectangle);

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  // throw new Error('Not implemented');
  // eslint-disable-next-line no-param-reassign,arrow-body-style,no-plusplus
  return new proto.constructor(...Object.values(JSON.parse(json)));
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

// const cssSelectorBuilder = {
//   element(/* value */) {
//     throw new Error('Not implemented');
//   },

//   id(/* value */) {
//     throw new Error('Not implemented');
//   },

//   class(/* value */) {
//     throw new Error('Not implemented');
//   },

//   attr(/* value */) {
//     throw new Error('Not implemented');
//   },

//   pseudoClass(/* value */) {
//     throw new Error('Not implemented');
//   },

//   pseudoElement(/* value */) {
//     throw new Error('Not implemented');
//   },

//   combine(/* selector1, combinator, selector2 */) {
//     throw new Error('Not implemented');
//   },
// };
// const cssSelectorBuilder = {
//   answer: '',

//   element(elemnt) {
//     this.error(elemnt);
//     const obj = Object.create(cssSelectorBuilder);
//     obj.i = elemnt;
//     obj.answer = this.answer + elemnt;
//     return obj;
//   },

//   id(id) {
//     this.error(id);
//     const obj = Object.create(cssSelectorBuilder);
//     obj.i = id;
//     obj.answer = `${this.answer}#${id}`;
//     return obj;
//   },

//   class(cls) {
//     this.error(cls);
//     const obj = Object.create(cssSelectorBuilder);
//     obj.i = cls;
//     obj.answer = `${this.answer}.${cls}`;
//     return obj;
//   },

//   attr(att) {
//     this.error(att);
//     const obj = Object.create(cssSelectorBuilder);
//     obj.i = att;
//     obj.answer = `${this.answer}[${att}]`;
//     return obj;
//   },

//   pseudoClass(pseudoCls) {
//     this.error(pseudoCls);
//     const obj = Object.create(cssSelectorBuilder);
//     obj.i = pseudoCls;
//     obj.answer = `${this.answer}:${pseudoCls}`;
//     return obj;
//   },

//   pseudoElement(pseudoEl) {
//     this.error(pseudoEl);
//     const obj = Object.create(cssSelectorBuilder);
//     obj.i = pseudoEl;
//     obj.answer = `${this.answer}::${pseudoEl}`;
//     return obj;
//   },

//   combine(combinator, slct1, slct2) {
//     const obj = Object.create(cssSelectorBuilder);
//     obj.answer = `${slct1.answer} ${combinator} ${slct2.answer}`;
//     return obj;
//   },

//   stringify() {
//     return this.answer;
//   },

//   error(newi) {
//     if (this.i === newi) {
//       throw new Error(
// eslint-disable-next-line no-param-reassign,arrow-body-style,no-plusplus, max-len
//         'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
//       );
//     }
//     if (this.i === newi && (newi === 'elemnt' || newi === 'id' || newi === 'pseudoEl')) {
//       throw new Error(
//         'Element, id and pseudo-element should not occur more then one time inside the selector',
//       );
//     }
//   },
// };
const cssSelectorBuilder = {
  answer: '',
  orders: ['element', 'id', 'class', 'attribute', 'pseudo-class', 'pseudo-element'],
  element(value) {
    this.error(this.orders.indexOf('element'));
    const obj = Object.create(cssSelectorBuilder);
    obj.i = this.orders.indexOf('element');
    obj.answer = this.answer + value;
    return obj;
  },

  id(value) {
    this.error(this.orders.indexOf('id'));
    const obj = Object.create(cssSelectorBuilder);
    obj.i = this.orders.indexOf('id');
    obj.answer = `${this.answer}#${value}`;
    return obj;
  },

  class(value) {
    this.error(this.orders.indexOf('class'));
    const obj = Object.create(cssSelectorBuilder);
    obj.i = this.orders.indexOf('class');
    obj.answer = `${this.answer}.${value}`;
    return obj;
  },

  attr(value) {
    this.error(this.orders.indexOf('attribute'));
    const obj = Object.create(cssSelectorBuilder);
    obj.i = this.orders.indexOf('attribute');
    obj.answer = `${this.answer}[${value}]`;
    return obj;
  },

  pseudoClass(value) {
    this.error(this.orders.indexOf('pseudo-class'));
    const obj = Object.create(cssSelectorBuilder);
    obj.i = this.orders.indexOf('pseudo-class');
    obj.answer = `${this.answer}:${value}`;
    return obj;
  },

  pseudoElement(value) {
    this.error(this.orders.indexOf('pseudo-element'));
    const obj = Object.create(cssSelectorBuilder);
    obj.i = this.orders.indexOf('pseudo-element');
    obj.answer = `${this.answer}::${value}`;
    return obj;
  },

  combine(selector1, combinator, selector2) {
    const obj = Object.create(cssSelectorBuilder);
    obj.answer = `${selector1.answer} ${combinator} ${selector2.answer}`;
    return obj;
  },

  stringify() {
    return this.answer;
  },

  error(newi) {
    if (this.i > newi) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element',
      );
    }
    if (this.i === newi && (newi === 0 || newi === 1 || newi === 5)) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector',
      );
    }
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
