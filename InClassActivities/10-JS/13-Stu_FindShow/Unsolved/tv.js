
var axios = require("axios");

var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;


    axios.get(URL).then(function (response) {

      var JSONdata = response.data;

      var showData= [
        "Show name : " + JSONdata.name;
        ""
      ]

    })
  };
};


module.exports = TV;


