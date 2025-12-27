

function _slicedToArray(arr, i) {
	return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	let n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (let i = 0, arr2 = new Array(len); i < len; i++)
		arr2[i] = arr[i];

	return arr2;
}

function _iterableToArrayLimit(r, l) {
	let t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		let e, n, i, u, a = [], f = !0, o = !1;
		try {
			if (i = (t = t.call(r)).next, 0 === l) {
				if (Object(t) !== t) return;
				
				f = !1;
			} else {
				for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0)
					;
			}
		} catch (r) {
			o = !0, n = r;
		} finally {
			try {
				if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
					return;
			} finally {
				if (o) throw n;
			}
		}
		
		return a;
	}
}

function _arrayWithHoles(arr) {
	if (Array.isArray(arr)) return arr;
}

const patternReplacementArray = [{
  h6: [/^[ \t]*######[ \t](.+$)/gm, "<h6>$1</h6>"]
}, {
  h5: [/^[ \t]*#####[ \t](.+$)/gm, "<h5>$1</h5>"]
}, {
  h4: [/^[ \t]*####[ \t](.+$)/gm, "<h4>$1</h4>"]
}, {
  h3: [/^[ \t]*###[ \t](.+$)/gm, "<h3>$1</h3>"]
}, {
  h2: [/^[ \t]*##[ \t](.+$)/gm, "<h2>$1</h2>"]
}, {
  h1: [/^[ \t]*#[ \t](.+$)/gm, "<h1>$1</h1>"]
}, {
  hr: [/(?<=\n|^)---(?=\n|$)/, "<hr>"]
}, {
  strong: [/((?:\*|_){2})(.*?)\1/g, "<strong>$2</strong>"]
}, {
  em: [/(\*|_)(.*?)\1/g, "<em>$2</em>"]
}, {
  img: [/!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g, '<img alt="$1" src="$2">']
}, {
  a: [/\[(.*?)\]\(\s*(.*?)\s*\)/g, '<a href="$2">$1</a>']
}, {
  blockquote1: [/^[ \t]*> ([^\n]+?)$/gm, "<blockquote>$1</blockquote>\n"]
}, {
  blockquote2: [/(?<=<blockquote>)(.+?)<\/blockquote>\n\n^([^<\n]+?)$/gm, "$1 $2</blockquote>\n"]
}, {
  ul: [/(?:^[-*+]\s+.*?$\n)+\s*?/gm, "<ul>\n$&</ul>"]
}, {
  ol: [/(?:^\d*\.\s+?\w.*?$\n)+\s*?/gm, "<ol>\n$&</ol>"]
}, {
  uli: [/^[-*+]\s+(.*?$)\n/gm, "<li>$1</li>\n"]
}, {
  oli: [/^\d*\.\s+?(.*?$)\n/gm, "<li>$1</li>\n"]
}, {
  p1: [/^([^<>\s][\s\S]*?)(?=\n\s*$)/gm, "<p>$1</p>"]
}, {
  p2: [/^\w*?(?:<strong>|<em>).+(?:<\/strong>|<\/em>)\s*\w*?[ \t]*$/gm, "<p>$&</p>"]
}];

var markdownInput = document.getElementById('markdown-input');
var _LPC3 = 1;
var _LP3 = Date.now();
var convertMarkdown = function convertMarkdown() {
  if (_LPC3++ % 2000 === 0 && Date.now() - _LP3 > 1500) {
    (function (e) {
      console.log("Potential infinite loop detected on line ".concat(e, ". Tests may be failing because of this."));
    })(24, 0);
    return;
  }
  var markdown = markdownInput.value;
  var matchUList = false;
  var matchOList = false;
  patternReplacementArray.forEach(function (item) {
    var _Object$keys = Object.keys(item),
      _Object$keys2 = _slicedToArray(_Object$keys, 1),
      key = _Object$keys2[0];
    var _Object$values$ = _slicedToArray(Object.values(item)[0], 2),
      pattern = _Object$values$[0],
      replacement = _Object$values$[1];
    if (key === "blockquote2") {
      var _LPC11 = 1;
      var _LP11 = Date.now();
      while (markdown.match(pattern)) {
        if (_LPC11++ % 2000 === 0 && Date.now() - _LP11 > 1500) {
          (function (e) {
            console.log("Potential infinite loop detected on line ".concat(e, ". Tests may be failing because of this."));
          })(32, 12);
          break;
        }
        markdown = markdown.replace(pattern, replacement);
      }
    } else if (key === "ul") {
      if (markdown.match(pattern)) {
        matchUList = true;
        markdown = markdown.replace(pattern, replacement);
      }
    } else if (key === "ol") {
      if (markdown.match(pattern)) {
        matchOList = true;
        markdown = markdown.replace(pattern, replacement);
      }
    } else if (key === "uli" && !matchUList) {
      return;
    } else if (key === "oli" && !matchOList) {
      return;
    } else {
      markdown = markdown.replace(pattern, replacement);
    }
  });
  return markdown;
};
markdownInput.addEventListener('input', function () {
  var html = convertMarkdown();
  var out = document.getElementById('html-output');
  var preview = document.getElementById('preview');
  out.textContent = html;
  preview.innerHTML = html;
});