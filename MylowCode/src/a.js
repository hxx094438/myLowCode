function totree(pid, arr) {
  const res = []
    for (let i = 0; i < arr.length; i++) {
      item = arr[i]
      if (item.pid === pid) {
        item.children = totree(item.id)
      }
    res.push(item)
  }

  return res
}