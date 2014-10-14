var path = require('path');

var GitService = function () {
  this.open = require("nodegit").Repo.open;
};

GitService.prototype = {
  log: function (count, callback) {
    console.log('Starting GitService log')
    this.open(path.resolve(__dirname, '../.git'), function(error, repo) {
      if (error) throw error;

      repo.getMaster(function(error, branch) {
        var history = branch.history(),
          i = 0,
          entries = [];

        history.on("commit", function(commit) {
          if (++i >= count)
            return;

          var author = commit.author();

          entries.push({
            sha: commit.sha(),
            author: author.name(),
            email: author.email(),
            date: commit.date(),
            message: commit.message()
          });

          callback(entries);
        });

        history.start();
      });
    });
  }
};

module.exports = GitService;