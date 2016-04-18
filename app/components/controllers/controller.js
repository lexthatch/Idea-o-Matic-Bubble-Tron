app.controller('appController', function($scope, $timeout, $location, Bubbles) {

    $scope.bubbles = Bubbles
    
  
    // $scope.generateBubbles = function() {
    //     for (var i = 0; i < 10; i++) {
    //         $scope.bubbles.$add({
    //             idea: chance.name({
    //                 middle: true,
    //                 prefix: true
    //             }),
    //             location: chance.domain(),
    //             // count: 2
    //             count: chance.integer({
    //                 min: 0,
    //                 max: 4
    //             })
    //         })
    //     }
    // }();

    $scope.bumpUp = function(obj, index) {
        $scope.buttonDisabled = true;
        // debugger
            
        obj.count++
            $('#' + index).animateCss('bounce')
        $scope.bubbles.$save().then(function(){
        if (obj.count >= 5) {
            $scope.commonWall(obj)
            $timeout(function() {
                $scope.pop(obj)
            }, 2000);
        }
        $timeout(function() {
            $scope.buttonDisabled = false
        }, 750);
        })
    }
    $scope.bumpDown = function(obj, index) {
        $scope.buttonDisabled = true;
        obj.count--
            $('#' + index).animateCss('shake')
        $timeout(function() {
            $scope.buttonDisabled = false
        }, 750);
        return;
    }
    $scope.pop = function(obj, index) {
        $scope.buttonDisabled = true;
        $('#' + index).animateCss('fadeOut')
        $timeout(function() {
            $scope.bubbles.splice($scope.bubbles.indexOf(obj), 1);
            $scope.buttonDisabled = false
        }, 500)
        return;
    }
    $scope.commonWall = function(thought) {
        swal({
                title: "Common Wall?",
                text: "Do you want to meet with these other people on " + thought.idea + "?!",
                type: "success",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, Lets Do It!",
                cancelButtonText: "No, I changed my mind!",
                closeOnConfirm: true,
                closeOnCancel: false,
                imageUrl: "http://previews.123rf.com/images/Krisdog/Krisdog1210/krisdog121000021/15611120-Illustration-of-a-hand-giving-a-thumbs-up-in-a-woodblock-style-Stock-Vector.jpg"},
            function(isConfirm) {
                if (isConfirm) {
                    $location.path("/view1")
                } else {
                    swal({
                        title: "Sorry",
                        text: "Hope you find a topic you want to talk about",
                        type: "error"
                    });
                }
            });

    }

    $scope.newThoughtLength = 25;
    $scope.newThought = function() {
        if (($scope.newIdea.idea === null) || ($scope.newIdea.idea == "")) {
            alert("Sorry, plese enter in a valid input")
        } else if ($scope.newIdea.idea.length > $scope.newThoughtLength) {
            alert("Sorry, too long. " + $scope.newThoughtLength + " characters or less, you used " + $scope.newIdea.idea.length + " characters")
            $scope.newIdea = "";
        } else {

            $scope.bubbles.$add({
                idea: $scope.newIdea.idea,
                location: $scope.newIdea.location,
                count: 0
            })
            $timeout(function() {
                $('#' + $scope.newIdea.idea).animateCss('bounce')
            }, 100)
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