import { HostAppDataType, HostGroupedType } from '@/types';
import ModelBase from './ModelBase';

/**
 * Json Model Implementation.
 * @class Model
 *
 * Manages the data of the application.
 */
export default class ModelJson extends ModelBase {
  applications: HostGroupedType;

  data: HostAppDataType[];

  /**
   * The initial method to fetch the data.
   */
  // @Log('decorating method')
  async init() {
    this.data = await this.fetchData<HostAppDataType[]>('./host-app-data.json');
  }

  /**
   * The universal method for fetching data.
   * @param {string} resourceUrl the url
   * @returns {T}
   */
  // eslint-disable-next-line class-methods-use-this
  async fetchData<T>(resourceUrl: string): Promise<T> {
    const response = await fetch(resourceUrl);
    return (await response.json()) as T;
  }

  /**
   * According to the task the number of hosts should be 25,
   * but it conflicts with the UI (5 apps per card).
   * Extract data from json.
   * @returns
   */
  async getTopAppsByHost(limit = 5) {
    const hosts = this.groupByHost();
    this.applications = this.prepareHosts(hosts, limit);
  }

  /**
   * Group data by host. The usage of extra counting object allows
   * to reduce the complexity by not adding one more cycle in this case and
   * ends with O(n^2) complexity.
   * @returns
   */
  groupByHost(): HostGroupedType {
    return ModelBase.groupByHostGeneral(this.data);
  }

  /**
   * Prepare Hosts for cards in the UI by sorting by Apdex and limit. O(n^2)
   *
   * @param {HostGroupedType} hosts
   * @param {number} limit
   *
   * @returns the 5 sorted hosts
   */
  prepareHosts(hosts: HostGroupedType, limit: number): HostGroupedType {
    return ModelBase.prepareHostsGeneral(this.data, hosts, limit);
  }

  /**
   * Add App to hosts. This method is not used anywhere for now and was added
   * according to the task.
   * @param {HostAppDataType} insertApp Object with app data.
   */
  private addAppToHosts(insertApp: HostAppDataType) {
    this.data.push(insertApp);
  }

  /**
   * Filter array data. This method is not used anywhere for now
   * and was added according to the task.
   *
   * @param {string} appName
   */
  private removeAppFromHosts(appName: string) {
    this.data = this.data.filter((app) => app.name !== appName);
  }
}
