
import type { T } from '../../../_types/index.js';

// --

function eliminarAcentos(
  text = ''
) {
  const sinAcento: { [ k: string ]: string } = {
    'á': 'a',
    'é': 'e',
    'í': 'i',
    'ó': 'o',
    'ú': 'u'
  };
  let sinAcentos = '';
  const lower = text.toLowerCase();
  const chars = lower.split('');
  chars.forEach(char => {
    if (!!char && sinAcento[char]) {
      sinAcentos += `${sinAcento[char]}`;
    } else {
      sinAcentos += `${char}`;
    }
  });
  return sinAcentos;
}

// --------------

function extractKeywordsText({
  categories = [],
  products = {}
}: T.Model.Menue) {
  let text = '';
  categories?.forEach(({ id, name }) => {
    text += `,${name.trim()}`;
    products[id]?.forEach((product) => {
      text += `,${product.name.trim()}`;
    });
  });
  return eliminarAcentos(text.toLowerCase());
}

// -------------------------------------------

export function toMinifiedStores(
  stores: T.Model.Store[] = [],
  genre = 'all'
): T.Model.StoreMinified[] {

  const list: T.Model.StoreMinified[] = [];

  let keyw = '';
  let prom = '';

  stores.forEach(({
    _id,
    city,
    published,
    publication,
    status,
    data,
    info,
    menue
  }) => {
    if (!genre || genre.toLowerCase() === 'all' ||
      data.genres.includes(genre) ||
      data.others.includes(genre)
    ) {
      keyw = `${data.brand},${info.products || ''},${info.keywords || ''}`;
      keyw += extractKeywordsText(menue);
      prom = menue.promoted > 0 ? `-${menue.promoted}%` : '';
      if (info.promoted) prom = info.promoted;
      list.push({
        _id,
        city,
        live: !!status.active,
        name: data.brand,
        info: info.products,
        logo: data.logourl,
        genr: data.genres || '',
        othr: data.others || '',
        addr: data.address,
        free: !!menue.glutenFree,
        prom,
        time: status.delay || '',
        keyw: keyw.toLowerCase(),
        test: publication === 'TEST' || published === 'TEST'
      });
    }
  });

  if (!genre || genre === 'all') return list;

  const list1 = list.filter(item => (item.genr === genre));
  const list2 = list.filter(item => (item.othr === genre));

  return [ ...list1, ...list2 ];
}
