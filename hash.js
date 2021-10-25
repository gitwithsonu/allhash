
document.querySelector('#inputSubmit').addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector('#MD5').value = md5(document.querySelector('#inputText').value);
  document.querySelector('#SHA1').value = sha1(document.querySelector('#inputText').value);
  document.querySelector('#SHA256').value = sha256(document.querySelector('#inputText').value);
  document.querySelector('#MD2').value = md2(document.querySelector('#inputText').value);

})

// document.querySelector('#inputSubmit').value.addEventListener("change", function(event){
//   event.preventDefault();
//   document.querySelector('#MD5').value = md5(document.querySelector('#inputText').value);
//   document.querySelector('#SHA1').value = sha1(document.querySelector('#inputText').value);
//   document.querySelector('#SHA256').value = sha256(document.querySelector('#inputText').value);
//   document.querySelector('#MD2').value = md2(document.querySelector('#inputText').value);

// })

function change() {

  document.querySelector('#MD5').value = md5(document.querySelector('#inputText').value);
  document.querySelector('#SHA1').value = sha1(document.querySelector('#inputText').value);
  document.querySelector('#SHA256').value = sha256(document.querySelector('#inputText').value);
  document.querySelector('#MD2').value = md2(document.querySelector('#inputText').value);
}

var hashs = ['MD5', 'SHA1', 'SHA256', 'MD2'];


for (let i = 0; i < hashs.length; i++) {
  document.querySelector('#COPY_' + hashs[i]).addEventListener("click", () => {
    document.querySelector('.copiedToClipboard').style.display = "block";
    document.querySelector('.copiedToClipboard').style.opacity = '1';
    navigator.clipboard.writeText(document.querySelector('#' + hashs[i]).value);
    var k = 1;
    setTimeout(function () {
      var tid = setInterval(function () {
        k = k + 1;
        document.querySelector('.copiedToClipboard').style.opacity = '' + 1 / k + '';
        //called 500/20 times each time after one second  
        //before getting cleared by below timeout. 
      }, 20); //delay is in milliseconds 

      setTimeout(function () {
        clearInterval(tid); //clear above interval after 2 seconds
        document.querySelector('.copiedToClipboard').style.display = "none";
        document.querySelector('.copiedToClipboard').style.opacity = '1';
      }, 500);
    }, 1000);
  })
}















//md5

// Source code from http://www.myersdaily.org/joseph/javascript/md5.js
function md5cycle(x, k) {
  var a = x[0], b = x[1], c = x[2], d = x[3];

  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);

  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);

  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);

  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);

  x[0] = add32(a, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
  a = add32(add32(a, q), add32(x, t));
  return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
  return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
  return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
  txt = '';
  var n = s.length,
    state = [1732584193, -271733879, -1732584194, 271733878], i;
  for (i = 64; i <= s.length; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(i - 64);
  var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < s.length; i++)
    tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
  tail[i >> 2] |= 0x80 << ((i % 4) << 3);
  if (i > 55) {
    md5cycle(state, tail);
    for (i = 0; i < 16; i++) tail[i] = 0;
  }
  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
  var md5blks = [], i; /* Andy King said do it this way. */
  for (i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i)
      + (s.charCodeAt(i + 1) << 8)
      + (s.charCodeAt(i + 2) << 16)
      + (s.charCodeAt(i + 3) << 24);
  }
  return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
  var s = '', j = 0;
  for (; j < 4; j++)
    s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
      + hex_chr[(n >> (j * 8)) & 0x0F];
  return s;
}

function hex(x) {
  for (var i = 0; i < x.length; i++)
    x[i] = rhex(x[i]);
  return x.join('');
}

function md5(s) {
  return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
  return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
  function add32(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
      msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }
}

// EXAMPLE ======> 
//var md5hash = md5("Welcome to DebugPointer.com");
























// SHA1
// THIS CODE IS MADE BY Chen, Yi-Cyuan
// FIND IT ON FOLLOWING LINK
// https://cdnjs.cloudflare.com/ajax/libs/js-sha1/0.6.0/sha1.min.js


