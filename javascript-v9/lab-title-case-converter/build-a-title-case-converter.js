function titleCase(str) {
    return str.toLowerCase().split(" ").map(item => {
      const charInt = item.charCodeAt(0);
      if (charInt >= 0x61 && charInt <= 0x79) {
        return String.fromCharCode(charInt - 0x20) + item.slice(1);
      } else {
        return item;
      }
    }).join(" ");
  }