function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("ATCGATCG"));
console.log(DNAtoRNA(""));
