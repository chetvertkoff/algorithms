// concurrent promise

const tasks = [
  new Promise((r) => {setTimeout(() => {r('1')}, 300)}),
  new Promise((r) => {setTimeout(() => {r('2')}, 200)}),
  new Promise((r) => {setTimeout(() => {r('3')}, 1000)}),
  new Promise((r) => {setTimeout(() => {r('4')}, 100)}),
  new Promise((r, rej) => {setTimeout(() => {rej('5')}, 350)}),
]

const all = (tasks, limit) => {
  let index = 0
  let runningTask = 0
  const result = []
 
  const solve = (r) => {    
    while(index < tasks.length && runningTask < limit) {
      const i = index
      const task = tasks[i]
      task
       .then(data => {
          result[i] = data
        })
       .catch(err => result[i] = err)
       .finally(() => {
          runningTask--
          if(index === tasks.length && !runningTask) return r(result)
          solve(r)
       })
      runningTask++
      index++
    }
  }
  
 
  return new Promise((r) => {
    solve(r)
  })
}


all(tasks, 2).then((data) => {console.log(data)})
