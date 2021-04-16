/**
 * @summary
 * @author Caio Reis <caio.oliveira.reis@gmail.com>
 *
 * Created at     : 2021-04-16 03:49:35
 * Last modified  : 2021-04-16 03:49:35
 */

export default class Category {
  id = 0;
  name = '';

  constructor(id = 0, name = '') {
    this.id = id;
    this.name = name;
  }
}
