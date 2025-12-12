import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { sample } = req.query;

  // If the user selected a specific JSON (1–5)
  if (sample) {
    const filePath = path.join(process.cwd(), `mocks/sample-${sample}.json`);

    try {
      const fileData = fs.readFileSync(filePath, "utf8");
      const json = JSON.parse(fileData);
      return res.status(200).json(json);
    } catch (err) {
      return res.status(404).json({ error: "Sample JSON not found" });
    }
  }

  // RANDOM fallback (if no sample is provided)
  const files = [
    "sample-1.json",
    "sample-2.json",
    "sample-3.json",
    "sample-4.json",
    "sample-5.json",
  ];

  const selected = files[Math.floor(Math.random() * files.length)];
  const filePath = path.join(process.cwd(), "mocks", selected);

  const fileData = fs.readFileSync(filePath, "utf8");
  const json = JSON.parse(fileData);

  return res.status(200).json(json);
}
