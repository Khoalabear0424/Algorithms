# Daily Journal

## 04/05/19

### `isTreeSame()`
- Recursion is one of the most efficient ways to traverse a tree. If checking to see if two trees are identical, make sure to traverse the two trees at the same time and check the value at each node.
- No queues or arrays are needed to log these values as we are only checking for equality.

## 4/14/19

### Binary Heaps
Definition:
- MaxBinaryHeap Parent nodes are always larger than the child notes
- MinBinaryHeap Parent nodes are always smaller than the child notes
- Left children are filled out first
- No implied order between sibling nodes

Why do we need to know this?
- Binary heaps are used to implement Priority Qieues, very commonly used data structures
- A priority queue is a queue that stores data based on importance

#### Structure Displayed in An Array
![Heap Structure](/images/heap.png)
- For any index onf an array n...
    - The left child is sotred at 2n+1
    - The right child is sotred at 2n+2


### Priority Queue

Definition:
- A data structure where each element has a priority.  Elements with higher priorities are served before elements with lower priorities.

### Arrays and Strings

- When using `for(let in in str)`, `i` is actually a `string` not an `int` !!
    * If you try to do `str[i+1]`, `i+1` will actually be concatenated!!

