function sortAndDisplay() {
    var input = document.getElementById("inputArray").value;
    
    // Split the input string into an array and convert to numbers
    var array = input.split(',').map(Number);

    for (var i = 1; i < array.length; i++) {
        var current = array[i];
        var j = i - 1;

        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }

    // Display the sorted array on the HTML page
    document.getElementById("result").innerText = "Sorted array: " + array.join(', ');

    // Display the sorted array in the console
    console.log("Sorted array:", array);

    
}
