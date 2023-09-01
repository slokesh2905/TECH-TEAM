
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Handle the data here
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function displayData(posts) {
    const postList = document.getElementById('post-list');


    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        postList.appendChild(listItem);
    });
}


fetchData();
