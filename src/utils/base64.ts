
export function convertFileToBase64(file: File | Blob): Promise<any> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  });
}

export function stringToBase64(str: string): string {
  return Buffer.from(str, 'utf8').toString('base64');
}

export function base64ToString(base64: string): string {
  const b64 = base64.split(';base64,').pop() as string;
  return Buffer.from(b64, 'base64').toString('utf8');
}

export function base64ToBuffer(base64: string): Buffer {
  const b64 = base64.split(';base64,').pop() as string;
  return Buffer.from(b64, 'base64');
}
