webpackJsonp([16],{"3fXU":function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,".upload-avator-container{width:1000px;height:400px;margin:0 auto;background-color:#fff;margin-top:-30px;box-shadow:2px 2px 2px #ccc}.avatar-main{width:100%;height:100%;padding:14px 10px}.avatar-main>.avatar-img{text-align:center}.avatar-i{border-radius:50%;width:75px;height:75px;border:1px solid #ccc}.avatar-choice{width:100%;height:200px;padding:10px;margin-top:80px}.avatar-choice>.choice-xiangce{width:100%;height:40px;background:#20a0ff;font-size:18px;color:#fff;border:none}","",{version:3,sources:["D:/Products/ecmagnet-pc/src/assets/css/upload.css"],names:[],mappings:"AAAA,yBACE,aAAc,AACd,aAAc,AACd,cAAe,AACf,sBAA0B,AAC1B,iBAAkB,AAClB,2BAA6B,CAC9B,AACD,aACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,yBACE,iBAAmB,CACpB,AACD,UACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,qBAA0B,CAC3B,AACD,eACE,WAAY,AACZ,aAAc,AACd,aAAc,AACd,eAAiB,CAClB,AACD,+BACE,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,eAAgB,AAChB,WAAe,AACf,WAAa,CACd",file:"upload.css",sourcesContent:[".upload-avator-container{\n  width: 1000px;\n  height: 400px;\n  margin: 0 auto;\n  background-color: #ffffff;\n  margin-top: -30px;\n  box-shadow: 2px 2px 2px #ccc;\n}\n.avatar-main{\n  width: 100%;\n  height: 100%;\n  padding: 14px 10px;\n}\n.avatar-main>.avatar-img{\n  text-align: center;\n}\n.avatar-i{\n  border-radius: 50%;\n  width: 75px;\n  height: 75px;\n  border: 1px solid #cccccc;\n}\n.avatar-choice{\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  margin-top: 80px;\n}\n.avatar-choice>.choice-xiangce{\n  width: 100%;\n  height: 40px;\n  background: #20A0FF;\n  font-size: 18px;\n  color: #ffffff;\n  border: none;\n}\n"],sourceRoot:""}])},BULn:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-avator-container"},[n("section",{staticClass:"avatar-main"},[n("div",{staticClass:"avatar-img"},[n("input",{staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg,image/jpg,image/png",capture:"camera"},on:{change:e.onFileChange}}),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:!e.isPhoto,expression:"!isPhoto"}],staticClass:"list-ul"},[n("li",{staticClass:"list-li"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrls,expression:"imgUrls"}],staticClass:"avatar-i"})])])]),e._v(" "),n("div",{staticClass:"avatar-choice"},[n("button",{staticClass:"choice-xiangce",on:{click:function(t){e.addPic()}}},[e._v("选择上传头像")])])])])},i=[],a={render:r,staticRenderFns:i};t.a=a},JpXR:function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(6),n(7),e.exports=n(8)},function(e,t,n){(function(t){!function(n){function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(o,this),r(s,this))}function a(e){var t=this;return null===this._state?void this._deferreds.push(e):void f(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(t){return void e.reject(t)}e.resolve(r)})}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(o,this),r(s,this))}this._state=!0,this._value=e,c.call(this)}catch(e){s.call(this,e)}}function s(e){this._state=!1,this._value=e,c.call(this)}function c(){for(var e=0,t=this._deferreds.length;t>e;e++)a.call(this,this._deferreds[e]);this._deferreds=null}function u(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(e){if(r)return;r=!0,n(e)}}var f="function"==typeof t&&t||function(e){setTimeout(e,1)},d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i(function(r,i){a.call(n,new u(e,t,r,i))})},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&d(arguments[0])?arguments[0]:arguments);return new i(function(t,n){function r(a,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(e){r(a,e)},n)}e[a]=o,0==--i&&t(e)}catch(e){n(e)}}if(0===e.length)return t([]);for(var i=e.length,a=0;a<e.length;a++)r(a,e[a])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._setImmediateFn=function(e){f=e},i.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,r){function i(e,t){this._id=e,this._clearFn=t}var a=n(3).nextTick,o=Function.prototype.apply,s=Array.prototype.slice,c={},u=0;t.setTimeout=function(){return new i(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=u++,r=!(arguments.length<2)&&s.call(arguments,1);return c[n]=!0,a(function(){c[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof r?r:function(e){delete c[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(){u=!1,o.length?c=o.concat(c):l=-1,c.length&&r()}function r(){if(!u){var e=setTimeout(n);u=!0;for(var t=c.length;t;){for(o=c,c=[];++l<t;)o&&o[l].run();l=-1,t=c.length}o=null,u=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function a(){}var o,s=e.exports={},c=[],u=!1,l=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new i(e,t)),1!==c.length||u||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=a,s.addListener=a,s.once=a,s.off=a,s.removeListener=a,s.removeAllListeners=a,s.emit=a,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t){var n=function(){try{return new Blob,!0}catch(e){return!1}}()?window.Blob:function(e,t){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder);return e.forEach(function(e){n.append(e)}),n.getBlob(t?t.type:void 0)},r=function(){function e(){var e=this,r=[],i=Array(21).join("-")+(+new Date*(1e16*Math.random())).toString(36),a=XMLHttpRequest.prototype.send;this.getParts=function(){return r.toString()},this.append=function(e,t,n){r.push("--"+i+'\r\nContent-Disposition: form-data; name="'+e+'"'),t instanceof Blob?(r.push('; filename="'+(n||"blob")+'"\r\nContent-Type: '+t.type+"\r\n\r\n"),r.push(t)):r.push("\r\n\r\n"+t),r.push("\r\n")},t++,XMLHttpRequest.prototype.send=function(o){var s,c,u=this;o===e?(r.push("--"+i+"--\r\n"),c=new n(r),s=new FileReader,s.onload=function(){a.call(u,s.result)},s.onerror=function(e){throw e},s.readAsArrayBuffer(c),this.setRequestHeader("Content-Type","multipart/form-data; boundary="+i),0==--t&&(XMLHttpRequest.prototype.send=a)):a.call(this,o)}}var t=0;return e.prototype=Object.create(FormData.prototype),e}();e.exports={Blob:n,FormData:function(){return~navigator.userAgent.indexOf("Android")&&~navigator.vendor.indexOf("Google")&&!~navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop()<=534||/MQQBrowser/g.test(navigator.userAgent)}()?r:FormData}},function(e,t,n){var r,i;(function(){function n(e){return!!e.exifdata}function a(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),a=new Uint8Array(i),o=0;r>o;o++)a[o]=n.charCodeAt(o);return i}function o(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response)},n.send()}function s(e,t){function n(n){var r=c(n),i=u(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var r=a(e.src);n(r)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},o(e.src,function(e){i.readAsArrayBuffer(e)})}else{var s=new XMLHttpRequest;s.onload=function(){200==this.status||0===this.status?n(s.response):t(new Error("Could not load image")),s=null},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var i=new FileReader;i.onload=function(e){n(e.target.result)},i.readAsArrayBuffer(e)}}function c(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1))return!1;for(var n=2,r=e.byteLength;r>n;){if(255!=t.getUint8(n))return!1;if(225==t.getUint8(n+1))return g(t,n+4,t.getUint16(n+2));n+=2+t.getUint16(n+2)}}function u(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1))return!1;for(var n=2,r=e.byteLength;r>n;){if(function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)}(t,n)){var i=t.getUint8(n+7);i%2!=0&&(i+=1),0===i&&(i=4);return l(e,n+8+i,t.getUint16(n+6+i))}n++}}function l(e,t,n){for(var r,i,a,o,s=new DataView(e),c={},u=t;t+n>u;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(o=s.getUint8(u+2))in y&&(a=s.getInt16(u+3),a+5,i=y[o],r=h(s,u+5,a),c.hasOwnProperty(i)?c[i]instanceof Array?c[i].push(r):c[i]=[c[i],r]:c[i]=r),u++;return c}function f(e,t,n,r,i){var a,o,s,c=e.getUint16(n,!i),u={};for(s=0;c>s;s++)a=n+12*s+2,o=r[e.getUint16(a,!i)],u[o]=d(e,a,t,n,i);return u}function d(e,t,n,r,i){var a,o,s,c,u,l,f=e.getUint16(t+2,!i),d=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+n;switch(f){case 1:case 7:if(1==d)return e.getUint8(t+8,!i);for(a=d>4?g:t+8,o=[],c=0;d>c;c++)o[c]=e.getUint8(a+c);return o;case 2:return a=d>4?g:t+8,h(e,a,d-1);case 3:if(1==d)return e.getUint16(t+8,!i);for(a=d>2?g:t+8,o=[],c=0;d>c;c++)o[c]=e.getUint16(a+2*c,!i);return o;case 4:if(1==d)return e.getUint32(t+8,!i);for(o=[],c=0;d>c;c++)o[c]=e.getUint32(g+4*c,!i);return o;case 5:if(1==d)return u=e.getUint32(g,!i),l=e.getUint32(g+4,!i),s=new Number(u/l),s.numerator=u,s.denominator=l,s;for(o=[],c=0;d>c;c++)u=e.getUint32(g+8*c,!i),l=e.getUint32(g+4+8*c,!i),o[c]=new Number(u/l),o[c].numerator=u,o[c].denominator=l;return o;case 9:if(1==d)return e.getInt32(t+8,!i);for(o=[],c=0;d>c;c++)o[c]=e.getInt32(g+4*c,!i);return o;case 10:if(1==d)return e.getInt32(g,!i)/e.getInt32(g+4,!i);for(o=[],c=0;d>c;c++)o[c]=e.getInt32(g+8*c,!i)/e.getInt32(g+4+8*c,!i);return o}}function h(e,t,n){var r,i="";for(r=t;t+n>r;r++)i+=String.fromCharCode(e.getUint8(r));return i}function g(e,t){if("Exif"!=h(e,t,4))return!1;var n,r,i,a,o,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return!1;n=!0}if(42!=e.getUint16(s+2,!n))return!1;var c=e.getUint32(s+4,!n);if(8>c)return!1;if(r=f(e,s,s+c,w,n),r.ExifIFDPointer){a=f(e,s,s+r.ExifIFDPointer,m,n);for(i in a){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":a[i]=A[i][a[i]];break;case"ExifVersion":case"FlashpixVersion":a[i]=String.fromCharCode(a[i][0],a[i][1],a[i][2],a[i][3]);break;case"ComponentsConfiguration":a[i]=A.Components[a[i][0]]+A.Components[a[i][1]]+A.Components[a[i][2]]+A.Components[a[i][3]]}r[i]=a[i]}}if(r.GPSInfoIFDPointer){o=f(e,s,s+r.GPSInfoIFDPointer,v,n);for(i in o){switch(i){case"GPSVersionID":o[i]=o[i][0]+"."+o[i][1]+"."+o[i][2]+"."+o[i][3]}r[i]=o[i]}}return r}var p=function(e){return e instanceof p?e:this instanceof p?void(this.EXIFwrapped=e):new p(e)};void 0!==e&&e.exports&&(t=e.exports=p),t.EXIF=p;var m=p.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},w=p.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},v=p.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},A=p.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},y={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};p.getData=function(e,t){return!((e instanceof Image||e instanceof HTMLImageElement)&&!e.complete)&&(n(e)?t&&t.call(e):s(e,t),!0)},p.getTag=function(e,t){return n(e)?e.exifdata[t]:void 0},p.getAllTags=function(e){if(!n(e))return{};var t,r=e.exifdata,i={};for(t in r)r.hasOwnProperty(t)&&(i[t]=r[t]);return i},p.pretty=function(e){if(!n(e))return"";var t,r=e.exifdata,i="";for(t in r)r.hasOwnProperty(t)&&(i+="object"==typeof r[t]?r[t]instanceof Number?t+" : "+r[t]+" ["+r[t].numerator+"/"+r[t].denominator+"]\r\n":t+" : ["+r[t].length+" values]\r\n":t+" : "+r[t]+"\r\n");return i},p.readFromBinaryFile=function(e){return c(e)},r=[],void 0!==(i=function(){return p}.apply(t,r))&&(e.exports=i)}).call(this)},function(e,t,n){var r,i;!function(){function n(e){var t=e.naturalWidth;if(t*e.naturalHeight>1048576){var n=document.createElement("canvas");n.width=n.height=1;var r=n.getContext("2d");return r.drawImage(e,1-t,0),0===r.getImageData(0,0,1,1).data[3]}return!1}function a(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);for(var a=i.getImageData(0,0,1,n).data,o=0,s=n,c=n;c>o;){0===a[4*(c-1)+3]?s=c:o=c,c=s+o>>1}var u=c/n;return 0===u?1:u}function o(e,t,n){var r=document.createElement("canvas");return s(e,r,t,n),r.toDataURL("image/jpeg",t.quality||.8)}function s(e,t,r,i){var o=e.naturalWidth,s=e.naturalHeight,u=r.width,l=r.height,f=t.getContext("2d");f.save(),c(t,f,u,l,r.orientation),n(e)&&(o/=2,s/=2);var d=1024,h=document.createElement("canvas");h.width=h.height=d;for(var g=h.getContext("2d"),p=i?a(e,o,s):1,m=Math.ceil(d*u/o),w=Math.ceil(d*l/s/p),v=0,A=0;s>v;){for(var y=0,b=0;o>y;)g.clearRect(0,0,d,d),g.drawImage(e,-y,-v),f.drawImage(h,0,0,d,d,b,A,m,w),y+=d,b+=m;v+=d,A+=w}f.restore(),h=g=null}function c(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-n,0)}}function u(e){if(window.Blob&&e instanceof Blob){var t=new Image,n=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!n)throw Error("No createObjectURL function found to create blob url");t.src=n.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,n=e.length;n>t;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}u.prototype.render=function(e,t,n){if(this.imageLoadListeners){var r=this;return void this.imageLoadListeners.push(function(){r.render(e,t,n)})}t=t||{};var i=this.srcImage,a=i.src,c=a.length,u=i.naturalWidth,l=i.naturalHeight,f=t.width,d=t.height,h=t.maxWidth,g=t.maxHeight,p=this.blob&&"image/jpeg"===this.blob.type||0===a.indexOf("data:image/jpeg")||a.indexOf(".jpg")===c-4||a.indexOf(".jpeg")===c-5;f&&!d?d=l*f/u<<0:d&&!f?f=u*d/l<<0:(f=u,d=l),h&&f>h&&(f=h,d=l*f/u<<0),g&&d>g&&(d=g,f=u*d/l<<0);var m={width:f,height:d};for(var w in t)m[w]=t[w];var v=e.tagName.toLowerCase();"img"===v?e.src=o(this.srcImage,m,p):"canvas"===v&&s(this.srcImage,e,m,p),"function"==typeof this.onrender&&this.onrender(e),n&&n()},r=[],void 0!==(i=function(){return u}.apply(t,r))&&(e.exports=i)}()},function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=C((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),x[j[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],a=0;64>a;a++){var o=C((i[a]*e+50)/100);1>o?o=1:o>255&&(o=255),P[j[a]]=o}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],c=0,u=0;8>u;u++)for(var l=0;8>l;l++)I[c]=1/(x[j[c]]*s[u]*s[l]*8),U[c]=1/(P[j[c]]*s[u]*s[l]*8),c++}function n(e,t){for(var n=0,r=0,i=new Array,a=1;16>=a;a++){for(var o=1;o<=e[a];o++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=a,r++,n++;n*=2}return i}function r(){v=n(W,N),A=n(H,X),y=n(z,q),b=n(Y,V)}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++)B[32767+r]=n,D[32767+r]=[],D[32767+r][1]=n,D[32767+r][0]=r;for(var i=-(t-1);-e>=i;i++)B[32767+i]=n,D[32767+i]=[],D[32767+i][1]=n,D[32767+i][0]=t-1+i;e<<=1,t<<=1}}function a(){for(var e=0;256>e;e++)G[e]=19595*e,G[e+256>>0]=38470*e,G[e+512>>0]=7471*e+32768,G[e+768>>0]=-11059*e,G[e+1024>>0]=-21709*e,G[e+1280>>0]=32768*e+8421375,G[e+1536>>0]=-27439*e,G[e+1792>>0]=-5329*e}function o(e){for(var t=e[0],n=e[1]-1;n>=0;)t&1<<n&&(L|=1<<M),n--,0>--M&&(255==L?(s(255),s(0)):s(L),M=7,L=0)}function s(e){T.push(E[e])}function c(e){s(e>>8&255),s(255&e)}function u(e,t){var n,r,i,a,o,s,c,u,l,f=0;for(l=0;8>l;++l){n=e[f],r=e[f+1],i=e[f+2],a=e[f+3],o=e[f+4],s=e[f+5],c=e[f+6],u=e[f+7];var d=n+u,h=n-u,g=r+c,p=r-c,m=i+s,w=i-s,v=a+o,A=a-o,y=d+v,b=d-v,S=g+m,C=g-m;e[f]=y+S,e[f+4]=y-S;var x=.707106781*(C+b);e[f+2]=b+x,e[f+6]=b-x,y=A+w,S=w+p,C=p+h;var P=.382683433*(y-C),I=.5411961*y+P,U=1.306562965*C+P,D=.707106781*S,B=h+D,R=h-D;e[f+5]=R+I,e[f+3]=R-I,e[f+1]=B+U,e[f+7]=B-U,f+=8}for(f=0,l=0;8>l;++l){n=e[f],r=e[f+8],i=e[f+16],a=e[f+24],o=e[f+32],s=e[f+40],c=e[f+48],u=e[f+56];var T=n+u,L=n-u,M=r+c,O=r-c,_=i+s,k=i-s,E=a+o,G=a-o,j=T+E,W=T-E,N=M+_,z=M-_;e[f]=j+N,e[f+32]=j-N;var q=.707106781*(z+W);e[f+16]=W+q,e[f+48]=W-q,j=G+k,N=k+O,z=O+L;var H=.382683433*(j-z),X=.5411961*j+H,Y=1.306562965*z+H,V=.707106781*N,K=L+V,Q=L-V;e[f+40]=Q+X,e[f+24]=Q-X,e[f+8]=K+Y,e[f+56]=K-Y,f++}var J;for(l=0;64>l;++l)J=e[l]*t[l],F[l]=J>0?J+.5|0:J-.5|0;return F}function l(){c(65504),c(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),c(1),c(1),s(0),s(0)}function f(e,t){c(65472),c(17),s(8),c(t),c(e),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1)}function d(){c(65499),c(132),s(0);for(var e=0;64>e;e++)s(x[e]);s(1);for(var t=0;64>t;t++)s(P[t])}function h(){c(65476),c(418),s(0);for(var e=0;16>e;e++)s(W[e+1]);for(var t=0;11>=t;t++)s(N[t]);s(16);for(var n=0;16>n;n++)s(z[n+1]);for(var r=0;161>=r;r++)s(q[r]);s(1);for(var i=0;16>i;i++)s(H[i+1]);for(var a=0;11>=a;a++)s(X[a]);s(17);for(var o=0;16>o;o++)s(Y[o+1]);for(var u=0;161>=u;u++)s(V[u])}function g(){c(65498),c(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0)}function p(e,t,n,r,i){var a,s=i[0],c=i[240];for(var l=u(e,t),f=0;64>f;++f)R[j[f]]=l[f];var d=R[0]-n;n=R[0],0==d?o(r[0]):(a=32767+d,o(r[B[a]]),o(D[a]));for(var h=63;h>0&&0==R[h];h--);if(0==h)return o(s),n;for(var g,p=1;h>=p;){for(var m=p;0==R[p]&&h>=p;++p);var w=p-m;if(w>=16){g=w>>4;for(var v=1;g>=v;++v)o(c);w&=15}a=32767+R[p],o(i[(w<<4)+B[a]]),o(D[a]),p++}return 63!=h&&o(s),n}function m(){for(var e=String.fromCharCode,t=0;256>t;t++)E[t]=e(t)}function w(e){if(0>=e&&(e=1),e>100&&(e=100),S!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),S=e}}var v,A,y,b,S,C=(Math.round,Math.floor),x=new Array(64),P=new Array(64),I=new Array(64),U=new Array(64),D=new Array(65535),B=new Array(65535),F=new Array(64),R=new Array(64),T=[],L=0,M=7,O=new Array(64),_=new Array(64),k=new Array(64),E=new Array(256),G=new Array(2048),j=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],N=[0,1,2,3,4,5,6,7,8,9,10,11],z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],q=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],H=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],Y=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],V=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){(new Date).getTime();t&&w(t),T=new Array,L=0,M=7,c(65496),l(),d(),f(e.width,e.height),h(),g();var r=0,i=0,a=0;L=0,M=7,this.encode.displayName="_encode_";for(var s,u,m,S,C,x,P,D,B,F=e.data,R=e.width,E=e.height,j=4*R,W=0;E>W;){for(s=0;j>s;){for(C=j*W+s,x=C,P=-1,D=0,B=0;64>B;B++)D=B>>3,P=4*(7&B),x=C+D*j+P,W+D>=E&&(x-=j*(W+1+D-E)),s+P>=j&&(x-=s+P-j+4),u=F[x++],m=F[x++],S=F[x++],O[B]=(G[u]+G[m+256>>0]+G[S+512>>0]>>16)-128,_[B]=(G[u+768>>0]+G[m+1024>>0]+G[S+1280>>0]>>16)-128,k[B]=(G[u+1280>>0]+G[m+1536>>0]+G[S+1792>>0]>>16)-128;r=p(O,I,r,v,y),i=p(_,U,i,A,b),a=p(k,U,a,A,b),s+=32}W+=8}if(M>=0){var N=[];N[1]=M+1,N[0]=(1<<M+1)-1,o(N)}if(c(65497),n){for(var z=T.length,q=new Uint8Array(z),H=0;z>H;H++)q[H]=T[H].charCodeAt();return T=[],(new Date).getTime(),q}var X="data:image/jpeg;base64,"+btoa(T.join(""));return T=[],(new Date).getTime(),X},function(){(new Date).getTime();e||(e=50),m(),r(),i(),a(),w(e),(new Date).getTime()}()}e.exports=n},function(e,t,n){function r(e,t){var n=this;if(!e)throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");t=t||{},n.defaults={width:null,height:null,fieldName:"file",quality:.7},n.file=e;for(var r in t)t.hasOwnProperty(r)&&(n.defaults[r]=t[r]);return this.init()}function i(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new o.Blob([r.buffer],{type:n})}n.p=function(e){var t=null;return t=e?[].filter.call(document.scripts,function(t){return-1!==t.src.indexOf(e)})[0]:document.scripts[document.scripts.length-1],t?t.src.substr(0,t.src.lastIndexOf("/")):null}("lrz")+"/",window.URL=window.URL||window.webkitURL;var a=n(1),o=n(4),s=n(5),c=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e),n=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e);return{oldIOS:!!t&&+t.pop()<8,oldAndroid:!!n&&+n.pop().substr(0,3)<4.5,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}}(navigator.userAgent);r.prototype.init=function(){var e=this,t=e.file,n="string"==typeof t,r=/^data:/.test(t),s=new Image,c=document.createElement("canvas"),u=n?t:URL.createObjectURL(t);if(e.img=s,e.blob=u,e.canvas=c,e.fileName=n?r?"base64.jpg":t.split("/").pop():t.name,!document.createElement("canvas").getContext)throw new Error("浏览器不支持canvas");return new a(function(n,a){s.onerror=function(){var e=new Error("加载图片文件失败");throw a(e),e},s.onload=function(){e._getBase64().then(function(e){if(e.length<10){var t=new Error("生成base64失败");throw a(t),t}return e}).then(function(r){var a=null;"object"==typeof e.file&&r.length>e.file.size?(a=new FormData,t=e.file):(a=new o.FormData,t=i(r)),a.append(e.defaults.fieldName,t,e.fileName.replace(/\..+/g,".jpg")),n({formData:a,fileLen:+t.size,base64:r,base64Len:r.length,origin:e.file,file:t});for(var s in e)e.hasOwnProperty(s)&&(e[s]=null);URL.revokeObjectURL(e.blob)})},!r&&(s.crossOrigin="*"),s.src=u})},r.prototype._getBase64=function(){var e=this,t=e.img,n=e.file,r=e.canvas;return new a(function(i){try{s.getData("object"==typeof n?n:t,function(){e.orientation=s.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=r.getContext("2d"),r.width=e.resize.width,r.height=e.resize.height,e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,r.width,r.height),c.oldIOS?e._createBase64ForOldIOS().then(i):e._createBase64().then(i)})}catch(e){throw new Error(e)}})},r.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,r=e.canvas,i=e.defaults,o=e.orientation;return new a(function(e){!function(){var a=[n(6)];(function(n){var a=new n(t);"5678".indexOf(o)>-1?a.render(r,{width:r.height,height:r.width,orientation:o}):a.render(r,{width:r.width,height:r.height,orientation:o}),e(r.toDataURL("image/jpeg",i.quality))}).apply(null,a)}()})},r.prototype._createBase64=function(){var e=this,t=e.resize,r=e.img,i=e.canvas,o=e.ctx,s=e.defaults;switch(e.orientation){case 3:o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;case 2:o.translate(t.width,0),o.scale(-1,1),o.drawImage(r,0,0,t.width,t.height);break;case 4:o.translate(t.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 5:o.translate(t.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 7:o.translate(t.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;default:o.drawImage(r,0,0,t.width,t.height)}return new a(function(e){c.oldAndroid||c.mQQBrowser||!navigator.userAgent?function(){var t=[n(7)];(function(t){var n=new t,r=o.getImageData(0,0,i.width,i.height);e(n.encode(r,100*s.quality))}).apply(null,t)}():e(i.toDataURL("image/jpeg",s.quality))})},r.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,r=n.width,i=n.height,a=e.orientation,o={width:t.width,height:t.height};if("5678".indexOf(a)>-1&&(o.width=t.height,o.height=t.width),o.width<r||o.height<i)return o;var s=o.width/o.height;for(r&&i?s>=r/i?o.width>r&&(o.width=r,o.height=Math.ceil(r/s)):o.height>i&&(o.height=i,o.width=Math.ceil(i*s)):r?r<o.width&&(o.width=r,o.height=Math.ceil(r/s)):i&&i<o.height&&(o.width=Math.ceil(i*s),o.height=i);o.width>=3264||o.height>=2448;)o.width*=.8,o.height*=.8;return o},window.lrz=function(e,t){return new r(e,t)},window.lrz.version="4.9.40",e.exports=window.lrz}])})},OWRb:function(e,t,n){"use strict";function r(e){n("sSKt")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("h/oI"),a=n("BULn"),o=n("46Yf"),s=r,c=o(i.a,a.a,!1,s,"data-v-1e192ac7",null);t.default=c.exports},"h/oI":function(e,t,n){"use strict";var r=n("JpXR"),i=n.n(r);t.a={data:function(){return{imgUrls:"",urlArr:[],isPhoto:!0,btnTitle:"",isModify:!1,previewImg:"",isPreview:!1}},mounted:function(){var e=localStorage.getItem("avatar");null!==e&&(this.imgUrls=e)},watch:{imgUrls:"toggleAddPic"},methods:{showMsg:function(e){this.$toast.center(e)},toggleAddPic:function(){var e=this;null===e.imgUrls&&""===e.imgUrls||(e.imgUrls.length>=1?e.isPhoto=!1:e.isPhoto=!0)},addPic:function(){return $("input[type=file]").trigger("click"),!1},onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&this.createImage(t,e)},createImage:function(e,t){var n=this;i()(e[0],{width:750}).then(function(e){return n.imgUrls=e.base64,localStorage.removeItem("avatar"),localStorage.setItem("user-avatar",n.imgUrls),e}).always(function(){t.target.value=null})}}}},k4Wq:function(e,t,n){t=e.exports=n("BkJT")(!0),t.i(n("3fXU"),""),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"UploadAvator.vue",sourceRoot:""}])},sSKt:function(e,t,n){var r=n("k4Wq");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("8bSs")("48ec1adf",r,!0)}});
//# sourceMappingURL=16.7128bcb29132e44c1f28.js.map