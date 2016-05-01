app.controller('appController', function($scope,$timeout) {
    $scope.bubbles = []

    $scope.generateBubbles = function(){
        for (var i = 0; i < 3; i++){
        $scope.bubbles.push(
            {
            idea: chance.name({middle: true, prefix: true}),
            event: chance.domain(),
            count: 2
            // count: chance.integer({min: 0, max: 4})
            })
        }
    }();
    // $scope.bubbles = [{ idea: "Star Wars Epiosde 8 Ending", count: 0 }, { idea: "Star Wars Epiosde 7 Ending", count: 0 }, { idea: "Star Wars Epiosde 1 Ending", count: 0 }, { idea: "Star Wars Epiosde 2 Ending", count: 0 }, { idea: "Star Wars Epiosde 3 Ending", count: 0 }, { idea: "Star Wars Epiosde 4 Ending", count: 0 }, { idea: "Star Wars Epiosde 5 Ending", count: 0 }, { idea: "Star Wars Epiosde 6 Ending", count: 0 }, { idea: "Star Wars Epiosde 9 Ending", count: 0 }]

    $scope.bumpUp = function(obj, index) {
        // var temp = document.getElementById('bubbles')
        // var bubbleSize = temp.getBoundingClientRect();
        // $scope.class = "bubble2"
        $scope.buttonDisabled = true;
        obj.count++
        $('#'+ index).animateCss('bounce')
        if (obj.count >= 5){
            $timeout(function(){$scope.pop(obj)},10000)
        }
        $timeout(function(){$scope.buttonDisabled = false},750);
        return;
    }
    $scope.bumpDown = function(obj, index) {
        $scope.buttonDisabled = true;
        obj.count--
        $('#'+ index).animateCss('shake')
        $timeout(function(){$scope.buttonDisabled = false},750);
        return;
    }
    $scope.pop = function(obj, index) {
        $scope.buttonDisabled = true;
        $('#'+ index).animateCss('fadeOut')
        $timeout(function(){$scope.bubbles.splice($scope.bubbles.indexOf(obj), 1); $scope.buttonDisabled=false},500)
        return;
    }

    $scope.newThoughtLength = 25;
    $scope.newThought = function() {
        if (($scope.newIdea.idea === null) || ($scope.newIdea.idea == "")) {
            alert("Sorry, please enter in a valid input")
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
                $timeout(function(){$('#' + $scope.newIdea.idea).animateCss('bounce')},100)
        }
    }

    $.fn.extend({ok, 
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).css('animation' , 'none').one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName).css('animation');
            });
        }
    });
});