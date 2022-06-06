import React from 'react'
import styles from "../styles/Map.module.css";
import tiles2 from "../images/tiles2.png"

export default function Map() {

    console.log(tiles2);

    //
    // Asset loader
    //

    var Loader = {
        images: {}
    };

    Loader.loadImage = function (key, src) {
        var img = new Image();

        var d = new Promise(function (resolve, reject) {
            img.onload = function () {
                this.images[key] = img;
                resolve(img);
            }.bind(this);

            img.onerror = function () {
                reject('Could not load image: ' + src);
            };
        }.bind(this));

        img.src = src;
        return d;
    };

    Loader.getImage = function (key) {
        return (key in this.images) ? this.images[key] : null;
    };

    //
    // Keyboard handler
    //

    // var Keyboard = {};

    // Keyboard.LEFT = 37;
    // Keyboard.RIGHT = 39;
    // Keyboard.UP = 38;
    // Keyboard.DOWN = 40;

    // Keyboard._keys = {};

    // Keyboard.listenForEvents = function (keys) {
    //     window.addEventListener('keydown', this._onKeyDown.bind(this));
    //     window.addEventListener('keyup', this._onKeyUp.bind(this));

    //     keys.forEach(function (key) {
    //         this._keys[key] = false;
    //     }.bind(this));
    // }

    // Keyboard._onKeyDown = function (event) {
    //     var keyCode = event.keyCode;
    //     if (keyCode in this._keys) {
    //         event.preventDefault();
    //         this._keys[keyCode] = true;
    //     }
    // };

    // Keyboard._onKeyUp = function (event) {
    //     var keyCode = event.keyCode;
    //     if (keyCode in this._keys) {
    //         event.preventDefault();
    //         this._keys[keyCode] = false;
    //     }
    // };

    // Keyboard.isDown = function (keyCode) {
    //     if (!keyCode in this._keys) {
    //         throw new Error('Keycode ' + keyCode + ' is not being listened to');
    //     }
    //     return this._keys[keyCode];
    // };

    //
    // Game object
    //

    var Game = {};

    Game.run = function (context) {
        this.ctx = context;
        this._previousElapsed = 0;

        var p = this.load();
        Promise.all(p).then(function (loaded) {
            this.init();
            window.requestAnimationFrame(this.tick);
        }.bind(this));
    };

    Game.tick = function (elapsed) {
        window.requestAnimationFrame(this.tick);

        // clear previous frame
        this.ctx.clearRect(0, 0, 800, 800);

        // compute delta time in seconds -- also cap it
        var delta = (elapsed - this._previousElapsed) / 1000.0;
        delta = Math.min(delta, 0.25); // maximum delta of 250 ms
        this._previousElapsed = elapsed;

        this.update(delta);
        this.render();
    }.bind(Game);

    // override these methods to create the demo
    Game.init = function () {};
    Game.update = function (delta) {};
    Game.render = function () {};

    //
    // start up function
    //

    window.onload = function () {
        var context = document.getElementById('demo').getContext('2d');
        Game.run(context);
    };

    var map = {
        cols: 9,
        rows: 12,
        tsize: 32,
        tiles: [
            2, 11, 11, 11, 2, 12, 12, 2, 2,
            13, 1, 1, 1, 1, 1, 1, 3, 2,
            13, 1, 1, 1, 9, 1, 1, 1, 2,
            2, 5, 1, 1, 1, 1, 1, 1, 2,
            2, 2, 1, 1, 1, 4, 2, 8, 2,
            2, 2, 1, 1, 1, 2, 1, 1, 2,
            2, 1, 1, 5, 1, 3, 2, 2, 2,
            2, 1, 1, 3, 5, 1, 1, 1, 2,
            2, 1, 3, 5, 3, 1, 1, 1, 2,
            2, 1, 1, 3, 1, 1, 9, 1, 2,
            2, 5, 1, 1, 2, 1, 1, 1, 2,
            2, 12, 2, 2, 2, 2, 2, 2, 2
        ],
        getTile: function (col, row) {
            return this.tiles[row * map.cols + col];
        }
    };

    Game.load = function () {
        return [
            Loader.loadImage('tiles', tiles2)
        ];
    };

    Game.init = function () {
        this.tileAtlas = Loader.getImage('tiles');
    };

    Game.update = function (delta) {
    };

    Game.render = function () {
        for (var c = 0; c < map.cols; c++) {
            for (var r = 0; r < map.rows; r++) {
                var tile = map.getTile(c, r);
                if (tile !== 0) { // 0 => empty tile
                    this.ctx.drawImage(
                        this.tileAtlas, // image
                        (tile - 1) * map.tsize, // source x
                        0, // source y
                        map.tsize, // source width
                        map.tsize, // source height
                        c * map.tsize,  // target x
                        r * map.tsize, // target y
                        map.tsize, // target width
                        map.tsize // target height
                    );
                }
            }
        }
    };

    return (
        <div className={styles['mapContainer']}>
        <canvas id="demo" className={styles['canvasDemo']} width="288" height="384"></canvas>
        </div>
    )
}
