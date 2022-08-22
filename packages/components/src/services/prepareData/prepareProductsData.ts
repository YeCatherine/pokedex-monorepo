/**
 * Prepare Product Data.
 *
 * To meet MUI Data greed content structure requirements.
 * @module
 */
import getSymbolFromCurrency from 'currency-symbol-map';
import moment from 'moment';
import { toTitleCase } from '@monorepo/components/src/services';

/**
 * Preparing data for Grid Table.
 *
 * @param programs
 *
 * @return
 */
const prepareProductsData = (programs) => {
  if (!programs || !Array.isArray(programs)) {
    return { status: false };
  }

  return {
    columns: [
      { field: 'currency', hide: true, headerName: 'currency' },
      { field: 'id', hide: true, headerName: 'id' },
      { field: 'name', headerName: 'Name', flex: 1 },
      { field: 'return_percentage', headerName: 'Cashback', width: 150 },
      { field: 'threshold', headerName: 'Threshold', width: 150 },
      { field: 'status', headerName: 'Status', width: 150 },
      { field: 'pause_at', headerName: 'Pause Date', width: 150 },
    ],
    rows: programs.map((item) => {
      const preparedItem = item;

      // Prepare date format.
      if (preparedItem.pause_at !== null) {
        const date = moment(item.pause_at);
        preparedItem.pause_at = date.format('YYYY/MM/DD');
      } else {
        preparedItem.pause_at = '-';
      }

      // Prepare the price.
      const preparedThreshold = (Number(item.threshold) / 100).toFixed(2);

      // Prepare the currency symbol.
      preparedItem.threshold = `${preparedThreshold} ${getSymbolFromCurrency(item.currency)}`;

      // Prepare the format of the status.
      preparedItem.status = toTitleCase(item.status.replace('_', ' '));

      return preparedItem;
    }),

    status: true,
  };
};

export default prepareProductsData;
