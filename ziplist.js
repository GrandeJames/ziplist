function ziplist(list1, list2) {
  const combined = [];

  for (let i = 0; i < list1.length; i++) {
    combined.push(`${list1[i]}`);
    combined.push(`${list2[i]}`);
  }
  return combined;
}

console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));
