/**
 * @file
 *
 * MVC implementation on classes.
 */
import Controller from '@/core/controller/controller';
import Model from '@/core/model';
import View from '@/core/view/view';
import '@/styles/style.scss';

const app = new Controller(new Model(), new View());

(async () => {
  await app.setupView();
})();
