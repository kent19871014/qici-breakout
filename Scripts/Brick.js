// define a user behaviour
var Brick = qc.defineBehaviour('qc.engine.Brick', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
}, {
    // fields need to be serialized
});

// Called when the script instance is being loaded.
Brick.prototype.awake = function () {
    var self = this;
    this.gameObject.body.onContact.add(function (o) {
        self.gameObject.destroy();
    });
};

// Called every frame, if the behaviour is enabled.
//Brick.prototype.update = function() {
//
//};