/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function () { "use strict"; function t(t) { t ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0 } var h = "object" == typeof window ? window : {}, s = !h.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node; s && (h = global); var i = !h.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports, e = "function" == typeof define && define.amd, r = "0123456789abcdef".split(""), o = [-2147483648, 8388608, 32768, 128], n = [24, 16, 8, 0], a = ["hex", "array", "digest", "arrayBuffer"], f = [], u = function (h) { return function (s) { return new t(!0).update(s)[h]() } }, c = function () { var h = u("hex"); s && (h = p(h)), h.create = function () { return new t }, h.update = function (t) { return h.create().update(t) }; for (var i = 0; i < a.length; ++i) { var e = a[i]; h[e] = u(e) } return h }, p = function (t) { var h = eval("require('crypto')"), s = eval("require('buffer').Buffer"), i = function (i) { if ("string" == typeof i) return h.createHash("sha1").update(i, "utf8").digest("hex"); if (i.constructor === ArrayBuffer) i = new Uint8Array(i); else if (void 0 === i.length) return t(i); return h.createHash("sha1").update(new s(i)).digest("hex") }; return i }; t.prototype.update = function (t) { if (!this.finalized) { var s = "string" != typeof t; s && t.constructor === h.ArrayBuffer && (t = new Uint8Array(t)); for (var i, e, r = 0, o = t.length || 0, a = this.blocks; r < o;) { if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), s) for (e = this.start; r < o && e < 64; ++r)a[e >> 2] |= t[r] << n[3 & e++]; else for (e = this.start; r < o && e < 64; ++r)(i = t.charCodeAt(r)) < 128 ? a[e >> 2] |= i << n[3 & e++] : i < 2048 ? (a[e >> 2] |= (192 | i >> 6) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]) : i < 55296 || i >= 57344 ? (a[e >> 2] |= (224 | i >> 12) << n[3 & e++], a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), a[e >> 2] |= (240 | i >> 18) << n[3 & e++], a[e >> 2] |= (128 | i >> 12 & 63) << n[3 & e++], a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]); this.lastByteIndex = e, this.bytes += e - this.start, e >= 64 ? (this.block = a[16], this.start = e - 64, this.hash(), this.hashed = !0) : this.start = e } return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this } }, t.prototype.finalize = function () { if (!this.finalized) { this.finalized = !0; var t = this.blocks, h = this.lastByteIndex; t[16] = this.block, t[h >> 2] |= o[3 & h], this.block = t[16], h >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash() } }, t.prototype.hash = function () { var t, h, s = this.h0, i = this.h1, e = this.h2, r = this.h3, o = this.h4, n = this.blocks; for (t = 16; t < 80; ++t)h = n[t - 3] ^ n[t - 8] ^ n[t - 14] ^ n[t - 16], n[t] = h << 1 | h >>> 31; for (t = 0; t < 20; t += 5)s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i & e | ~i & r) + o + 1518500249 + n[t] << 0) << 5 | o >>> 27) + (s & (i = i << 30 | i >>> 2) | ~s & e) + r + 1518500249 + n[t + 1] << 0) << 5 | r >>> 27) + (o & (s = s << 30 | s >>> 2) | ~o & i) + e + 1518500249 + n[t + 2] << 0) << 5 | e >>> 27) + (r & (o = o << 30 | o >>> 2) | ~r & s) + i + 1518500249 + n[t + 3] << 0) << 5 | i >>> 27) + (e & (r = r << 30 | r >>> 2) | ~e & o) + s + 1518500249 + n[t + 4] << 0, e = e << 30 | e >>> 2; for (; t < 40; t += 5)s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i ^ e ^ r) + o + 1859775393 + n[t] << 0) << 5 | o >>> 27) + (s ^ (i = i << 30 | i >>> 2) ^ e) + r + 1859775393 + n[t + 1] << 0) << 5 | r >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ i) + e + 1859775393 + n[t + 2] << 0) << 5 | e >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ s) + i + 1859775393 + n[t + 3] << 0) << 5 | i >>> 27) + (e ^ (r = r << 30 | r >>> 2) ^ o) + s + 1859775393 + n[t + 4] << 0, e = e << 30 | e >>> 2; for (; t < 60; t += 5)s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i & e | i & r | e & r) + o - 1894007588 + n[t] << 0) << 5 | o >>> 27) + (s & (i = i << 30 | i >>> 2) | s & e | i & e) + r - 1894007588 + n[t + 1] << 0) << 5 | r >>> 27) + (o & (s = s << 30 | s >>> 2) | o & i | s & i) + e - 1894007588 + n[t + 2] << 0) << 5 | e >>> 27) + (r & (o = o << 30 | o >>> 2) | r & s | o & s) + i - 1894007588 + n[t + 3] << 0) << 5 | i >>> 27) + (e & (r = r << 30 | r >>> 2) | e & o | r & o) + s - 1894007588 + n[t + 4] << 0, e = e << 30 | e >>> 2; for (; t < 80; t += 5)s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i ^ e ^ r) + o - 899497514 + n[t] << 0) << 5 | o >>> 27) + (s ^ (i = i << 30 | i >>> 2) ^ e) + r - 899497514 + n[t + 1] << 0) << 5 | r >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^ i) + e - 899497514 + n[t + 2] << 0) << 5 | e >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ s) + i - 899497514 + n[t + 3] << 0) << 5 | i >>> 27) + (e ^ (r = r << 30 | r >>> 2) ^ o) + s - 899497514 + n[t + 4] << 0, e = e << 30 | e >>> 2; this.h0 = this.h0 + s << 0, this.h1 = this.h1 + i << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + r << 0, this.h4 = this.h4 + o << 0 }, t.prototype.hex = function () { this.finalize(); var t = this.h0, h = this.h1, s = this.h2, i = this.h3, e = this.h4; return r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 & 15] + r[t >> 4 & 15] + r[15 & t] + r[h >> 28 & 15] + r[h >> 24 & 15] + r[h >> 20 & 15] + r[h >> 16 & 15] + r[h >> 12 & 15] + r[h >> 8 & 15] + r[h >> 4 & 15] + r[15 & h] + r[s >> 28 & 15] + r[s >> 24 & 15] + r[s >> 20 & 15] + r[s >> 16 & 15] + r[s >> 12 & 15] + r[s >> 8 & 15] + r[s >> 4 & 15] + r[15 & s] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >> 8 & 15] + r[i >> 4 & 15] + r[15 & i] + r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >> 16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e] }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () { this.finalize(); var t = this.h0, h = this.h1, s = this.h2, i = this.h3, e = this.h4; return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e] }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () { this.finalize(); var t = new ArrayBuffer(20), h = new DataView(t); return h.setUint32(0, this.h0), h.setUint32(4, this.h1), h.setUint32(8, this.h2), h.setUint32(12, this.h3), h.setUint32(16, this.h4), t }; var y = c(); i ? module.exports = y : (h.sha1 = y, e && define(function () { return y })) }();

