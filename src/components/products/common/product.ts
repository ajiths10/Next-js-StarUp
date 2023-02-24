import fs from "fs/promises";
import path from "path";

export const getData = async () => {
  try {
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    let responseData: any = await fs.readFile(filePath);
    const data = await JSON.parse(responseData);
    return data;
  } catch (error) {
    return error;
  }
};
