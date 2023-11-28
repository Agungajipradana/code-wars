function DNAToRNA(dna) {
  let rna = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }

  return rna;
}

console.log(DNAToRNA("GCAT")); // Output: 'GCAU'
console.log(DNAToRNA("ATCGATCG")); // Output: 'AUCGAUCG'
console.log(DNAToRNA("")); // Output: ""

// Menggunakan regex
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("GCAT")); // Output: 'GCAU'
console.log(DNAtoRNA("ATCGATCG")); // Output: 'AUCGAUCG'
console.log(DNAtoRNA("")); // Output: ""
