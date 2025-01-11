const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트로 열렸습니다.`);
});

