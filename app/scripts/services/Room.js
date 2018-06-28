(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    //turning the rooms into an array
    var rooms = $firebaseArray(ref);
    console.log(rooms);
    Room.all = rooms;

    return Room;
  }

  angular
    .module('bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();