// HOW TO CALL  
// var text = sha1('allhash.ml');







//SHA256 

//
// the Source code is made by https://geraintluff.github.io/sha256/
var sha256 = function sha256(ascii) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  };

  var mathPow = Math.pow;
  var maxWord = mathPow(2, 32);
  var lengthProperty = 'length'
  var i, j; // Used as a counter across the whole file
  var result = ''

  var words = [];
  var asciiBitLength = ascii[lengthProperty] * 8;

  //* caching results is optional - remove/add slash from front of this line to toggle
  // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
  // (we actually calculate the first 64, but extra values are just ignored)
  var hash = sha256.h = sha256.h || [];
  // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
  var k = sha256.k = sha256.k || [];
  var primeCounter = k[lengthProperty];
  /*/
  var hash = [], k = [];
  var primeCounter = 0;
  //*/

  var isComposite = {};
  for (var candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (i = 0; i < 313; i += candidate) {
        isComposite[i] = candidate;
      }
      hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
      k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
    }
  }

  ascii += '\x80' // Append Ƈ' bit (plus zero padding)
  while (ascii[lengthProperty] % 64 - 56) ascii += '\x00' // More zero padding
  for (i = 0; i < ascii[lengthProperty]; i++) {
    j = ascii.charCodeAt(i);
    if (j >> 8) return; // ASCII check: only accept characters in range 0-255
    words[i >> 2] |= j << ((3 - i) % 4) * 8;
  }
  words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
  words[words[lengthProperty]] = (asciiBitLength)

  // process each chunk
  for (j = 0; j < words[lengthProperty];) {
    var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
    var oldHash = hash;
    // This is now the undefinedworking hash", often labelled as variables a...g
    // (we have to truncate as well, otherwise extra entries at the end accumulate
    hash = hash.slice(0, 8);

    for (i = 0; i < 64; i++) {
      var i2 = i + j;
      // Expand the message into 64 words
      // Used below if 
      var w15 = w[i - 15], w2 = w[i - 2];

      // Iterate
      var a = hash[0], e = hash[4];
      var temp1 = hash[7]
        + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
        + ((e & hash[5]) ^ ((~e) & hash[6])) // ch
        + k[i]
        // Expand the message schedule if needed
        + (w[i] = (i < 16) ? w[i] : (
          w[i - 16]
          + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) // s0
          + w[i - 7]
          + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10)) // s1
        ) | 0
        );
      // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
      var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
        + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

      hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
      hash[4] = (hash[4] + temp1) | 0;
    }

    for (i = 0; i < 8; i++) {
      hash[i] = (hash[i] + oldHash[i]) | 0;
    }
  }

  for (i = 0; i < 8; i++) {
    for (j = 3; j + 1; j--) {
      var b = (hash[i] >> (j * 8)) & 255;
      result += ((b < 16) ? 0 : '') + b.toString(16);
    }
  }
  return result;
};
// EXAMPLE 
// VAR TEXT = sha256('allhash.ml')






