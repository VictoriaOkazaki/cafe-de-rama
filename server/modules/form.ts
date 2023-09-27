import formidable, { Fields } from "formidable";

type FormFile = {
  name: string;
  buffer: Buffer;
};

interface IForm {
  fields: Fields;
  files: FormFile[];
}

export default function (req: any): Promise<IForm> {
  return new Promise((resolve, reject) => {
    // console.log('form parse start')

    const form = formidable({ multiples: true });
    const files: FormFile[] = [];
    form.onPart = function (part: any) {
      if (part.originalFilename === "" || !part.mimetype) {
        // used internally, please do not override!
        form._handlePart(part);
        return;
      }
      const chunks: Buffer[] = [];
      part.on("data", function (data: Buffer) {
        chunks.push(data);
      });
      part.on("end", function () {
        // console.log('end read file', part.originalFilename)
        files.push({
          name: part.originalFilename,
          buffer: Buffer.concat(chunks),
        });
      });
      part.on("error", function (err: any) {
        console.error("read file err", err);
        reject(err);
      });
    };
    form.parse(req, function (err: any, fields: any) {
      console.log("form parse end err", err);
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}
