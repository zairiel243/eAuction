webpackHotUpdate(0,{

/***/ "./src/assets/js/Request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(\"./node_modules/axios/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(\"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);\n\n\n\nclass Request {\n\tsend(method, baseurl, url, data) {\n\n\t\t__WEBPACK_IMPORTED_MODULE_0_axios___default()({\n\t\t\turl: url,\n\t\t\tmethod: method,\n\t\t\tbaseURL: baseurl,\n\t\t\t// NOTE: do no do it like this \n\t\t\t// headers: { \t\t\t\t\t\t\t\t\t\n\t\t\t// \t'X-CSRFToken': Cookies.get('csrftoken'),\n\t\t\t// \t'Access-Control-Allow-Origin': '*',\n\t\t\t// },\n\t\t\theaders: {\n\t\t\t\t'X-Requested-With': 'XMLHttpRequest'\n\t\t\t},\n\t\t\txsrfHeaderName: 'X-CSRFToken',\n\t\t\txsrfCookieName: 'csrftoken',\n\t\t\tdata: JSON.stringify(data) //must stringify\t\t\t\n\t\t}).then(response => {\n\t\t\treturn response;\n\t\t}).catch(error => {\n\t\t\treturn error;\n\t\t});\n\t}\n\n\t// must revise this part. POST and GET shouldn't expect same params\n\tpost(baseurl, url, data) {\n\t\tconsole.log('sadfsd');\n\t\tthis.send('post', baseurl, url, data);\n\t}\n\n\tget(baseurl, url, data) {\n\t\tconsole.log('asdsadsaasf');\n\t\tthis.send('get', baseurl, url, data);\n\t}\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Request;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL1JlcXVlc3QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2Fzc2V0cy9qcy9SZXF1ZXN0LmpzPzA1MDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcblx0c2VuZChtZXRob2QsIGJhc2V1cmwsIHVybCwgZGF0YSl7XG5cblx0XHRheGlvcyh7XG5cdFx0XHR1cmw6IHVybCxcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdFx0YmFzZVVSTDogYmFzZXVybCxcblx0XHRcdC8vIE5PVEU6IGRvIG5vIGRvIGl0IGxpa2UgdGhpcyBcblx0XHRcdC8vIGhlYWRlcnM6IHsgXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHQvLyBcdCdYLUNTUkZUb2tlbic6IENvb2tpZXMuZ2V0KCdjc3JmdG9rZW4nKSxcblx0XHRcdC8vIFx0J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcblx0XHRcdC8vIH0sXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuXHRcdFx0fSxcblx0XHRcdHhzcmZIZWFkZXJOYW1lOiAnWC1DU1JGVG9rZW4nLFxuXHRcdFx0eHNyZkNvb2tpZU5hbWU6ICdjc3JmdG9rZW4nLFxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIC8vbXVzdCBzdHJpbmdpZnlcdFx0XHRcblx0XHR9KVxuXHRcdC50aGVuKChyZXNwb25zZSk9PntyZXR1cm4gcmVzcG9uc2V9KVxuXHRcdC5jYXRjaCgoZXJyb3IpPT57cmV0dXJuIGVycm9yfSlcblx0fVxuXG5cdC8vIG11c3QgcmV2aXNlIHRoaXMgcGFydC4gUE9TVCBhbmQgR0VUIHNob3VsZG4ndCBleHBlY3Qgc2FtZSBwYXJhbXNcblx0cG9zdChiYXNldXJsLCB1cmwsIGRhdGEpe1xuXHRcdGNvbnNvbGUubG9nKCdzYWRmc2QnKVxuXHRcdHRoaXMuc2VuZCgncG9zdCcsYmFzZXVybCwgdXJsLCBkYXRhKTtcblx0fVxuXG5cdGdldChiYXNldXJsLCB1cmwsIGRhdGEpe1xuXHRcdGNvbnNvbGUubG9nKCdhc2RzYWRzYWFzZicpXG5cdFx0dGhpcy5zZW5kKCdnZXQnLGJhc2V1cmwsIHVybCwgZGF0YSk7XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2Fzc2V0cy9qcy9SZXF1ZXN0LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/Request.js\n");

/***/ })

})