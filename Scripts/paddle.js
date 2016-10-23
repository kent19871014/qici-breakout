// define a user behaviour
var paddle = qc.defineBehaviour('qc.engine.paddle', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
    this.rightLine;
    this.leftLine;
}, {
    // fields need to be serialized
    speed: qc.Serializer.INT
});

// Called when the script instance is being loaded.
paddle.prototype.awake = function() {
    this.rightLine = 640 - this.gameObject.width;
    this.leftLine = 0;
};

// Called every frame, if the behaviour is enabled.
paddle.prototype.update = function() {
    var input = this.game.input;
    if(input.isKeyDown(qc.Keyboard.LEFT)){
        this.gameObject.x -= this.speed;
    }
    else if(input.isKeyDown(qc.Keyboard.RIGHT)){
        this.gameObject.x += this.speed;
    }

    if (this.gameObject.x > this.rightLine) {
        this.gameObject.x = this.rightLine;
    }
    if (this.gameObject.x < this.leftLine) {
        this.gameObject.x = this.leftLine;
    }
};
