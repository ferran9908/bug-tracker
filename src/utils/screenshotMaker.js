const { frameDate } = require("./frameDate");
const makeScreenshot = async () => {
  try {
    const buffer = await screenshot({ format: "png" });
    const folderPath = `${desktopDir}/${frameDate()}`;
    console.log({ buffer });
    if (fs.existsSync(folderPath)) {
      fs.writeFileSync(`${folderPath}/${Date.now()}.png`, buffer);
      return;
    }
    fs.mkdir(folderPath, (err) => {
      if (err) {
        console.log(err);
        return err;
      }
      fs.writeFileSync(`${folderPath}/${Date.now()}.png`, buffer);
    });
  } catch (e) {
    console.log({ error: e });
  }
};

module.exports = { makeScreenshot };
