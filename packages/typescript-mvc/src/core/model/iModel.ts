import { HostAppDataType, HostGroupedType } from '@/types';

/**
 * Interface for Model Class group
 */
export default interface iModel {
  data: HostAppDataType[];
  applications: HostGroupedType;
  init: () => {};
  getTopAppsByHost: () => {};
}
