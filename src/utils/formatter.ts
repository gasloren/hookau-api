// -- helpers imports

type Currency = 'ARS' | 'USD';

// --------

function toCurrency(
  num: number,
  currency: Currency = 'ARS',
  dec = 0
): string {
  if (typeof(num) !== 'number' || isNaN(num)) return '---';
  return num.toLocaleString('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: dec,
    maximumFractionDigits: dec
  });
}

function toCurrencyABS(
  num: number,
  currency: Currency = 'ARS',
  dec = 0
): string {
  return toCurrency(Math.abs(num), currency, dec);
}

function toPercent(
  num: number,
  dec = 0
): string {
  if (!num || isNaN(num)) return '---';
  const perc = num;
  return `% ${perc.toFixed(dec)}`;
}

function toPercentABS(
  num: number,
  dec = 0
): string {
  return toPercent(Math.abs(num), dec);
}

function toQuantity(num: number): string {
  if (!num || isNaN(num)) return '---';
  return num.toFixed(0);
}

function toQuantityABS(num: number): string {
  return toQuantity(Math.abs(num));
}

function formatTimer(ms: number): string {
  if (!ms || isNaN(ms)) return '---';
  const totalSeconds = Math.trunc(ms / 1000);
  const minutes = Math.trunc(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (!minutes) return `${seconds}s`;
  return `${minutes}m, ${seconds}s`;
}

function capitalizeParrafo(text: string, trunc?: number): string {
  if (!text.trim()) return '';
  let cap = '';
  let nextToUpper = true;
  const lower = text.toLowerCase();
  for (let i=0; i < lower.length; i++) {
    if (nextToUpper && lower[i] !== ' ') {
      cap += lower?.[i]?.toUpperCase() || '';
      nextToUpper = false;
    } else {
      cap += lower[i];
      if (i && lower[i - 1] === '.' && lower[i] === ' ') nextToUpper = true;
    }
  }
  return !trunc ? cap : truncText(cap, trunc);
}

function capitalizeTitle(text: string, trunc?: number): string {
  if (!text.trim()) return '';
  const lower = text.toLowerCase();
  const result = `${lower?.[0]?.toUpperCase() || ''}${lower.slice(1)}`;
  return !trunc ? result : truncText(result, trunc);
}

function capitalizeWord(word = ''): string {
  if (!word.trim()) return '';
  const lower = word.toLowerCase().trim();
  return `${lower[0]?.toUpperCase()}${lower.slice(1)}`;
}

function capitalizeWords(text = ''): string {
  if (!text) return '';
  const lower = text.toLowerCase();
  let aux = '';
  for (let i=0; i < lower.length; i++) {
    if (i === 0 || lower[i - 1] === ' ' || lower[i - 1] === '.') {
      aux += lower[i]?.toUpperCase() || '';
    } else {
      aux += lower[i];
    }
  }
  if (aux.includes(' Un ')) aux = aux.split(' Un ').join(' un ');
  if (aux.includes(' Una ')) aux = aux.split(' Una ').join(' una ');
  if (aux.includes(' Uno ')) aux = aux.split(' Uno ').join(' uno ');
  if (aux.includes(' De ')) aux = aux.split(' De ').join(' de ');
  if (aux.includes(' Del ')) aux = aux.split(' Del ').join(' del ');
  if (aux.includes(' Con ')) aux = aux.split(' Con ').join(' con ');
  if (aux.includes(' Los ')) aux = aux.split(' Los ').join(' los ');
  if (aux.includes(' Las ')) aux = aux.split(' Las ').join(' las ');
  if (aux.includes(' Lo ')) aux = aux.split(' Lo ').join(' lo ');
  if (aux.includes(' La ')) aux = aux.split(' La ').join(' la ');
  if (aux.includes(' En ')) aux = aux.split(' En ').join(' en ');
  if (aux.includes(' Y ')) aux = aux.split(' Y ').join(' y ');
  if (aux.includes(' A ')) aux = aux.split(' A ').join(' a ');
  if (aux.includes(' O ')) aux = aux.split(' O ').join(' o ');
  if (aux.includes(' U ')) aux = aux.split(' U ').join(' u ');
  return aux;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result?.toString() || '');
    }
    fileReader.onerror = (error) => {
      reject(error.toString());
    }
  });
}

function removeSpacesFromString(str: string): string {
  return str.split(' ').join('');
}

function shorterEmailString(email: string): string {
  const sides = email.split('@');
  if (sides.length !== 2) return email;
  return `${sides?.[0]?.slice(0, 3) || ''}***@${sides[1]}`;
}

function onlyAllowedChars(v: string, chars: string): string {
  return v.split('').filter(c => (chars.includes(c))).join('');
}

function toRenderList(
  strList: string[] = []
): { key: string; value: string; }[] {
  const aux: { key: string; value: string; }[] = [];
  strList.forEach((str, i) => aux.push({
    key: `id-${i}`,
    value: str
  }));
  return aux;
};

function truncText(
  text: string,
  chars: number
) {
  if (text.trim().length <= chars) return text.trim();
  return `${text.trim().slice(0, chars - 3)}...`;
}

// ---------

const Formatter = {
  toCurrency,
  toCurrencyABS,
  toPercent,
  toPercentABS,
  toQuantity,
  toQuantityABS,
  formatTimer,
  capitalizeParrafo,
  capitalizeTitle,
  capitalizeWord,
  capitalizeWords,
  fileToBase64,
  removeSpacesFromString,
  shorterEmailString,
  onlyAllowedChars,
  toRenderList,
  truncText
}

export default Formatter;
