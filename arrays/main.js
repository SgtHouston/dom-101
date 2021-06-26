const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
]

// Find list in HTML using ID
const linkList = document.getElementById('linkList')

// Loop over addresses
for (let count = 0; count < addresses.length; count ++) {
    // create a list item to hold addresses
    const addressli = document.createElement('li')
    // append list items to list
    linkList.appendChild(addressli)
    // create anchor tags for list items
    const link = document.createElement('a')
    // append links to the list items
    addressli.appendChild(link)
    // add text to list items 
    link.textContent = addresses[count]
    // add href links to each item 
    link.setAttribute('href', addresses[count])
    

}

console.log(linkList)


