class MinStack {
  private stack: number[]
  private min: number
  private top_index: number

  constructor() {
    this.stack = []
    this.min = Infinity
    this.top_index = -1
  }

  push(val: number): void {
    this.stack.push(val)
    this.min = Math.min(this.min, val)
    this.top_index++
  }

  pop(): void {
    const val = this.stack.pop()
    if (val === this.min) {
      this.min = Math.min(...this.stack)
    }
    this.top_index--
  }

  top(): number {
    return this.stack[this.top_index]
  }

  getMin(): number {
    return this.min
  }
}

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(`obj.getMin()`, obj.getMin())
obj.pop()
console.log(`obj.top()`, obj.top())
