function search() {
    var searchQuery = document.getElementById("myText").value;
    if (searchQuery == undefined || searchQuery == null || searchQuery == "" || searchQuery == NaN) {
        searchQuery = "google";
        return window.location.href = `http://www.google.com/search?q=${searchQuery}`;
    } else {
        return window.location.href = `http://www.google.com/search?q=${searchQuery}`;
    }
}