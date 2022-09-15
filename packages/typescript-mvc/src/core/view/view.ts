import { ClickEventHandler, HostGroupedType } from '@/types';
import { HostGroupedTypeItem } from '../../types';

/**
 * The View interface could be left in this file as it is the only place it is
 * used.
 */
export interface ViewInterface {
  labelTextGrid: string;
  labelTextList: string;
  app: HTMLElement;
  header: HTMLElement;
  title: HTMLElement;
  checkboxWrapper: HTMLElement;
  checkboxLabel: HTMLElement;
  applicationList: HTMLElement;
  // eslint-disable-next-line no-unused-vars
  bindProgramClick: (key: any) => void;
  // eslint-disable-next-line no-unused-vars
  bindViewChange: (key: any) => void;
  // eslint-disable-next-line no-unused-vars
  displayList: (key: HostGroupedType) => void;
}

/**
 * @class View
 *
 * Class representation for the View.
 */
export default class View implements ViewInterface {
  labelTextGrid = 'Show as an awesome grid';

  labelTextList = 'Show as list';

  /**
   * App Wrapper.
   */
  app: HTMLElement;

  /**
   * Header Element.
   */
  header: HTMLElement;

  /**
   * Title Element.
   */
  title: HTMLElement;

  /**
   * Checkbox Wrapper.
   */
  checkboxWrapper: HTMLElement;

  /**
   * Checkbox Label Wrapper.
   */
  checkboxLabel: HTMLElement;

  /**
   * Application List.
   */
  applicationList: HTMLElement;

  constructor() {
    this.app = document.querySelector('#root');
    if (this.app === null) {
      throw Error('no');
    }
    this.header = this.createElement('header');
    this.title = this.createElement('h1');
    this.title.textContent = 'TypeScript MVC';

    const userLabel = this.createElement('span');
    userLabel.textContent = 'for user averylongmailaddress@companyname.com';
    userLabel.className = 'user-email';

    this.checkboxWrapper = this.createElement('div', 'checkbox-rect');
    const checkbox = this.createElement('input') as HTMLInputElement;
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    checkbox.setAttribute('id', 'change_view');
    checkbox.name = 'change_view';

    this.checkboxLabel = this.createElement('label');
    this.checkboxLabel.textContent = this.labelTextList;
    this.checkboxLabel.setAttribute('for', 'change_view');
    this.checkboxWrapper.append(checkbox, this.checkboxLabel);

    this.header.append(this.title, userLabel, this.checkboxWrapper);
    this.applicationList = this.createElement('div', 'app-list');
    this.app.append(this.header, this.applicationList);
  }

  /**
   * Create Dom element
   * @param {string} tag
   * @param {string} className
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  createElement(tag: string, className = ''): HTMLElement {
    const element = document.createElement(tag);

    if (className) {
      element.classList.add(className);
    }

    return element;
  }

  /**
   * List template
   * @param {HostGroupedTypeItem[]} links - list of apps.
   * @returns
   */
  // eslint-disable-next-line class-methods-use-this
  listTemplate(links: HostGroupedTypeItem[]) {
    const result = links.map(
      (link) => `<li>
                <div class="apdex">${link.apdex}</div>
                <a href="#" class="program-link" data-version="${link.version}">${link.name}
                </a>
            </li>`
    );
    return `<ul>${result.join('')}</ul>`;
  }

  /**
   * Card template
   *
   * @param {string} host
   * @param {HostGroupedTypeItem[]} item
   * @returns
   */
  cardTemplate(host: string, item: HostGroupedTypeItem[]) {
    return `<section class="card">
      <h3 class="name">${host}</h3>
      <section>
        ${this.listTemplate(item)}
      </section>
  </section>
  `;
  }

  /**
   * Display list.
   * @param {} items
   */
  displayList(items: HostGroupedType) {
    // const p = this.createElement('p');
    Object.entries(items).forEach(([host, value]) => {
      this.applicationList.insertAdjacentHTML(
        'beforeend',
        this.cardTemplate(host, value)
      );
    });
  }

  bindViewChange(handler: ClickEventHandler) {
    this.checkboxLabel.addEventListener('click', (event) => {
      handler(event);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  bindProgramClick(handler: ClickEventHandler) {
    const links = document.querySelectorAll('a.program-link');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', handler);
    }
  }
}
