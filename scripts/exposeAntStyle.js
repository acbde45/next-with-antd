const fs = require('fs');
const stat = fs.stat;
const path = require('path');

const root = path.join(__dirname, '..');
const themesDir = {
  default: path.join(root, './node_modules/antd/dist/antd.min.css'),
  dart: path.join(
    root,
    './node_modules/antd/dist/antd.dark.min.css'
  ),
};

const appPublicCssDir = path.join(root, './public/static/css');
const themes = ['default', 'dart'];
const genFileName = (name) => `${name}.theme.css`;

function copy(src, dst) {
  var readable, writable;
  stat(src, function (err, st) {
    if (err) {
      throw err;
    }

    // 判断是否为文件
    if (st.isFile()) {
      // 创建读取流
      readable = fs.createReadStream(src);
      // 创建写入流
      writable = fs.createWriteStream(dst);
      // 通过管道来传输流
      readable.pipe(writable);
    }
  });
}

function exists(src, dst, callback) {
  fs.exists(src, function (exists) {
    if (!exists) {
      callback(src, dst);
    }
  });
}

function genCss() {
  try {
    themes.forEach(themeKey => {
      const sourceFile = themesDir[themeKey];
      const targetDir = path.join(appPublicCssDir, genFileName(themeKey));

      exists(sourceFile, targetDir, copy);
    });
    console.log('Theme generated successfully');
  } catch(err) {
    console.log('Error', error);
  }
}

genCss();
