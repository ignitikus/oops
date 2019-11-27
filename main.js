const Stack = function(items) {
  return {
    items: [],

    add: function(item){
      this.items.push(item)
      return this.items
    },

    remove: function(){
      return this.items.splice(this.items.length-1,1)[0]
    },

    peek: function(){
      return this.items[this.items.length-1]
    }
  }
}

const Queue = function() {
  return {
    items: [],

    add: function(item){
      this.items.push(item)
      return this.items
    },

    remove: function(){
      return this.items.splice(0,1)[0]
    },

    peek: function(){
      return this.items[0]
    }
  }
}

module.exports = {
  Stack,
  Queue,
}