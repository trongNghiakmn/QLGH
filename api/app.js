const express = require("express");
const app = express();
const db = require("./service/db");
const cors = require("cors");
app.use(cors());
const routeDonhang = require("./routes/donhangRoute");
const routepck = require("./routes/phieuchuyenkhoRouter");
const routepgh = require("./routes/phieugiaohangRouter");
const routepnv = require("./routes/nhanvienRoute");
const routett = require("./routes/trangthaiRoute");
const routetk = require("./routes/taikhoanRoute");
const routecv = require("./routes/chucvuRoute");
const routekho = require("./routes/khoRoute");
db().connect(() => {
  console.log("connect success");
});
app.listen(3000, () => {
  console.log("listen on port 3000");
});

//localhost:3000/khachhang/...

app.use("/donhang", routeDonhang);
app.use("/phieuchuyenkho", routepck);
app.use("/phieugiaohang", routepgh);
app.use("/nhanvien", routepnv);
app.use("/trangthai", routett);
app.use("/taikhoan", routetk);
app.use("/chucvu", routecv);
app.use("/kho", routekho);

