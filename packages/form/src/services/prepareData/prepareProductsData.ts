import getSymbolFromCurrency from 'currency-symbol-map';
import { toTitleCase } from '@/services';

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
      if (preparedItem.pause_at !== null) {
        const date = new Date(item.pause_at);
        preparedItem.pause_at = date.toLocaleDateString('en-ZA');
      } else {
        preparedItem.pause_at = '-';
      }

      const preparedThreshold = (Number(item.threshold) / 100).toFixed(2);

      preparedItem.threshold = `${preparedThreshold} ${getSymbolFromCurrency(item.currency)}`;

      preparedItem.status = toTitleCase(item.status.replace('_', ' '));

      return preparedItem;
    }),
    status: true,
  };
};

export default prepareProductsData;
