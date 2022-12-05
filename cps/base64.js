// https://ko.wikipedia.org/wiki/%EB%B2%A0%EC%9D%B4%EC%8A%A464

(function main() {
  const base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let bit = ([...char]) =>
    char.map((v) => v.charCodeAt(0).toString(2).padStart(8, 0)).join("");
  let original =
    "Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.";

  let encoded = "";
  for (let i = 0; i < original.length; i += 3) {
    let str = original.slice(i, i + 3);
    let bit_pattern = bit([...str]);

    if (bit_pattern.length % 6 !== 0) {
      let cnt = original.length - i;
      let padding = 0;
      if (cnt === 1) padding = 4;
      if (cnt === 2) padding = 2;
      bit_pattern = bit_pattern.padEnd(bit_pattern.length + padding, 0);
    }

    for (let j = 1; j <= 4; ++j) {
      let index = parseInt(bit_pattern.slice((j - 1) * 6, j * 6), 2);
      if (isNaN(index)) break;
      encoded += base64[index];
    }
  }
  encoded += "=";
  console.log(encoded);
})();
