# 中国大学MOOC禁用Flash课件换用H5
这是一个油猴脚本。用来移除中国大学MOOC平台原来的Flash课件显示模块，并用H5显示。

### 经历&问题
  起初想到用<iframe>标签包裹课件地址，可服务器端设置了application/octet-stream，这样好像就会导致文件被下载而不是被打开。
  
  没有找到办法的情况下，引入了[pdf.js](https://github.com/mozilla/pdf.js)，但是原版的它会检测跨域。
  
  借助网上的办法，将pdf.js部署到你自己的服务器上之后，删除viewer.js的跨域检测之后，再次运行脚本即可正常使用。

### 用法
  油猴自己加脚本
  
  等待油猴链接
