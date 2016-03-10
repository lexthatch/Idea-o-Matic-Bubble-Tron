app.controller('appController', function ($scope) {
    $scope.bubbles = [{idea: "Star Wars Epiosde 8 Ending", count: 0 }, { idea: "Star Wars Epiosde 7 Ending", count: 0 }, { idea: "Star Wars Epiosde 1 Ending", count: 0 }, { idea: "Star Wars Epiosde 2 Ending", count: 0 }, { idea: "Star Wars Epiosde 3 Ending", count: 0 }, { idea: "Star Wars Epiosde 4 Ending", count: 0 }, { idea: "Star Wars Epiosde 5 Ending", count: 0 }, { idea: "Star Wars Epiosde 6 Ending", count: 0 }, { idea: "Star Wars Epiosde 9 Ending", count: 0 }]

    $scope.bumpUp = function (obj) {
        obj.count++
        
        // $scope.bubbles.sort($scope.update(""))
        var temp = $scope.bubbles.indexOf(obj)
        return console.log(temp);
    }
    $scope.bumpDown = function (obj) {
        obj.count--
        return;
    }
    $scope.pop = function (obj) {
        $scope.bubbles.splice($scope.bubbles.indexOf(obj), 1)
        return;
    }
    
    $scope.newThoughtLength = 25;
    $scope.newThought = function () {
        if (($scope.newIdea.idea === null) || ($scope.newIdea.idea == "")) {
            alert("Sorry, plese enter in a valid input")
        }
        else if ($scope.newIdea.idea.length > $scope.newThoughtLength) {
            alert("Sorry, too long. " + $scope.newThoughtLength + " characters or less, you used " + $scope.newIdea.idea.length + " characters")
            $scope.newIdea = "";
        }
        else {
            $scope.bubbles.push(
                {
                    idea: $scope.newIdea.idea,
                    event: $scope.newIdea.event,
                    count: 0
                })
        }
    }
    
    $scope.update = function (property) {
        return function (a, b) {
            if (a[property] < b[property]) {
                return -1
            }
            else if (a[property] > b[property]) {
                return 1
            }
            else {
                return 0
            }
        }
    }

});