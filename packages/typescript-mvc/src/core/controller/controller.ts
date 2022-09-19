import { ViewInterface } from '@/core/view/view';
import { HTMLElementEvent } from '@/types';
import { iModel } from '../model';

/**
 * Class repsenting Controller part of MVC.
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
export default class Controller {
  private model: iModel;

  private view: ViewInterface;

  constructor(model: iModel, view: ViewInterface) {
    this.model = model;
    this.view = view;
  }

  /**
   * Setup the final project view.
   * The implementation follows the task "Models the described problem
   * with a suitable class hierarchy".
   */
  async setupView() {
    await this.model.init();
    await this.model.getTopAppsByHost();
    this.view.bindViewChange(this.handleViewChange);
    this.view.displayList(this.model.applications);
    this.view.bindProgramClick(this.handleProgramClick);
    // The example.
    // Uncomment to add App to host.
    // this.model.addAppToHosts({
    //   "name": "Kate test",
    //   "contributors": [
    //     "Kate"
    //   ],
    //   "version": 7,
    //   "apdex": 101,
    //   "host": [
    //     "7e6272f7-098e.dakota.biz",
    //     "9a450527-cdd9.kareem.info",
    //     "e7bf58af-f0be.dallas.biz"
    //   ]
    // });

    // Uncomment to remove the app.
    // this.model.removeAppFromHosts("Kate test");
    // this.model.removeAppFromHosts("Awesome Wooden Sausages - Schaefer -
    // Hegmann, Inc");
  }

  /**
   * Handler for the view change checkbox that changes the Checkbox text.
   */
  handleViewChange = () => {
    this.view.applicationList.classList.toggle('list-view');

    // Change the Checkbox text.
    if (this.view.checkboxLabel.textContent === this.view.labelTextList) {
      this.view.checkboxLabel.textContent = this.view.labelTextGrid;
    } else {
      this.view.checkboxLabel.textContent = this.view.labelTextList;
    }
  };

  /**
   * Click handler for Program link.
   * @param {*} e
   */
  // eslint-disable-next-line class-methods-use-this
  handleProgramClick = (e: HTMLElementEvent<HTMLButtonElement>) => {
    if (e.target.dataset !== undefined && e.target.dataset.version !== undefined) {
      alert(`version: ${e.target.dataset.version}`);
    } else {
      console.warn('no version provided');
    }
  };
}
