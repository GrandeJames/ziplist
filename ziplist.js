function ziplist(list1, list2) {
  let combined = [];

  for (let i = 0; i < list1.length; i++) {
    combined.push(`${list1[i]}`);
    combined.push(`${list2[i]}`);
  }
  return combined;
}

