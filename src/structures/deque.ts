type DequeElement<T> = {
  value: T;
  next?: DequeElement<T>;
  previous?: DequeElement<T>;
};

export class Deque<T> {
  front?: DequeElement<T>;
  back?: DequeElement<T>;
  length = 0;

  constructor(values?: T[]) {
    if (values?.length) {
      values.forEach((value) => this.push_back(value));
    } else {
      this.back = this.front = undefined;
    }
  }

  push_back(value: T) {
    if (!this.front) {
      this.back = this.front = { value };
    } else {
      const new_element = { value, previous: this.back };
      this.back.next = new_element;
      this.back = new_element;
    }
    this.length++;
  }

  push_front(value: T) {
    if (!this.front) {
      this.front = this.back = { value };
    } else {
      const new_element = { value, next: this.front };
      this.front.previous = new_element;
      this.front = new_element;
    }
    this.length++;
  }

  pop_back(): T | undefined {
    if (!this.back) return undefined;

    const value = this.back.value;
    if (!this.back.previous) {
      this.front = this.back = undefined;
    } else {
      this.back.previous.next = undefined;
      this.back = this.back.previous;
    }
    this.length--;
    return value;
  }

  pop_front() {
    if (!this.front) return undefined;

    const value = this.front.value;
    if (!this.front.next) {
      this.front = this.back = undefined;
    } else {
      this.front.next.previous = undefined;
      this.front = this.front.next;
    }
    this.length--;
    return value;
  }
}
