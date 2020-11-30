const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (records) => {
  let wins = records.find(record => record.result === "W")
  if (!!wins) {
    return wins.year
  } else {
    return undefined
  }
}