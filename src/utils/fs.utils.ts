import fs from 'fs';

// ------

function deleteFile(
  filePath: string
): Promise<{
  success?: boolean;
  message?: string;
}> {

  return new Promise((resolve, reject) => {

    fs.unlink(filePath, (err) => {
      if (err) {
        reject({ message: `Error removing file: ${err.toString()}` });
        return;
      }
      resolve({ success: true });
    });
    
  });

}

// -----

const FS = {
  deleteFile
};

export default FS;

