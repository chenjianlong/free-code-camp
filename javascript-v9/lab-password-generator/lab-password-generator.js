function generatePassword(len) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let res = "";
    for (let i = 0; i < len; ++i) {
      res += charset[Math.floor(Math.random() * charset.length)];
    }
  
    return res;
  }
  
  const password = generatePassword(8);
  console.log(`Generated password: ${password}`);