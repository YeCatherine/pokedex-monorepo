import { HostAppDataType, HostGroupedType, HostGroupedTypeItem } from '@/types';

// const Log = (msg: string): any => (target: any, propertyKey: string,
// descriptor: PropertyDescriptor) => { console.log({ msg, target, propertyKey,
// descriptor, }); };
import iModel from './iModel';

/**
 * General Model implementation. Contains reusable functions.
 * @class
 */
// @Log('decorating class')
export default abstract class ModelBase implements iModel {
  applications: HostGroupedType;

  data: HostAppDataType[];

  /**
   * Simple sorting algorithm was moved to the function to test later.
   *
   * @param a HostGroupedTypeItem
   * @param b HostGroupedTypeItem
   */
  // eslint-disable-next-line class-methods-use-this
  public static sortHosts(a: HostGroupedTypeItem, b: HostGroupedTypeItem) {
    return b.apdex - a.apdex;
  }

  /**
   * Group by General Host.
   * The solution was implemented with the help of extra object to reduce the
   * complexity. O(n^2) complexity.
   * @param data
   */
  public static groupByHostGeneral(data: HostAppDataType[]): HostGroupedType {
    const hosts: HostGroupedType = {};

    // Group by host.
    Object.entries(data).forEach(([key, value]) => {
      value.host.forEach((host) => {
        if (!hosts[host]) {
          hosts[host] = [];
        }

        hosts[host][key] = {
          app_key: key,
          apdex: value.apdex,
        };
      });
    });
    return hosts;
  }

  /**
   * Prepares the sorted amount of hosts for the cards.
   * According to the task the number of hosts should be 25,
   * but it conflicts with the UI (5 apps per card).
   * O(n^2) complexity.
   * @param data
   * @param hosts
   * @param limit
   */
  public static prepareHostsGeneral(
    data: HostAppDataType[],
    hosts: HostGroupedType,
    limit = 5
  ): HostGroupedType {
    const preparedResponse = { ...hosts };

    Object.keys(hosts).forEach((key) => {
      // Sort desc by the Apdex.
      preparedResponse[key].sort(ModelBase.sortHosts);

      // Slice top defined by limit and add title and version.
      preparedResponse[key] = preparedResponse[key]
        .slice(0, limit)
        .map((host: HostGroupedTypeItem) => {
          // Added the newHost to avoid mutation.
          const newHost = { ...host };
          newHost.name = data[host.app_key].name;
          newHost.version = data[host.app_key].version;
          return newHost;
        });
    });

    return preparedResponse;
  }

  // eslint-disable-next-line no-empty-function,class-methods-use-this
  async init() {}

  // eslint-disable-next-line no-empty-function,class-methods-use-this
  async getTopAppsByHost() {}
}
