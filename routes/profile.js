var express = require('express');
var router = express.Router();
//var easyimg = require('easyimage');
 
router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "image") is used to retrieve the uploaded file 
  let Image = req.files.image;

  easyimg.rescrop({
      src:image, dst:'images/filename.jpg',
      width:500, height:500,
      cropwidth:128, cropheight:128,
      x:0, y:0
    }).then(
    function(image) {
      console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
    },
    function (err) {
      console.log(err);
    }
  );
 
  // Use the mv() method to place the file somewhere on your server 
  Image.mv('images/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

module.exports = router;