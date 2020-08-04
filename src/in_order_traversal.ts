const treeify = require('treeify');
// Assumption . Every node value is of number type . To Run ts-node src/in_order_traversal.ts
class Nodes {
    val: number;
    right:number;
    left:number;
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    root:any;
    constructor() {
        this.root = null;
    }
    create(val:any) {
        const newNode = new Nodes(val);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        const addSide = side => {
            if(!current[side]) {
                current[side] = newNode;
                return this;
            }
            current = current[side];
        }
        while(true) {
            if(val === current.val) return this;
            if(val < current.val) addSide('left');
            else addSide('right')           
        }
    }
}

const tree = new BST();
tree.create(1);
tree.create(2);
tree.create(3);
tree.create(4);
tree.create(5);
tree.create(6);
tree.create(7);
tree.create(8);
console.log("Printing the Tree ==============================")
console.log(JSON.stringify(tree.root))
console.log(
    treeify.asTree(tree.root, true)
 );
console.log("End of Program =================================")