const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }
    
    append(data) {
        var node = new Node();
        node.data = data;
       
        
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        
        this.length++;
        
        //return node;
        return this;
    }
    
    head() {
      return this._head.data;  
    }
    
    tail() {
        return this._tail.data;
    }
    
    at(index) {
        var currentNode = this._head,
            length = this.length,
            counter = 0,
            message = {failure : 'Non-existent node'};
           
        
        if (length === 0 || index < 0 || index > length) {
            throw new Error(message.failure);
        }
        
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode.data;
    }
    
    deleteAt(index) {
        var currentNode = this._head,
            length = this.length,
            counter = 0,
            message = {
                failure : 'Non-existent node in this list',
                success : 'Current node was deleted successfully'
                },
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null,
            afterNodeToDelete = null;
        
        if (length === 0 || index < 0 || index > length) {
            throw new Error(message.failure);
        }
        
        if (index === 0) {
            this._head = currentNode.next;
            
            if (this._head) {
                this._head.prev = null;
            } else {
                this._tail = null;
            }
            
        } else if (index === this.length) {
            this._tail = this._tail.prev;
            this._tail.next = null; 
            
        } else {   
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            
            beforeNodeToDelete = currentNode.prev;
            nodeToDelete = currentNode;
            afterNodeToDelete = currentNode.next;
            
            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
        }
        
      this.length--;
    
      //return message.success;
      return this;
        
        
    }
    
       insertAt(index, data) {
        var node = new Node(),
            currentNode = this._head,
            length = this.length,
            counter = 0,
            beforeNodeToInsert = null,
            afterNodeToInsert = null,
            message = {
                failure : 'Wrong index!',
                success : 'Current node was inserted successfully'
                }
           
           node.data = data;
           
       
        
        if (index < 0 || index > length) {
            throw new Error(message.failure);
        }
        
        if (index === 0) {
            if (this.length) {
                this._head = node;
                this._head.next = currentNode;
                currentNode.prev = this._head;
               
            } else {
                this._head = node;
                this._tail = node;
            }
            
        } else if (index === length) {
            currentNode = this._tail;
            this._tail.next = node;
            node.prev = currentNode;
            this._tail = node;
            
        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            
            beforeNodeToInsert = currentNode.prev;
            afterNodeToInsert = currentNode;
            
            beforeNodeToInsert.next = node;
            afterNodeToInsert.prev = node;
            node.next = afterNodeToInsert;
            node.prev = beforeNodeToInsert;
        }
        
           
        this.length++;
           
        //return message.success;
        return this;
    }
    
    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    
     clear() {
        
        if (this.length) {
            this._head.data = null;
            this._tail.data = null;
            this.length = 0;
        } else {
            this._head = null;
            this._tail = null;
        }
        
    return this;
        
    }
    
     reverse() {
        var currentNode = this._head,
            temp = null;
        
        this._tail = this._head;
        
        while (currentNode != null) {
            temp = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = temp;
            
            if (currentNode.prev == null) {
                this._head = currentNode;
            }
            
            currentNode = currentNode.prev;
        }
    return this;
        
    }

    indexOf(data) {
        var node = new Node(),
            currentNode = this._head,
            counter = 0;
           
        node.data = data;
        
        while (currentNode.data !== node.data) {
            currentNode = currentNode.next;
            if (currentNode === null) {
              counter = -1;
              break;  
            }
            counter++;
        }
        
        return counter;
             
        
    }

}

module.exports = LinkedList;
