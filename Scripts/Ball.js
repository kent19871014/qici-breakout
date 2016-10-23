// define a user behaviour
var Ball = qc.defineBehaviour('qc.engine.Ball', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
    this.start = false;
}, {
    // fields need to be serialized
    speed: qc.Serializer.INT,
    paddle:qc.Serializer.NODE
});

// Called when the script instance is being loaded.
//Ball.prototype.awake = function() {
//
//};

// Called every frame, if the behaviour is enabled.
Ball.prototype.update = function () {
    var input = this.game.input;
    if (input.isKeyDown(qc.Keyboard.SPACEBAR) && !this.start) {
        this.start = true;
    }

    if (this.start) {
        var velocity = this.gameObject.body.linearVelocity;
        if (velocity.x >= this.speed) {
            velocity.x = this.speed;
        }
        else {
            velocity.x = -this.speed;
        }

        if (velocity.y >= this.speed) {
            velocity.y = this.speed;
        }
        else {
            velocity.y = -this.speed;
        }
    }
    else {
        this.gameObject.x = this.paddle.x + this.paddle.width / 2;
        this.gameObject.y = this.paddle.y - this.gameObject.height;
    }
};
