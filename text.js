const sampleText = `
    Emails: user@example.com, firstname.lastname@company.co.uk
    URLs: https://www.example.com, http://subdomain.example.org/page
    Phones: (123) 456-7890, 123-456-7890, 123.456.7890
    Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456
    Time: 14:30, 2:30 PM
    HTML: <p>, <div class="example">, <img src="image.jpg" alt="description">
    Hashtags: #example, #ThisIsAHashtag
    Currency: $19.99, $1,234.56 
`;

console.log("Emails:", extractEmails(sampleText));
console.log("URLs:", extractURLs(sampleText));
console.log("Phone Numbers:", extractPhoneNumbers(sampleText));
console.log("Credit Cards:", extractCreditCards(sampleText));
console.log("Time:", extractTime(sampleText));
console.log("HTML Tags:", extractHTMLTags(sampleText));
console.log("Hashtags:", extractHashtags(sampleText));
console.log("Currency:", extractCurrency(sampleText));
