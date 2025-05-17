searchWeblio = function(word){
  var query = word.selectionText;
  
  chrome.tabs.create({url: "https://www.weblio.jp/content_find?query=" + query + "&searchType=exact"});
};

chrome.contextMenus.create({
  title: "Search in Weblio",
  contexts:["selection"],
  onclick: searchWeblio
});
