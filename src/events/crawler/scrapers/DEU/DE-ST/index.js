import * as parse from '../../../lib/parse.js';
import defaultScraperDEU, { sharedSchema } from '../_shared.js';

const scraper = {
  ...sharedSchema,
  country: 'DEU',
  state: 'DE-ST', // ISO 3166 notation
  scraper: defaultScraperDEU,
  _rowToResult: row => {
    return {
      cases: parse.number(row[`${scraper.state}_cases`]),
      deaths: parse.number(row[`${scraper.state}_deaths`]),
      coordinates: [11.692, 51.95],
      population: 2.28 * 10 ** 6
    };
  }
};

export default scraper;
