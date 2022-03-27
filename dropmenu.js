var menu = document.getElementById('dropmenu');

menu.innerHTML = `
<div class="dropdown">
  <button class="dropbtn">Menu</button>
  <div class="dropdown-content">
    <a href="index.html">Home</a>
    <a href="youtube-downloader.html">YouTube Video Downloader</a>
    <a href="twitter-proxy.html">Twitter Proxy</a>
  </div>
</div>
<div class="dropdown">
  <button class="dropbtn">About</button>
  <div class="dropdown-content">
    <a href="about.html">About us</a>
    <a href="donation.html">Making a Donation</a>
    <a href="contract.html">Contract us</a>
  </div>
</div>`
