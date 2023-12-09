class Node{

    constructor(elem){
        this.elem = elem;
        this.left=null;
        this.right = null;
    }
}

function treeFromArr(arr,i=1){
    let root = null;
    if(i<arr.length){
        if (arr[i]!=null){
            
            root = new Node(arr[i]);
            root.left = treeFromArr(arr,2*i);
            root.right = treeFromArr(arr,2*i+1);
        }
    }
    return root;
    
}

function inOrder(root){

    if (root!= null){
        inOrder(root.left);
        console.log(`${root.elem} myName.`);
        inOrder(root.right);
    }
}
arr = [null,"A","B","C","D","E","F","G","H",null,null,null,"I","J",null,"K"];
root = treeFromArr(arr);
inOrder(root);