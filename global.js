var availableTags = [];
var azureSearchQueryApiKey = "5D56792F3E60D4E1710894D659AB9BF3";	// this is a query key for demo purposes
var baseSearchURL = "https://penelopesearchpage.azurewebsites.net/indexes/azureblob-index";

var facetFiltersString = [];
var facetFiltersCollection = [];
var currentPage = 1;
var documentsToRetrieve = 15;	// This is the maximum documents to retrieve / page
