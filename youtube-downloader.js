var getBtn = document.getElementById('get-button');
var downloadBtn = document.getElementById('download-button');
var getId = document.getElementById('get-video-id');

getBtn.addEventListener('click', () => {
  var videoId = document.getElementById("get-video-id").value;
  if (videoId.match(/^[A-Za-z\d\-]{11}$/)) {
    document.getElementById("alert").innerHTML = "";
    document.getElementById("preview").src = "https://www.youtube.com/embed/" + videoId;
  } else {
    document.getElementById("alert").innerHTML =
      "Invalid Video ID";
  }
});

downloadBtn.addEventListener('click', () => {
  console.log(`URL: ${getId.value}`);
  sendURL(getId.value);
});

const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
app.use(cors());
app.listen(4000, () => {
  console.log('Server Works !!! At port 4000');
});

app.get('/download', (req, res) => {
  var URL = req.query.URL;
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: 'mp4'
  }).pipe(res);
});