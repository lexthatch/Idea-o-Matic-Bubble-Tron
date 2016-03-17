app.controller('appController', function($scope,$timeout) {
    $scope.bubbles = [{ idea: "b", count: 4, event: "Rainbow Land" }]

    $scope.generateBubbles = function(){
        for (var i = 0; i < 20; i++){
        $scope.bubbles.push(
            {
            idea:   "Hello World Friend"+i,
            event: "Over The Rainbow",
            count: 4
            })
        }
    }();
    // $scope.bubbles = [{ idea: "Star Wars Epiosde 8 Ending", count: 0 }, { idea: "Star Wars Epiosde 7 Ending", count: 0 }, { idea: "Star Wars Epiosde 1 Ending", count: 0 }, { idea: "Star Wars Epiosde 2 Ending", count: 0 }, { idea: "Star Wars Epiosde 3 Ending", count: 0 }, { idea: "Star Wars Epiosde 4 Ending", count: 0 }, { idea: "Star Wars Epiosde 5 Ending", count: 0 }, { idea: "Star Wars Epiosde 6 Ending", count: 0 }, { idea: "Star Wars Epiosde 9 Ending", count: 0 }]

    $scope.bumpUp = function(obj, index) {
        // var temp = document.getElementById('bubbles')
        // var bubbleSize = temp.getBoundingClientRect();
        // $scope.class = "bubble2"
        obj.count++
        $('#'+ index).animateCss('bounce')
        if (obj.count >= 5){
            $timeout(function(){$scope.pop(obj)},5000)
        }
        return ;
    }
    $scope.bumpDown = function(obj, index) {
        $('#'+ index).animateCss('shake')
        obj.count--
        return;
    }
    $scope.pop = function(obj, index) {
        $('#'+ index).animateCss('fadeOut')
        $timeout(function(){$scope.bubbles.splice($scope.bubbles.indexOf(obj), 1)},750)
        return;
    }

    $scope.newThoughtLength = 25;
    $scope.newThought = function() {
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
                    // event: $scope.newIdea.event,
                    count: 0
                })
                
        }
    }

    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });
});