// MD2
// algorithum by
// https://raw.githubusercontent.com/emn178/js-md2/master/src/md2.js

(function () {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_MD2_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_MD2_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD = typeof define === 'function' && define.amd;
  var HEX_CHARS = '0123456789abcdef'.split('');

  var S = [
    0x29, 0x2E, 0x43, 0xC9, 0xA2, 0xD8, 0x7C, 0x01, 0x3D, 0x36, 0x54, 0xA1, 0xEC, 0xF0, 0x06, 0x13,
    0x62, 0xA7, 0x05, 0xF3, 0xC0, 0xC7, 0x73, 0x8C, 0x98, 0x93, 0x2B, 0xD9, 0xBC, 0x4C, 0x82, 0xCA,
    0x1E, 0x9B, 0x57, 0x3C, 0xFD, 0xD4, 0xE0, 0x16, 0x67, 0x42, 0x6F, 0x18, 0x8A, 0x17, 0xE5, 0x12,
    0xBE, 0x4E, 0xC4, 0xD6, 0xDA, 0x9E, 0xDE, 0x49, 0xA0, 0xFB, 0xF5, 0x8E, 0xBB, 0x2F, 0xEE, 0x7A,
    0xA9, 0x68, 0x79, 0x91, 0x15, 0xB2, 0x07, 0x3F, 0x94, 0xC2, 0x10, 0x89, 0x0B, 0x22, 0x5F, 0x21,
    0x80, 0x7F, 0x5D, 0x9A, 0x5A, 0x90, 0x32, 0x27, 0x35, 0x3E, 0xCC, 0xE7, 0xBF, 0xF7, 0x97, 0x03,
    0xFF, 0x19, 0x30, 0xB3, 0x48, 0xA5, 0xB5, 0xD1, 0xD7, 0x5E, 0x92, 0x2A, 0xAC, 0x56, 0xAA, 0xC6,
    0x4F, 0xB8, 0x38, 0xD2, 0x96, 0xA4, 0x7D, 0xB6, 0x76, 0xFC, 0x6B, 0xE2, 0x9C, 0x74, 0x04, 0xF1,
    0x45, 0x9D, 0x70, 0x59, 0x64, 0x71, 0x87, 0x20, 0x86, 0x5B, 0xCF, 0x65, 0xE6, 0x2D, 0xA8, 0x02,
    0x1B, 0x60, 0x25, 0xAD, 0xAE, 0xB0, 0xB9, 0xF6, 0x1C, 0x46, 0x61, 0x69, 0x34, 0x40, 0x7E, 0x0F,
    0x55, 0x47, 0xA3, 0x23, 0xDD, 0x51, 0xAF, 0x3A, 0xC3, 0x5C, 0xF9, 0xCE, 0xBA, 0xC5, 0xEA, 0x26,
    0x2C, 0x53, 0x0D, 0x6E, 0x85, 0x28, 0x84, 0x09, 0xD3, 0xDF, 0xCD, 0xF4, 0x41, 0x81, 0x4D, 0x52,
    0x6A, 0xDC, 0x37, 0xC8, 0x6C, 0xC1, 0xAB, 0xFA, 0x24, 0xE1, 0x7B, 0x08, 0x0C, 0xBD, 0xB1, 0x4A,
    0x78, 0x88, 0x95, 0x8B, 0xE3, 0x63, 0xE8, 0x6D, 0xE9, 0xCB, 0xD5, 0xFE, 0x3B, 0x00, 0x1D, 0x39,
    0xF2, 0xEF, 0xB7, 0x0E, 0x66, 0x58, 0xD0, 0xE4, 0xA6, 0x77, 0x72, 0xF8, 0xEB, 0x75, 0x4B, 0x0A,
    0x31, 0x44, 0x50, 0xB4, 0x8F, 0xED, 0x1F, 0x1A, 0xDB, 0x99, 0x8D, 0x33, 0x9F, 0x11, 0x83, 0x14
  ];

  var M = [], X = [], C = [];

  var md2 = function (message) {
    var code, i, j, k, t, L = 0, loop = 1, B,
      index = 0, start = 0, bytes = 0, length = message.length;

    for (i = 0; i < 16; ++i) {
      X[i] = C[i] = 0;
    }

    M[16] = M[17] = M[18] = 0;
    do {
      M[0] = M[16];
      M[1] = M[17];
      M[2] = M[18];
      M[16] = M[17] = M[18] = M[3] =
        M[4] = M[5] = M[6] = M[7] =
        M[8] = M[9] = M[10] = M[11] =
        M[12] = M[13] = M[14] = M[15] = 0;
      for (i = start; index < length && i < 16; ++index) {
        code = message.charCodeAt(index);
        if (code < 0x80) {
          M[i++] = code;
        } else if (code < 0x800) {
          M[i++] = 0xc0 | (code >> 6);
          M[i++] = 0x80 | (code & 0x3f);
        } else if (code < 0xd800 || code >= 0xe000) {
          M[i++] = 0xe0 | (code >> 12);
          M[i++] = 0x80 | ((code >> 6) & 0x3f);
          M[i++] = 0x80 | (code & 0x3f);
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
          M[i++] = 0xf0 | (code >> 18);
          M[i++] = 0x80 | ((code >> 12) & 0x3f);
          M[i++] = 0x80 | ((code >> 6) & 0x3f);
          M[i++] = 0x80 | (code & 0x3f);
        }
      }
      bytes += i - start;
      start = i - 16;

      if (index === length && i < 16) {
        loop = 2;
        t = 16 - (bytes & 15);
        for (; i < 16; ++i) {
          M[i] = t;
        }
      }

      for (i = 0; i < 16; ++i) {
        C[i] ^= S[M[i] ^ L];
        L = C[i];
      }

      for (i = 0; i < loop; ++i) {
        B = i === 0 ? M : C;

        X[16] = B[0];
        X[32] = X[16] ^ X[0];
        X[17] = B[1];
        X[33] = X[17] ^ X[1];
        X[18] = B[2];
        X[34] = X[18] ^ X[2];
        X[19] = B[3];
        X[35] = X[19] ^ X[3];
        X[20] = B[4];
        X[36] = X[20] ^ X[4];
        X[21] = B[5];
        X[37] = X[21] ^ X[5];
        X[22] = B[6];
        X[38] = X[22] ^ X[6];
        X[23] = B[7];
        X[39] = X[23] ^ X[7];
        X[24] = B[8];
        X[40] = X[24] ^ X[8];
        X[25] = B[9];
        X[41] = X[25] ^ X[9];
        X[26] = B[10];
        X[42] = X[26] ^ X[10];
        X[27] = B[11];
        X[43] = X[27] ^ X[11];
        X[28] = B[12];
        X[44] = X[28] ^ X[12];
        X[29] = B[13];
        X[45] = X[29] ^ X[13];
        X[30] = B[14];
        X[46] = X[30] ^ X[14];
        X[31] = B[15];
        X[47] = X[31] ^ X[15];

        t = 0;
        for (j = 0; j < 18; ++j) {
          for (k = 0; k < 48; ++k) {
            X[k] = t = X[k] ^ S[t];
          }
          t = (t + j) & 0xFF;
        }
      }
    } while (loop === 1);

    var hex = '';
    for (i = 0; i < 16; ++i) {
      hex += HEX_CHARS[(X[i] >> 4) & 0x0F] + HEX_CHARS[X[i] & 0x0F];
    }
    return hex;
  };

  if (COMMON_JS) {
    module.exports = md2;
  } else {
    root.md2 = md2;
    if (AMD) {
      define(function () {
        return md2;
      });
    }
  }
})();













