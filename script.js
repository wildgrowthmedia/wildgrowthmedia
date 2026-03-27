<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 13.0px Times; -webkit-text-stroke: #000000; min-height: 16.0px}
    span.s1 {font-kerning: none; color: #83006b; -webkit-text-stroke: 0px #83006b}
    span.s2 {font-kerning: none}
    span.s3 {font-kerning: none; color: #a40011; -webkit-text-stroke: 0px #a40011}
  </style>
</head>
<body>
<p class="p1"><span class="s1">function</span><span class="s2"> openModal(videoUrl) {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> modal = document.getElementById(</span><span class="s3">"modal"</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> frame = document.getElementById(</span><span class="s3">"videoFrame"</span><span class="s2">);</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>frame.src = videoUrl + </span><span class="s3">"?autoplay=1"</span><span class="s2">;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>modal.style.display = </span><span class="s3">"flex"</span><span class="s2">;</span></p>
<p class="p1"><span class="s2">}</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s1">function</span><span class="s2"> closeModal() {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> modal = document.getElementById(</span><span class="s3">"modal"</span><span class="s2">);</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">const</span><span class="s2"> frame = document.getElementById(</span><span class="s3">"videoFrame"</span><span class="s2">);</span></p>
<p class="p2"><span class="s2"></span><br></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>frame.src = </span><span class="s3">""</span><span class="s2">;</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span>modal.style.display = </span><span class="s3">"none"</span><span class="s2">;</span></p>
<p class="p1"><span class="s2">}</span></p>
</body>
</html>
