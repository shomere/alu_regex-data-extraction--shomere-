// Email Extraction.
function extractEmails(text) {
    const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(pattern) || [];
}
// URL Extraction.
function extractURLs(text) {
    const pattern = /https?:\/\/(?:www\.)?\S+\.\S+/g;
    return text.match(pattern) || [];
}
// Phone number extraction.
function extractPhoneNumbers(text) {
    const pattern = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    return text.match(pattern) || [];
}
// Credit Card Number Extraction.
function extractCreditCards(text) {
    const pattern = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;
    return text.match(pattern) || [];
}
// Time extraction.
function extractTime(text) {
    const pattern = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?:\s?[APap][Mm])?\b/g;
    return text.match(pattern) || [];
}
// HTML Tag Extraction.
function extractHTMLTags(text) {
    const pattern = /#\w+/g;
    return text.match(pattern) || [];
}
//Currency Amount Extraction.
function extractCurrency(text) {
    const pattern = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
    return text.match(pattern) || [];
}
