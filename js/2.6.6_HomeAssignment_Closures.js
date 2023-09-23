function counter() {
    var count =1;
   
    function add(count) {
        count += 1;

        return count   
    }
   console.log(`original count: ${count}, new count: ${add(count)}`); 
}

counter();