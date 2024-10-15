class Queue {
  #queue = []
  #processTask
  #paralleledTasks
  #whenEmpty
  
  constructor(processTask, paralleledTasks, whenEmpty) {
    this.#processTask = processTask
    this.#paralleledTasks = paralleledTasks
    this.#whenEmpty = whenEmpty
  }
  
  add(task) {
    this.#queue.push(task)
  }
  
  async #runTasks() {
    let task
    while(task = this.#queue.shift()) {
      console.log(task)
      await new Promise((r) => {
        this.#processTask(task, r)
      })
    }
  }
  
  
  async loop() {
    await Promise.all(new Array(this.#paralleledTasks).fill(0).map(this.#runTasks.bind(this)))
    this.#whenEmpty()
  }
}


const processTask = (task, resolve) => {
    const workTime = 500 + Math.floor(Math.random() * 500)
    setTimeout(() => {
        resolve()
    }, workTime)
}


const paralleledTasks = 2
const whenEmpty = () => console.log('Queue is empty')
const queue = new Queue(processTask, paralleledTasks, whenEmpty)
queue.add('task 1')
queue.add('task 2')
queue.add('task 3')
queue.loop()
* paralleledTasks > 1 вывод может быть
* не последовательным как тут: сначала
* успела выполниться task 2, а потом task 1
*/
