
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const images = [
  { url: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/20200418-060603-01_orig.jpeg", name: "c925_setup_2020.jpeg" },
  { url: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/20200411-192051-01_orig.jpeg", name: "equipment_detail_2020.jpeg" },
  { url: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/20171108-162643-01_orig.jpeg", name: "c925_new_2017.jpeg" },
  { url: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/1455121911.png", name: "zwo_asi224mc.png" },
  { url: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/3488335_orig.jpg", name: "philips_spc900nc.jpg" },
  { url: "https://www.agapioselia.com/uploads/5/7/1/4/5714530/6138224_orig.jpg", name: "historical_setup_2010.jpg" }
];

const downloadDir = path.resolve('attached_assets');
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

images.forEach(img => {
  const filePath = path.join(downloadDir, img.name);
  console.log(`Downloading ${img.url} to ${filePath}...`);
  exec(`curl -L -o "${filePath}" "${img.url}"`, (error, stdout, stderr) => {
      if (error) {
          console.error(`Error downloading ${img.url}: ${error.message}`);
          return;
      }
      console.log(`Downloaded ${img.name}`);
  });
});
