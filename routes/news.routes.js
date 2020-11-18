const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const newsController = require("../controllers/news.controller");
const verifToken = require("../utils/verifyToken");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    //console.log(file)
    cb(
      null,
      new Date().toISOString().replace(/[/\\:]/g, "_") + file.originalname
    );
  },
});
const upload = multer({ storage: storage });
router.get("/", newsController.getAllNews);
router.post(
  "/create",
  
  upload.single("image"),
  newsController.addNews
);
router.delete("/:id/delete",  newsController.deleteNews);
router.put(
  "/:id/update",
  
  upload.single("image"),
  newsController.updateNews
);

module.exports = router;
