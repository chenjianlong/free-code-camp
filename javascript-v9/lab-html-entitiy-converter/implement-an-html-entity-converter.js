function convertHTML(str) {
    let res = "";
    for (let char of str) {
      switch (char) {
      case '&':
        res += '&amp;';
        break;
      case '<':
        res += '&lt;';
        break;
      case '>':
        res += '&gt;';
        break;
      case '"':
        res += '&quot;';
        break;
      case '\'':
        res += '&apos;';
        break;
      default:
        res += char;
      }
    }
  
    return res;
  }