// define a user behaviour
var BrickList = qc.defineBehaviour('qc.engine.BrickList', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
}, {
    // fields need to be serialized
    prefab: qc.Serializer.PREFAB
});

// Called when the script instance is being loaded.
BrickList.prototype.awake = function() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 13; j++) {
            var item = this.game.add.clone(this.prefab, this.gameObject);
            item.x = j * 40;
            item.y = i * 40;
        }
    }
};

// Called every frame, if the behaviour is enabled.
//BrickList.prototype.update = function() {
//
//};
