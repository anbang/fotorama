this["$"] = this["$"] || {};
this["$"]["Fotorama"] = this["$"]["Fotorama"] || {};
this["$"]["Fotorama"]["jst"] = this["$"]["Fotorama"]["jst"] || {};

this["$"]["Fotorama"]["jst"]["compiled.js"] = function(v) {
var __t, __p = '', __e = _.escape;
__p += 'this["$"] = this["$"] || {};\nthis["$"]["Fotorama"] = this["$"]["Fotorama"] || {};\nthis["$"]["Fotorama"]["jst"] = this["$"]["Fotorama"]["jst"] || {};\n\nthis["$"]["Fotorama"]["jst"]["style"] = function(v) {\nvar __t, __p = \'\', __e = _.escape;\n__p += \'.fotorama\' +\n((__t = ( v.stamp )) == null ? \'\' : __t) +\n\' .fotorama__nav--thumbs .fotorama__nav__frame {\\n  padding: \' +\n((__t = ( v.thumbMargin )) == null ? \'\' : __t) +\n\'px \' +\n((__t = ( v.thumbMargin / 2 )) == null ? \'\' : __t) +\n\'px;\\n  width: \' +\n((__t = ( v.thumbWidth )) == null ? \'\' : __t) +\n\'px;\\n  height: \' +\n((__t = ( v.thumbHeight )) == null ? \'\' : __t) +\n\'px;\\n}\\n.fotorama\' +\n((__t = ( v.stamp )) == null ? \'\' : __t) +\n\' .fotorama__thumb {\\n  width: \' +\n((__t = ( v.thumbWidth )) == null ? \'\' : __t) +\n\'px;\\n  height: \' +\n((__t = ( v.thumbHeight )) == null ? \'\' : __t) +\n\'px;\\n}\\n.fotorama\' +\n((__t = ( v.stamp )) == null ? \'\' : __t) +\n\' .fotorama__thumb-border {\\n  width: \' +\n((__t = ( v.thumbWidth - v.thumbMargin * 2 )) == null ? \'\' : __t) +\n\'px;\\n  height: \' +\n((__t = ( v.thumbHeight - v.thumbMargin * 2 )) == null ? \'\' : __t) +\n\'px;\\n  border-width: \' +\n((__t = ( v.thumbMargin )) == null ? \'\' : __t) +\n\'px;\\n  margin-top: \' +\n((__t = ( v.thumbMargin )) == null ? \'\' : __t) +\n\'px;\\n  margin-left: \' +\n((__t = ( - v.thumbWidth / 2 + v.thumbMargin / 2 )) == null ? \'\' : __t) +\n\'px;\\n}\\n.fotorama\' +\n((__t = ( v.stamp )) == null ? \'\' : __t) +\n\' .fotorama__wrap--vertical .fotorama__nav--thumbs {\\n  width: \' +\n((__t = ( v.thumbWidth + v.thumbMargin * 2 )) == null ? \'\' : __t) +\n\'px;\\n}\\n.fotorama\' +\n((__t = ( v.stamp )) == null ? \'\' : __t) +\n\' .fotorama__wrap--vertical .fotorama__nav__frame {\\n  padding: \' +\n((__t = ( v.thumbMargin / 2 )) == null ? \'\' : __t) +\n\'px \' +\n((__t = ( v.thumbMargin )) == null ? \'\' : __t) +\n\'px;\\n}\\n.fotorama\' +\n((__t = ( v.stamp )) == null ? \'\' : __t) +\n\' .fotorama__wrap--vertical .fotorama__thumb-border {\\n  margin-left: \' +\n((__t = ( v.thumbMargin )) == null ? \'\' : __t) +\n\'px;\\n  margin-top: \' +\n((__t = ( - v.thumbHeight / 2 + v.thumbMargin / 2 )) == null ? \'\' : __t) +\n\'px;\\n}\\n\';\nreturn __p\n};';
return __p
};

this["$"]["Fotorama"]["jst"]["style"] = function(v) {
var __t, __p = '', __e = _.escape;
__p += '.fotorama' +
((__t = ( v.stamp )) == null ? '' : __t) +
' .fotorama__nav--thumbs .fotorama__nav__frame {\n  padding: ' +
((__t = ( v.thumbMargin )) == null ? '' : __t) +
'px ' +
((__t = ( v.thumbMargin / 2 )) == null ? '' : __t) +
'px;\n  width: ' +
((__t = ( v.thumbWidth )) == null ? '' : __t) +
'px;\n  height: ' +
((__t = ( v.thumbHeight )) == null ? '' : __t) +
'px;\n}\n.fotorama' +
((__t = ( v.stamp )) == null ? '' : __t) +
' .fotorama__thumb {\n  width: ' +
((__t = ( v.thumbWidth )) == null ? '' : __t) +
'px;\n  height: ' +
((__t = ( v.thumbHeight )) == null ? '' : __t) +
'px;\n}\n.fotorama' +
((__t = ( v.stamp )) == null ? '' : __t) +
' .fotorama__thumb-border {\n  width: ' +
((__t = ( v.thumbWidth - v.thumbMargin * 2 )) == null ? '' : __t) +
'px;\n  height: ' +
((__t = ( v.thumbHeight - v.thumbMargin * 2 )) == null ? '' : __t) +
'px;\n  border-width: ' +
((__t = ( v.thumbMargin )) == null ? '' : __t) +
'px;\n  margin-top: ' +
((__t = ( v.thumbMargin )) == null ? '' : __t) +
'px;\n  margin-left: ' +
((__t = ( - v.thumbWidth / 2 + v.thumbMargin / 2 )) == null ? '' : __t) +
'px;\n}\n.fotorama' +
((__t = ( v.stamp )) == null ? '' : __t) +
' .fotorama__wrap--vertical .fotorama__nav--thumbs {\n  width: ' +
((__t = ( v.thumbWidth + v.thumbMargin * 2 )) == null ? '' : __t) +
'px;\n}\n.fotorama' +
((__t = ( v.stamp )) == null ? '' : __t) +
' .fotorama__wrap--vertical .fotorama__nav__frame {\n  padding: ' +
((__t = ( v.thumbMargin / 2 )) == null ? '' : __t) +
'px ' +
((__t = ( v.thumbMargin )) == null ? '' : __t) +
'px;\n}\n.fotorama' +
((__t = ( v.stamp )) == null ? '' : __t) +
' .fotorama__wrap--vertical .fotorama__thumb-border {\n  margin-left: ' +
((__t = ( v.thumbMargin )) == null ? '' : __t) +
'px;\n  margin-top: ' +
((__t = ( - v.thumbHeight / 2 + v.thumbMargin / 2 )) == null ? '' : __t) +
'px;\n}\n';
return __p
};