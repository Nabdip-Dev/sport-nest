import MD5 from "crypto-js/md5";

export const getGravatar = (email) => {
  const hash = MD5(email.trim().toLowerCase()).toString();
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
};